# Step 4 - Handover Documentation Template

Fill in every bracketed field for each client. Deliver this document as a PDF or Google Doc - not a code file. Write it as if the reader has never touched a website before.

---

# [BUSINESS NAME] - Website Handover Guide

**Prepared by:** OYE Optimize (OYE Creations)
**Date:** [DATE]
**Site URL:** [https://DOMAIN.com]
**Contact for questions:** [your email]

---

## A. What You Now Own

You have full ownership of your new website. Nothing is locked behind a third-party platform. Here's what was created for you:

| Asset | Details |
|---|---|
| GitHub Repository | [https://github.com/[username]/[repo-name]] |
| Cloudflare Pages Project | [project-name] at dash.cloudflare.com |
| Cloudflare KV Namespace | [namespace name] - stores your hours, specials, and settings |
| Custom Domain | [DOMAIN.com] |
| Admin Panel URL | [https://DOMAIN.com/admin.html] |
| Admin Username | (your email or "admin") |
| Admin Password | [delivered separately - do not write here] |

**What this means:** Your site files live in GitHub (a free code storage service). Cloudflare hosts the live site for free. You pay only for your domain name (~$12/year). There is no monthly fee to anyone.

If you ever want to move the site elsewhere, you own the code and can take it anywhere.

---

## B. How Deploys Work

A "deploy" is when changes to the code go live on your website. There are two ways this works:

### Option A: GitHub Auto-Deploy (if your repo is connected)
1. A code change is pushed to your GitHub repository
2. Cloudflare Pages automatically detects the change
3. Your site rebuilds and goes live within ~1 minute

You don't need to do anything. If OYE Optimize (or any developer you hire) pushes code to your GitHub repo, it goes live automatically.

### Option B: Manual Deploy (via command line)
If changes need to be deployed without a GitHub push:
```bash
npx wrangler pages deploy . --project-name [project-name]
```

This is only relevant if a developer needs to deploy from their local machine. You (the business owner) never need to run this command.

---

## C. Admin Panel Guide

Your admin panel lets you update your website without touching any code.

**URL:** [https://DOMAIN.com/admin.html]
**Username:** [admin or email]
**Password:** [delivered separately]

Log in anytime from any device - phone, tablet, or computer.

---

### Updating Your Hours

1. Go to your admin panel and log in
2. Click **"Hours"** in the dashboard menu
3. For each day:
   - Enter the opening time (e.g., 8:00 AM)
   - Enter the closing time (e.g., 6:00 PM)
   - Check "Closed" if you're not open that day
4. Click **"Save Hours"**
5. Your live website will show the updated hours within a few minutes

**Adding a date exception (holiday or special closure):**
1. In the Hours section, scroll to "Date Exceptions"
2. Click "Add Exception"
3. Enter the date and either custom hours or check "Closed all day"
4. Click "Save"
5. On that date, your site will show the exception hours instead of the regular hours

---

### Managing Specials / Promotions

1. Go to **"Specials"** in the dashboard
2. Click **"Add Special"**
3. Enter a title (e.g., "Spring Oil Change - $29.99")
4. Enter a description (what's included, how to redeem, expiration date)
5. Make sure "Active" is checked
6. Click **"Save"**

Your special will appear on the live site in the Specials/Promotions section.

**To hide a special (without deleting it):**
- Uncheck "Active" and save
- The special disappears from the live site but stays saved in your dashboard for future use

**To delete a special permanently:**
- Click the delete/trash icon next to it

---

### Service Area Management (Mobile Shops Only)

This section manages the cities and areas you serve. Your live site shows a map with pins + a list of service areas.

1. Go to **"Service Areas"** in the dashboard
2. Type a city name in the search box
3. Select the correct city from the dropdown
4. Click **"Add"**
5. The city appears on your map and service area list
6. Click **"Save"**

**To remove a city:** Click the X next to its name in the list, then save.

Your live site map and service area chips update automatically.

---

### Emergency Closure Message

Use this if you need to quickly let customers know you're unavailable - equipment breakdown, family emergency, severe weather, etc.

1. Go to **"Emergency Closure"** in the dashboard
2. Type your message (e.g., "Closed today due to weather. Reopening Monday. Call us at [phone] to reschedule.")
3. Toggle **"Active"** to ON
4. Click **"Save"**

A banner will immediately appear at the top of your live website. The scheduling button will be hidden or show your closure message instead.

**To reopen:**
- Go back to Emergency Closure
- Toggle "Active" to OFF
- Save
- The banner disappears and your site returns to normal

---

### Updating Contact Information

1. Go to **"Contact Info"** in the dashboard
2. Update your phone number, address, or email
3. Click **"Save"**

Contact info changes update the clickable phone link, footer, and structured data on your site.

---

### Changing Your Admin Password

1. Go to **"Change Password"** in the dashboard
2. Enter your current password
3. Enter your new password
4. Enter your new password again to confirm
5. Click **"Update Password"**

If you forget your password, contact OYE Optimize - we can reset it for you.

---

## D. DNS Transfer Steps

Your site is currently on a temporary Cloudflare Pages URL (`[project-name].pages.dev`). To use your own domain (`DOMAIN.com`), you need to transfer DNS management to Cloudflare. This is a one-time step.

**Time required:** 10-15 minutes of active steps + up to 24 hours for the internet to propagate the change (usually under 1 hour)

**You will need:** Access to your domain registrar (the company where you bought your domain - GoDaddy, Namecheap, Google Domains, etc.)

### Steps:

**1. Add your site to Cloudflare (free plan)**
- Go to [dash.cloudflare.com](https://dash.cloudflare.com)
- Log in or create a free account
- Click **"Add a site"**
- Enter your domain name (e.g., `[DOMAIN.com]`)
- Select the **Free** plan

**2. Cloudflare scans your existing DNS records**
- Cloudflare will find and copy all your existing DNS records
- Review the list - confirm your current records are there (A records, MX records for email, etc.)
- Click **Continue**

**3. Cloudflare gives you new nameservers**
- You'll see two nameserver addresses like:
  - `nia.ns.cloudflare.com`
  - `hal.ns.cloudflare.com`
- Write these down

**4. Update nameservers at your registrar**
- Log in to your domain registrar (GoDaddy / Namecheap / etc.)
- Find DNS Settings or Nameservers for your domain
- Replace the existing nameservers with the two Cloudflare nameservers from Step 3
- Save

**5. Wait for propagation**
- This typically takes 15 minutes to 2 hours
- Cloudflare will email you when it's done
- You can check status at [dash.cloudflare.com](https://dash.cloudflare.com)

**6. Enable "Always Use HTTPS" in Cloudflare**
- In Cloudflare dashboard: SSL/TLS > Edge Certificates
- Toggle **"Always Use HTTPS"** to ON
- This ensures anyone who types `http://` gets automatically upgraded to `https://`

**7. Connect your domain to Cloudflare Pages**
- In Cloudflare dashboard: Pages > [your project] > Custom Domains
- Click **"Set up a custom domain"**
- Enter `[DOMAIN.com]`
- Follow the prompts (Cloudflare will add the DNS record automatically)

---

## E. Post-Transfer Audit

After DNS transfer is complete and your domain is live on Cloudflare, run the security header check to confirm nothing changed during transfer:

```bash
curl -sI https://[DOMAIN.com] | grep -i "strict-transport\|content-security\|x-frame\|x-content\|referrer\|permissions\|cross-origin"
```

All headers should be present. If any are missing, check that the Cloudflare Pages project is correctly mapped to the domain and redeploy.

Run the full SEO + Security audit from `workflow/01-audit.md` and confirm scores match pre-transfer:
- SEO: 100/100
- Security: 100/100

If scores dropped, identify which item changed and fix before closing the project.

---

## F. SureCritic Plugin Activation

Your site has placeholder slots for the SureCritic review widget. When you're ready to activate:

**What you'll need:** Your SureCritic embed codes (provided by SureCritic when you set up your account)

### Slot locations in your site:
1. **Below the hero** - main review feed
2. **Reviews/testimonials section** - widget or badge
3. **Footer** - compact badge

### To activate:

**Step 1:** Get your embed codes from SureCritic (they'll provide snippet(s) of HTML to paste)

**Step 2:** Send embed codes to OYE Optimize - we'll paste them into the correct slots and update the Content Security Policy to allow the SureCritic scripts to load

**Specifically, we'll add to your `_headers` file:**
- `script-src`: add SureCritic's script domain
- `frame-src` (if widget uses an iframe): add SureCritic's frame domain
- `connect-src` (if widget makes API calls): add SureCritic's API domain

**Step 3:** We'll redeploy the site and confirm the widget loads on desktop and mobile

This is a 15-minute task - just send us the embed codes.

---

## G. Ongoing Costs Summary

Here is everything you'll pay for this website going forward:

| Item | Cost | Frequency | Provider |
|---|---|---|---|
| Domain name renewal | ~$12 | Per year | Your registrar (GoDaddy, Namecheap, etc.) |
| Cloudflare hosting | $0 | Free tier | Cloudflare |
| Cloudflare Workers + KV | $0 | Free tier (up to 100K req/day) | Cloudflare |
| GitHub (code storage) | $0 | Free tier | GitHub |
| SureCritic | Varies | Per SureCritic plan | SureCritic |

**Total platform cost (outside SureCritic): ~$12/year.**

There is no hosting fee, no monthly CMS fee, no page builder fee, no plugin fee. You own the code outright.

---

*Questions? Contact OYE Optimize: [your contact info]*
