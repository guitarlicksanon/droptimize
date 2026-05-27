# Step 2 - Build Process

## Before Writing a Single Line of Code

### Confirm: mobile shop or rooftop?
If you don't have a confirmed answer from Step 1 (Audit), ask now. This changes:

| Element | Mobile Shop | Rooftop Shop |
|---|---|---|
| Hero copy | "We come to you" | Address + directions |
| Schema @type | varies - see matrix.md; areaServed | address + geo coordinates |
| Service area map | Yes - Leaflet map with radius/markers | No - Google Maps embed or address only |
| Service area admin panel | Yes - add/remove cities, map markers | No |
| Scheduling CTA | "Book at your location" | "Book an appointment" |
| H1 copy | "Mobile [service] in [city]" | "[Service] in [city]" |

Getting this wrong means rebuilding half the site. Confirm first.

---

## Phase 1 - Scrape the Existing Site

Before touching code, extract everything from the client's current site.

### Text content to capture:
- Business name (exact legal + DBA)
- Tagline or headline (they may want it preserved)
- All service names and descriptions
- Pricing (if published)
- About / story copy
- Team member names and bios (if present)
- Phone number(s)
- Physical address (rooftop) or service area cities (mobile)
- Hours of operation
- Any certifications, licenses, warranty copy
- Review snippets they may be featuring
- Footer legal copy

### Images to download:
- Logo (all variants - horizontal, stacked, icon only)
- Hero/banner image(s)
- Team photos
- Before/after or service photos
- Any background textures they use

