# Step 1 - Audit Protocol

## Before You Start

### Request the client's current URL
Ask the client for their live website URL. If they don't have one, note that - the audit becomes a "baseline zero" and the pitch becomes even stronger.

### Ask: mobile shop or rooftop?
This is the first question before touching anything.

- **Mobile shop** = technician travels to the customer's location. Schema type includes service areas. The audit checks for service area map, geo-targeted copy ("we come to you in [city]"), and a strong mobile CTA above the fold.
- **Rooftop** = fixed physical location. Schema type includes address + geo coordinates. The audit checks for Google Maps embed or directions link, physical address in footer, and hours displayed prominently.

This answer also changes what "100/100 SEO" means in practice - mobile shops need service area pages and radius copy; rooftop shops need NAP consistency and local map pack signals.

---

## SEO Audit - 100-Point Checklist

Run each item and record: current state, pass/fail, and point value.

### Title Tag (10 pts)
- [ ] Title tag exists (5 pts)
- [ ] Under 60 characters (2 pts)
- [ ] Includes primary city (2 pts)
- [ ] Includes primary keyword / service type (1 pt)

**Check:** View source or DevTools > Elements > `<title>`
**Target format:** `Mobile Mechanic in [City] | [Business Name]`

---

### Meta Description (8 pts)
- [ ] Meta description exists (4 pts)
- [ ] Under 160 characters (2 pts)
- [ ] Includes city + keyword + a call to action (2 pts)

**Check:** `<meta name="description" content="...">`
**Target format:** `[Business Name] - [service] in [city]. [differentiator]. Call [phone] or book online.`

---

### H1 Tag (8 pts)
- [ ] Exactly one H1 on the page (4 pts)
- [ ] H1 includes city name (2 pts)
- [ ] H1 includes primary service keyword (2 pts)

**Check:** DevTools or `curl -s https://DOMAIN.com | grep -i '<h1'`

---

### H2 Tags (6 pts)
- [ ] H2s present on the page (2 pts)
- [ ] At least 2 H2s include service keywords (2 pts)
- [ ] At least 1 H2 includes city or neighborhood reference (2 pts)

---

### Canonical URL (5 pts)
- [ ] `<link rel="canonical" href="https://DOMAIN.com/">` present (3 pts)
- [ ] Canonical matches the live URL exactly (2 pts)

**Check:** `curl -s https://DOMAIN.com | grep -i canonical`

---

### Open Graph Tags (10 pts)
- [ ] `og:title` present (2 pts)
- [ ] `og:description` present (2 pts)
- [ ] `og:image` present and points to a real image (3 pts)
- [ ] `og:url` present and matches canonical (2 pts)
- [ ] `og:type` present (`website` or `business.business`) (1 pt)

**Check:** `curl -s https://DOMAIN.com | grep -i 'og:'`

---

### Twitter Card Meta (4 pts)
- [ ] `twitter:card` present (`summary_large_image`) (2 pts)
- [ ] `twitter:title` present (1 pt)
- [ ] `twitter:description` present (1 pt)

---

### JSON-LD Structured Data / Schema (15 pts)
- [ ] `<script type="application/ld+json">` block present (5 pts)
- [ ] Correct `@type` for industry (see matrix.md for per-industry types) (3 pts)
- [ ] `name`, `telephone`, `url` present (2 pts)
- [ ] `address` present with `streetAddress`, `addressLocality`, `addressRegion`, `postalCode` (2 pts)
- [ ] `openingHoursSpecification` present (2 pts)
- [ ] `areaServed` present (mobile shops) OR `geo` coordinates present (rooftop shops) (1 pt)

**Check:** `curl -s https://DOMAIN.com | grep -A 50 'application/ld+json'`
**Validator:** https://search.google.com/test/rich-results

---

### Sitemap (5 pts)
- [ ] `sitemap.xml` exists at `https://DOMAIN.com/sitemap.xml` (3 pts)
- [ ] Sitemap submitted to Google Search Console (2 pts - ask client or check GSC)

**Check:** `curl -sI https://DOMAIN.com/sitemap.xml | head -1`

---

### robots.txt (5 pts)
- [ ] `robots.txt` exists at `https://DOMAIN.com/robots.txt` (2 pts)
- [ ] Does not block Googlebot (2 pts)
- [ ] References sitemap URL (1 pt)

**Check:** `curl -s https://DOMAIN.com/robots.txt`

---

### Image Alt Attributes (8 pts)
- [ ] All images have alt attributes (4 pts)
- [ ] Alt text is descriptive, not generic ("image1.jpg") (2 pts)
- [ ] At least 2 alts include geo + service keywords (2 pts)

**Check:** `curl -s https://DOMAIN.com | grep -i '<img'` - look for missing or empty `alt=""`

---

### Mobile Viewport Meta Tag (4 pts)
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">` present (4 pts)

---

### Page Speed Signals (12 pts)
- [ ] No render-blocking scripts in `<head>` without `defer` or `async` (4 pts)
- [ ] Images have explicit `width` and `height` attributes (4 pts)
- [ ] No massive uncompressed images (visual check - images should be under 300KB each) (4 pts)

**Check:** DevTools > Network tab, filter by Img. DevTools > Elements, inspect `<script>` tags in `<head>`.

---

## SEO Score Calculation

| Category | Max Points |
|---|---|
| Title Tag | 10 |
| Meta Description | 8 |
| H1 Tag | 8 |
| H2 Tags | 6 |
| Canonical URL | 5 |
| Open Graph Tags | 10 |
| Twitter Card | 4 |
| JSON-LD Schema | 15 |
| Sitemap | 5 |
| robots.txt | 5 |
| Image Alt Attributes | 8 |
| Viewport Meta | 4 |
| Page Speed Signals | 12 |
| **Total** | **100** |