### Structural notes:
- What order are sections in? (preserve their flow unless there's a strong UX reason to change it)
- What colors are they using? (extract hex values from DevTools or screenshot)
- What fonts? (DevTools > Computed > font-family)

Save everything to a working folder: `~/Desktop/Claude CoWork/[client-slug]/scrape/`

---

## Phase 2 - Apply the SC Stack

The SC (SureCritic) stack is the canonical template. Colin Auto Repair (`~/Desktop/Claude CoWork/colin/`) is the reference implementation. Read that codebase before building any new client.

The master technical spec is at:
`~/.claude/projects/-Users-hoa/memory/reference_surecritic_site_template.md`

### File structure for every build:

```
[client-slug]/
  index.html           ← main site
  admin.html           ← admin login page
  dashboard.html       ← admin dashboard (protected)
  _headers             ← Cloudflare Pages security headers
  _redirects           ← Cloudflare Pages redirects (if needed)
  sitemap.xml          ← sitemap
  robots.txt           ← robots
  css/
    style.css          ← main stylesheet
    admin.css          ← admin panel styles
  js/
    main.js            ← site JS
    admin.js           ← admin panel JS (version-bumped on every deploy)
    content-loader.js  ← loads KV data into the live site
  workers/
    api.js             ← Cloudflare Worker (KV read/write, auth)
  images/
    logo.*             ← client logo
    hero.*             ← hero image
    [other assets]
```

---

## Phase 3 - Admin Panel Features

Every build ships with a full admin panel. Features:

### Hours Management
- Mon-Fri: individual open/close times per day, or closed toggle
- Saturday: open/close times or closed toggle
- Sunday: open/close times or closed toggle
- Date exceptions / overrides (e.g., "Dec 25 - closed", "Jul 4 - 8am-2pm")

Admin fields: day name, open time (HH:MM), close time (HH:MM), closed toggle (checkbox)
KV key: `hours`

### Specials
- Title (text, 80 chars max)
- Description (textarea, 300 chars max)
- Active toggle (checkbox - if unchecked, section hidden on live site)

Multiple specials can be saved. Active = displayed. Inactive = hidden.
KV key: `specials`

### Service Areas + Map (mobile shops only)
- Add/remove city entries
- Each entry: city name, lat/lng (auto-populated from geocoder or manual)
- Map renders in admin for visual confirmation
- Live site shows Leaflet map with markers + city chip list

KV key: `serviceAreas`

### Emergency Closure Message
- Message text (textarea)
- Active toggle
- When active: banner appears at top of live site, scheduling widget hidden or shows message

KV key: `emergencyClosure`

### Contact Info
- Phone number (used in click-to-call links and schema)
- Physical address (rooftop shops) or city/state (mobile shops)
- Email address

KV key: `contactInfo`

### Change Password
- Current password field
- New password field
- Confirm new password field
- Validation: current must match stored hash, new must match confirm

---

## Phase 4 - Key CSS Rules

These are non-negotiable. Get them wrong and the site breaks on Chrome or iOS.

### Leaflet Map - overflow fix (Chrome 108+)
Every element wrapping a Leaflet map container must have:
```css
overflow: clip;
```
Do NOT use `overflow: hidden`. Chrome 108+ changed scroll behavior - `hidden` causes the page to lock/jump when the user scrolls over the map. `clip` fixes it.

This applies to: the map wrapper div, any parent section, and any parent container that has a constrained height.

### Map jump field - z-index (service area dropdown)
The city search input and suggestions dropdown in the service area admin panel must render above the Leaflet map tiles. Leaflet tiles create their own stacking context with z-index in the hundreds.

```css
.map-jump-field {
  position: relative;
  z-index: 2;
}

.area-suggestions {
  position: absolute;
  z-index: 10;
}
```

If you skip `position: relative` on the parent, `z-index` has no effect and the dropdown renders behind the map.

### Admin panel layout
Admin inputs should use consistent widths and spacing. No inline styles - keep everything in admin.css.

---

## Phase 5 - Version Cache Busting

Every reference to `admin.js` must include a version query parameter:

```html
<script src="js/admin.js?v=N"></script>
```

Bump `N` on every deploy that touches `admin.js`. Start at `?v=1`. After each deploy that includes admin.js changes, increment: `?v=2`, `?v=3`, etc.

Same pattern for `content-loader.js` if it changes.

This forces browsers to fetch the new file instead of serving from cache. Without this, clients will be on stale admin JS after updates and have no idea why things are broken.

---

## Phase 6 - CSP Hash Computation

When adding inline `<script>` blocks to the HTML that need to be allowed by the Content-Security-Policy, compute their SHA-256 hash:

```python
python3 -c "
import hashlib, base64
script = '''YOUR INLINE SCRIPT CONTENT HERE'''
hash = base64.b64encode(hashlib.sha256(script.encode()).digest()).decode()
print(\"sha256-\" + hash)
"
```

Replace `YOUR INLINE SCRIPT CONTENT HERE` with the exact content of the `<script>` block (not including the `<script>` tags themselves). Whitespace matters - the content must be identical to what's in the HTML.

Add the resulting hash to the `script-src` directive in the `_headers` file:
```
Content-Security-Policy: script-src 'self' 'sha256-YOURHASHHERE' ...
```

---

## Phase 7 - _headers File

The `_headers` file is served by Cloudflare Pages to set HTTP headers. Critical rules:

1. **Single `/*` block only.** Never create per-path blocks like `/admin.html` or `/dashboard.html`. Cloudflare Pages only applies `_headers` to the first matching rule - per-path blocks cause inconsistent header application.

2. **Every security header goes in the `/*` block.** No exceptions.

3. **Template (update CSP per client):**

```
/*
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Resource-Policy: same-origin
  Content-Security-Policy: default-src 'self'; script-src 'self' 'sha256-HASH1' 'sha256-HASH2' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://unpkg.com https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://*.tile.openstreetmap.org https://unpkg.com; connect-src 'self' https://YOUR-WORKER.workers.dev; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests
```

Fill in:
- Actual SHA-256 hashes for any inline scripts
- Correct Workers subdomain for `connect-src`
- Any additional CDN domains needed for SureCritic embeds

---

## Phase 8 - Deploy

### Option A: GitHub auto-deploy (preferred)
1. Create repo: `gh repo create [client-slug]-site --private`
2. Push: `git add -A && git commit -m "initial build" && git push`
3. In Cloudflare Pages dashboard: connect repo, set build output to `/` (no build command - static files)
4. Every future `git push` to main triggers automatic re-deploy

### Option B: Manual wrangler deploy
Use when the build folder has large files (images > a few MB) that would time out on Cloudflare's build system, OR when no GitHub repo is set up.

```bash
# Standard deploy
npx wrangler pages deploy . --project-name [client-slug]-auto-repair

# If current folder has large files (> 25MB total): use a temp dir:
rsync -av --exclude='scrape/' --exclude='*.psd' . /tmp/[client-slug]-deploy/
cd /tmp/[client-slug]-deploy/
npx wrangler pages deploy . --project-name [client-slug]-auto-repair
```

### After deploy
1. Set custom domain in Cloudflare Pages dashboard
2. **Also add `www.DOMAIN.com` as a custom domain** - without this, `www` returns a 525 SSL handshake error for every visitor
3. Verify `_headers` are live: `curl -sI https://DOMAIN.com | grep -i "strict-transport"`
4. Run the full QA checklist (workflow/03-qa.md)

### Cloudflare SSL settings (required - do this once per domain: never skip)

**Workers & Pages is account-level, not domain-level.** To get there: click the Cloudflare logo → account home → Workers & Pages in sidebar.

In the Cloudflare dashboard for the domain (not Pages):
1. **SSL/TLS → Overview → Configure → Full (strict)**
   - Never leave it on "Full" or "Flexible" - Safari on iOS returns 525 SSL handshake failed
   - Never disable anything labeled "Automatic" or "Recommended"
2. **SSL/TLS → Edge Certificates:**
   - Always Use HTTPS → **On**
   - Automatic HTTPS Rewrites → **On**

Verify both `www` and non-www are clean:
```bash
curl -so /dev/null -w "%{http_code}" https://DOMAIN.com      # must be 200
curl -so /dev/null -w "%{http_code}" https://www.DOMAIN.com  # must be 301 (redirect to non-www)
```
If `www` returns 525: the `www` custom domain is not set up in Pages. If `www` returns 200 instead of 301: the `_redirects` file is missing the `www → non-www` rule.

---

## Phase 9 - Workers + KV Setup

Every build needs a Cloudflare Worker and KV namespace.

```bash
# Create KV namespace
npx wrangler kv:namespace create "[CLIENT]_STORE"

# Note the namespace ID from output: add to wrangler.toml:
# [[kv_namespaces]]
# binding = "STORE"
# id = "YOUR_NAMESPACE_ID"

# Deploy the worker
npx wrangler deploy workers/api.js
```

The Worker handles:
- `GET /api/hours` - read hours from KV
- `POST /api/hours` - write hours to KV (auth required)
- `GET /api/specials` - read specials
- `POST /api/specials` - write specials (auth required)
- `GET /api/serviceAreas` - read service areas (mobile shops only)
- `POST /api/serviceAreas` - write service areas (auth required)
- `GET /api/emergencyClosure` - read closure status
- `POST /api/emergencyClosure` - write closure status (auth required)
- `GET /api/contactInfo` - read contact info
- `POST /api/contactInfo` - write contact info (auth required)
- `POST /api/changePassword` - change admin password (auth required)

Auth: Bearer token in Authorization header, checked against KV-stored hash.

---

## Phase 10 - SureCritic Plugin Slots

Every build includes placeholder slots for the SureCritic review widget. Even if the client doesn't have SureCritic yet, the slots exist so activation is a copy-paste operation with no code changes required.

Slot locations:
1. Below the hero section (desktop: right rail or centered; mobile: full width)
2. In the reviews/testimonials section (replace or supplement existing testimonials)
3. In the footer (compact badge)

When SureCritic provides embed codes, paste into slots and add required CSP domains to `_headers`. See handover doc (workflow/04-handover.md) for full activation steps.