---

## Security Audit - 100-Point Checklist

### HTTPS Enforced (10 pts)
- [ ] Site loads over HTTPS (5 pts)
- [ ] HTTP redirects to HTTPS (5 pts)

**Check:** `curl -sI http://DOMAIN.com | grep -i location`

---

### HSTS Header (15 pts)
- [ ] `Strict-Transport-Security` header present (8 pts)
- [ ] Includes `max-age=63072000` (at least 2 years) (4 pts)
- [ ] Includes `includeSubDomains` (2 pts)
- [ ] Includes `preload` (1 pt)

---

### Content-Security-Policy (20 pts)
- [ ] `Content-Security-Policy` header present (10 pts)
- [ ] Does not use `unsafe-inline` broadly or `unsafe-eval` (5 pts)
- [ ] Restricts `frame-ancestors` (5 pts)

---

### X-Frame-Options (10 pts)
- [ ] `X-Frame-Options: DENY` present (10 pts)

---

### X-Content-Type-Options (8 pts)
- [ ] `X-Content-Type-Options: nosniff` present (8 pts)

---

### Referrer-Policy (8 pts)
- [ ] `Referrer-Policy: strict-origin-when-cross-origin` present (8 pts)

---

### Permissions-Policy (8 pts)
- [ ] `Permissions-Policy` header present (8 pts)

---

### Cross-Origin-Opener-Policy (7 pts)
- [ ] `Cross-Origin-Opener-Policy: same-origin` present (7 pts)

---

### Cross-Origin-Resource-Policy (7 pts)
- [ ] `Cross-Origin-Resource-Policy: same-origin` present (7 pts)

---

### Admin/Staging URL Protection (4 pts)
- [ ] Admin or staging URLs return `X-Robots-Tag: noindex` (4 pts)

---

### No Sensitive Info in Source (3 pts)
- [ ] No API keys, passwords, or credentials visible in HTML source (3 pts)

**Check:** `curl -s https://DOMAIN.com | grep -i 'api_key\|password\|secret\|token'`

---

## Security Score Calculation

| Header | Max Points |
|---|---|
| HTTPS Enforced | 10 |
| HSTS | 15 |
| Content-Security-Policy | 20 |
| X-Frame-Options | 10 |
| X-Content-Type-Options | 8 |
| Referrer-Policy | 8 |
| Permissions-Policy | 8 |
| Cross-Origin-Opener-Policy | 7 |
| Cross-Origin-Resource-Policy | 7 |
| Admin/Staging noindex | 4 |
| No sensitive info in source | 3 |
| **Total** | **100** |

---

## curl Header Check Commands

Run this single command to check all major security headers at once:

```bash
curl -sI https://DOMAIN.com | grep -i "strict-transport\|content-security\|x-frame\|x-content\|referrer\|permissions\|cross-origin"
```

Check HTTPS redirect:
```bash
curl -sI http://DOMAIN.com | grep -i "location\|strict-transport"
```

Check for sensitive info in source:
```bash
curl -s https://DOMAIN.com | grep -i "api_key\|password\|secret\|token\|private"
```

Check sitemap and robots:
```bash
curl -sI https://DOMAIN.com/sitemap.xml | head -1
curl -s https://DOMAIN.com/robots.txt
```

Check schema:
```bash
curl -s https://DOMAIN.com | grep -A 80 'application/ld+json'
```

---

## Report Format

Deliver findings in this format:

---

### [Business Name] - Site Audit Report

**Current SEO Score: XX / 100**
```
SEO  [████████░░░░░░░░░░░░] XX/100
```

**Current Security Score: XX / 100**
```
SEC  [████░░░░░░░░░░░░░░░░] XX/100
```

**Projected Post-Rebuild Scores:**
```
SEO  [████████████████████] 100/100
SEC  [████████████████████] 100/100
```

---

### SEO Findings

| Item | Current State | Fix Required | Points Impact |
|---|---|---|---|
| Title tag | Missing | Add keyword + city | +10 |
| Meta description | Present but 210 chars | Shorten to under 160 | +2 |
| H1 | "Welcome to our shop" | Include city + keyword | +4 |
| JSON-LD schema | Absent | Add full LocalBusiness schema | +15 |
| Canonical URL | Absent | Add canonical link tag | +5 |
| Open Graph | Absent | Add all 5 OG tags | +10 |
| Twitter Card | Absent | Add twitter:card meta | +4 |
| Sitemap | Absent | Create and submit sitemap.xml | +5 |
| robots.txt | Absent | Create robots.txt | +5 |
| Image alts | 3 of 8 images missing alt | Add geo + service alts | +4 |

---

### Security Findings

| Item | Current State | Fix Required | Points Impact |
|---|---|---|---|
| HTTPS | Enforced | - | 0 |
| HSTS | Missing | Add Strict-Transport-Security header | +15 |
| CSP | Missing | Add Content-Security-Policy header | +20 |
| X-Frame-Options | Missing | Add X-Frame-Options: DENY | +10 |
| X-Content-Type | Missing | Add X-Content-Type-Options: nosniff | +8 |
| Referrer-Policy | Missing | Add Referrer-Policy header | +8 |
| Permissions-Policy | Missing | Add Permissions-Policy header | +8 |
| COOP | Missing | Add Cross-Origin-Opener-Policy | +7 |
| CORP | Missing | Add Cross-Origin-Resource-Policy | +7 |

---

*All gaps above are fixed in every OYE Optimize rebuild.*
