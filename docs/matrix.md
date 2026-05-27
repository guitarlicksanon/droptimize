# Industry Expansion Matrix

Every industry uses the same SC stack, same 4-step workflow, and same 100/100 standard. This matrix captures what's different per industry: schema type, primary pain point, key admin feature, target keywords, and FAQ schema questions.

Use this when scoping a new client: find their industry row, confirm schema type and admin features needed, pull keywords for SEO build, and pre-populate FAQ schema with the questions below.

---

## How to Read This Matrix

- **Schema @type** - the JSON-LD `@type` value for this industry. Use exactly as written.
- **Primary Pain Point** - the #1 reason their current site is failing them. Lead with this in sales conversations.
- **Key Admin Feature** - the admin panel feature that matters most for this industry (beyond the baseline hours + contact info every build gets).
- **Local SEO Keywords** - target these in title tag, H1, H2s, and schema `keywords` field. Always append the actual city when deploying.
- **FAQ Schema Questions** - pre-populate `FAQPage` JSON-LD with these questions. Write answers based on client's actual info.

---

## Automotive

### Auto Repair (Mobile)
- **Schema @type:** `AutoRepair` + `MobileService` on the service offering
- **Primary Pain Point:** No service area map - customers can't tell if you cover their location; site shows a physical address for a business that has none
- **Key Admin Feature:** Service area cities + Leaflet map with radius markers
- **Local SEO Keywords:** "mobile mechanic near me", "mobile mechanic [city]", "come to my location auto repair", "mechanic that comes to you [city]", "on-site car repair [city]"
- **FAQ Schema Questions:**
  - What areas do you service?
  - Do you come to my home or workplace?
  - What types of vehicles do you repair?
  - How do I book a mobile mechanic?
  - How long does a mobile repair take?

---

### Towing
- **Schema @type:** `AutomotiveBusiness`
- **Primary Pain Point:** 24/7 availability not surfaced in schema or headers - Google can't confirm they're open nights/weekends; no service area shown
- **Key Admin Feature:** Hours (with 24/7 toggle) + service areas
- **Local SEO Keywords:** "towing near me", "emergency tow [city]", "cheap towing [city]", "24 hour towing [city]", "flatbed towing [city]"
- **FAQ Schema Questions:**
  - Do you offer 24/7 towing?
  - How far do you tow?
  - Do you tow motorcycles or oversized vehicles?
  - How quickly can you arrive?
  - Do you accept insurance?

---

### Appliance Repair
- **Schema @type:** `HomeAndConstructionBusiness`
- **Primary Pain Point:** No service area shown; no brand specialties listed - customers searching "Samsung refrigerator repair [city]" find nothing
- **Key Admin Feature:** Service areas + specials (brand-specific or seasonal)
- **Local SEO Keywords:** "appliance repair [city]", "refrigerator repair near me", "washer dryer repair [city]", "oven repair [city]", "Samsung repair [city]"
- **FAQ Schema Questions:**
  - What appliance brands do you repair?
  - Do you offer same-day service?
  - Do you come to my home?
  - What is your service call fee?
  - Do you offer a warranty on repairs?

---

## Home Services

### HVAC
- **Schema @type:** `HVACBusiness`
- **Primary Pain Point:** No emergency hours toggle - customers searching "emergency HVAC" at 11pm see a site showing 9-5 hours with no indication of 24/7 service
- **Key Admin Feature:** Emergency closure message (doubles as emergency service announcement) + specials (seasonal tune-up deals)
- **Local SEO Keywords:** "AC repair near me", "emergency HVAC [city]", "HVAC repair [city]", "furnace repair [city]", "air conditioning installation [city]"
- **FAQ Schema Questions:**
  - Do you offer emergency HVAC service?
  - What HVAC brands do you service?
  - How much does AC repair cost?
  - How often should I get my HVAC serviced?
  - Do you offer financing?

---

### Plumbing
- **Schema @type:** `Plumber`
- **Primary Pain Point:** 24/7 emergency availability not surfaced - neither schema nor headers contain emergency hours; customers can't tell if you'll answer at 2am
- **Key Admin Feature:** Hours override (to show after-hours emergency line) + service areas
- **Local SEO Keywords:** "emergency plumber near me", "plumber [city]", "24 hour plumber [city]", "drain cleaning [city]", "water heater repair [city]"
- **FAQ Schema Questions:**
  - Do you offer emergency plumbing service?
  - What areas do you serve?
  - How much does a plumber cost?
  - Do you handle water heater replacement?
  - Are you licensed and insured?

---

### Electrician
- **Schema @type:** `Electrician`
- **Primary Pain Point:** License number and insurance credentials not in schema - "licensed electrician [city]" searches favor competitors whose sites surface credentials in structured data
- **Key Admin Feature:** Credentials section (license number, insurance, certifications displayed prominently)
- **Local SEO Keywords:** "licensed electrician [city]", "electrician near me", "electrical repair [city]", "panel upgrade [city]", "EV charger installation [city]"
- **FAQ Schema Questions:**
  - Are you licensed and insured?
  - What is your license number?
  - Do you handle residential and commercial?
  - Do you install EV chargers?
  - Do you offer free estimates?

---

### Roofing
- **Schema @type:** `RoofingContractor`
- **Primary Pain Point:** No storm season or emergency response section - after a storm, customers searching "emergency roof repair [city]" find a generic site with no storm-specific content
- **Key Admin Feature:** Seasonal specials (storm season, inspection deals) + emergency closure message (repurposed as emergency availability announcement)
- **Local SEO Keywords:** "roof repair [city]", "emergency roof repair", "roofing contractor [city]", "roof replacement [city]", "storm damage roof [city]"
- **FAQ Schema Questions:**
  - Do you offer free roof inspections?
  - Do you work with insurance claims?
  - How long does a roof replacement take?
  - What roofing materials do you offer?
  - Do you offer financing?

---

### Landscaping / Lawn Care
- **Schema @type:** `LandscapingBusiness`
- **Primary Pain Point:** No service area shown + seasonal pricing outdated - customers in adjacent neighborhoods don't know if you cover them; winter prices still showing in summer
- **Key Admin Feature:** Service areas (mobile service model) + specials (seasonal pricing and packages)
- **Local SEO Keywords:** "lawn care [city]", "landscaping near me", "lawn mowing [city]", "landscaping company [city]", "yard cleanup [city]"
- **FAQ Schema Questions:**
  - What areas do you serve?
  - Do you offer weekly lawn maintenance?
  - Do you provide free estimates?
  - What landscaping services do you offer?
  - Do you offer seasonal cleanups?

---

### House Cleaning
- **Schema @type:** `HouseCleaning` (or `LocalBusiness` with `serviceType: "House Cleaning"`)
- **Primary Pain Point:** No booking CTA above the fold on mobile - the schedule button is buried below testimonials; mobile users bounce before finding it
- **Key Admin Feature:** Hours (to show available booking windows) + scheduling CTA placement
- **Local SEO Keywords:** "house cleaning [city]", "maid service near me", "cleaning service [city]", "deep cleaning [city]", "move-out cleaning [city]"
- **FAQ Schema Questions:**
  - Do you bring your own supplies?
  - Do I need to be home during cleaning?
  - How much does house cleaning cost?
  - Do you offer recurring service discounts?
  - Are your cleaners background checked?

---

### Pest Control
- **Schema @type:** `LocalBusiness` with `serviceType: "Pest Control"`
- **Primary Pain Point:** Seasonal infestations not reflected in specials - the site shows the same generic content in termite season, bed bug season, and mosquito season; no urgency
- **Key Admin Feature:** Specials (seasonal pest-specific promos) + service areas
- **Local SEO Keywords:** "pest control [city]", "termite treatment near me", "exterminator [city]", "bed bug treatment [city]", "mosquito control [city]"
- **FAQ Schema Questions:**
  - What pests do you treat?
  - Is pest control safe for pets and children?
  - How often should I schedule pest control?
  - Do you offer a treatment guarantee?
  - Do you handle termite inspections?

---

### Pressure Washing
- **Schema @type:** `LocalBusiness` with `serviceType: "Pressure Washing"`
- **Primary Pain Point:** No service area shown + no seasonal specials - customers can't tell if you cover their zip code; spring cleaning surge is the biggest revenue opportunity but nothing on the site capitalizes on it
- **Key Admin Feature:** Service areas + specials (spring packages, driveway deals)
- **Local SEO Keywords:** "pressure washing near me", "power washing [city]", "driveway cleaning [city]", "house washing [city]", "deck cleaning [city]"
- **FAQ Schema Questions:**
  - What surfaces do you pressure wash?
  - How much does pressure washing cost?
  - What areas do you serve?
  - How long does pressure washing take?
  - Do you offer soft washing for delicate surfaces?

---

### Tree Service
- **Schema @type:** `LocalBusiness` with `serviceType: "Tree Service"`
- **Primary Pain Point:** No emergency storm response capability - after a storm, the site has no emergency message, no after-hours number surfaced, no call to action for downed trees
- **Key Admin Feature:** Emergency closure message (repurposed as emergency availability toggle) + service areas
- **Local SEO Keywords:** "tree removal [city]", "emergency tree service", "tree trimming [city]", "stump removal [city]", "tree service near me"
- **FAQ Schema Questions:**
  - Do you offer emergency tree removal?
  - Are you licensed and insured for tree work?
  - Do you offer free estimates?
  - Do you remove the debris after?
  - What is the cost of tree removal?

---

### Pool Service
- **Schema @type:** `LocalBusiness` with `serviceType: "Pool Service"`
- **Primary Pain Point:** No service area shown + seasonal dead period - site looks the same in March (opening season) as September (closing season); no urgency copy either time
- **Key Admin Feature:** Service areas + specials (opening/closing packages, seasonal)
- **Local SEO Keywords:** "pool cleaning [city]", "pool service near me", "pool maintenance [city]", "pool opening [city]", "pool closing [city]"
- **FAQ Schema Questions:**
  - How often should my pool be serviced?
  - Do you offer pool opening and closing?
  - What chemicals do you use?
  - What areas do you service?
  - Do you repair pool equipment?

---

## Professional Services

### Law Firm
- **Schema @type:** `LegalService` (or `Attorney` for solo/small firm)
- **Primary Pain Point:** No practice area schema - a firm that does personal injury, DUI, and family law has one generic "law firm" schema; Google can't match them to specific searches
- **Key Admin Feature:** Contact info + hours (critical for consultation scheduling)
- **Local SEO Keywords:** "[practice area] lawyer [city]", "[practice area] attorney [city]", "law firm [city]", "free consultation [city]"
- **FAQ Schema Questions:**
  - Do you offer free consultations?
  - What areas of law do you practice?
  - How much do you charge?
  - How long will my case take?
  - Do you handle cases outside [city]?

---

### Accounting / CPA
- **Schema @type:** `AccountingService`
- **Primary Pain Point:** No service schema + no seasonal tax specials - CPAs have the clearest seasonal revenue pattern (Jan-April) but the site looks the same year-round
- **Key Admin Feature:** Specials (tax season deadlines, filing packages) + hours
- **Local SEO Keywords:** "CPA [city]", "tax preparation near me", "accountant [city]", "tax filing [city]", "small business accounting [city]"
- **FAQ Schema Questions:**
  - Do you offer business and personal tax preparation?
  - What is your fee for tax preparation?
  - Do you offer bookkeeping services?
  - Do you handle IRS notices or audits?
  - Can I file with you remotely?

---

### Real Estate Agent
- **Schema @type:** `RealEstateAgent`
- **Primary Pain Point:** No `areaServed` schema - Google can't confirm which cities or neighborhoods you cover; competitors with schema rank higher for "[neighborhood] homes for sale"
- **Key Admin Feature:** Service areas (neighborhoods and cities covered)
- **Local SEO Keywords:** "realtor [city]", "homes for sale [city]", "real estate agent [city]", "buy a home [city]", "sell my home [city]"
- **FAQ Schema Questions:**
  - What areas do you specialize in?
  - How much does it cost to use a real estate agent?
  - How long does it take to buy or sell a home?
  - Do you work with first-time buyers?
  - What is your commission rate?

---

## Health & Beauty

### Dental
- **Schema @type:** `Dentist`
- **Primary Pain Point:** New patient info and insurance acceptance not in schema - patients searching "dentist near me [insurance]" can't tell if you're in-network; new patient offers buried deep in the site
- **Key Admin Feature:** Hours (critical for appointment availability) + emergency closure (dental emergencies)
- **Local SEO Keywords:** "dentist near me", "dental office [city]", "family dentist [city]", "emergency dentist [city]", "[insurance] dentist [city]"
- **FAQ Schema Questions:**
  - Are you accepting new patients?
  - What insurance plans do you accept?
  - Do you offer emergency dental care?
  - Do you offer teeth whitening?
  - How often should I come in for a cleaning?

---

### Medical / Urgent Care
- **Schema @type:** `MedicalClinic` (or `UrgentCare`)
- **Primary Pain Point:** No wait time info + hours schema missing - patients use Google to decide where to go; if hours aren't in schema, Google shows a question mark and they go to a competitor
- **Key Admin Feature:** Hours (must be accurate and always current) + emergency closure (full clinic closure or reduced hours)
- **Local SEO Keywords:** "urgent care [city]", "walk-in clinic near me", "urgent care open now", "immediate care [city]", "after-hours clinic [city]"
- **FAQ Schema Questions:**
  - Do you accept walk-ins?
  - What insurance do you accept?
  - What conditions do you treat?
  - What are your hours?
  - Do you require an appointment?

---

### Salon / Barbershop
- **Schema @type:** `HairSalon` or `HealthAndBeautyBusiness`
- **Primary Pain Point:** No booking CTA above the fold + no stylist/barber schema - customers want to book a specific person; the site offers no way to do that and buries the booking link
- **Key Admin Feature:** Hours + specials (promotions, new stylist announcements)
- **Local SEO Keywords:** "hair salon [city]", "barbershop near me", "haircut [city]", "balayage [city]", "barber [city]"
- **FAQ Schema Questions:**
  - Do you take walk-ins or appointments only?
  - How much does a haircut cost?
  - Do you offer color services?
  - Can I request a specific stylist?
  - Do you offer kids' cuts?

---

### Spa / Massage
- **Schema @type:** `HealthAndBeautyBusiness`
- **Primary Pain Point:** No service menu in schema - "60-minute deep tissue massage [city]" searchers find nothing because services aren't in structured data
- **Key Admin Feature:** Hours + specials (packages, seasonal deals)
- **Local SEO Keywords:** "massage near me", "day spa [city]", "deep tissue massage [city]", "couples massage [city]", "facial [city]"
- **FAQ Schema Questions:**
  - What types of massage do you offer?
  - How much does a massage cost?
  - Do I need to make an appointment?
  - Do you offer couples massages?
  - What should I expect during my first visit?

---

### Nail Salon
- **Schema @type:** `NailSalon`
- **Primary Pain Point:** No specials shown + poor mobile experience - customers decide on nail art / gel nails by scrolling Instagram, then can't find a booking button or specials on mobile
- **Key Admin Feature:** Hours + specials (seasonal nail art promotions, new-client deals)
- **Local SEO Keywords:** "nail salon [city]", "nail art near me", "gel nails [city]", "manicure pedicure [city]", "acrylic nails [city]"
- **FAQ Schema Questions:**
  - Do you take walk-ins?
  - How much do your services cost?
  - Do you offer nail art?
  - How long does a full set take?
  - Do you use non-toxic products?

---

### Veterinarian
- **Schema @type:** `VeterinaryCare`
- **Primary Pain Point:** No emergency hours surfaced - pet emergencies happen at night; if emergency availability isn't in schema and on the homepage, pet owners go to the first result that shows it
- **Key Admin Feature:** Hours (with separate emergency line) + emergency closure
- **Local SEO Keywords:** "vet near me", "emergency vet [city]", "veterinarian [city]", "pet clinic [city]", "dog cat vet [city]"
- **FAQ Schema Questions:**
  - Do you offer emergency veterinary care?
  - What animals do you treat?
  - Do you accept pet insurance?
  - How do I book an appointment?
  - Do you offer wellness plans?

---

### Pet Grooming (Mobile)
- **Schema @type:** `LocalBusiness` with `serviceType: "Pet Grooming"` + `MobileService`
- **Primary Pain Point:** No service area shown - mobile pet groomers have the same problem as mobile mechanics; customers don't know if you cover their neighborhood
- **Key Admin Feature:** Service areas (with Leaflet map)
- **Local SEO Keywords:** "mobile dog grooming [city]", "mobile pet grooming near me", "dog grooming [city]", "mobile cat grooming [city]"
- **FAQ Schema Questions:**
  - What areas do you service?
  - How do you groom pets in a mobile unit?
  - What breeds do you groom?
  - How long does mobile grooming take?
  - How much does mobile grooming cost?

---

### Gym / Fitness Studio
- **Schema @type:** `ExerciseGym` or `LocalBusiness`
- **Primary Pain Point:** Class schedule not in schema and not on the homepage above the fold - people search for a specific class type; if it's not surfaced immediately, they bounce
- **Key Admin Feature:** Hours + specials (intro offers, seasonal memberships)
- **Local SEO Keywords:** "gym [city]", "fitness class near me", "yoga studio [city]", "CrossFit [city]", "personal training [city]"
- **FAQ Schema Questions:**
  - What classes do you offer?
  - Do you offer a free trial?
  - How much is a membership?
  - Do you have personal trainers?
  - What are your hours?

---

### Personal Trainer
- **Schema @type:** `LocalBusiness` or `ProfessionalService`
- **Primary Pain Point:** No service area or credentials in schema - a trainer who goes to clients' homes or parks has no schema signal for geography; certifications that build trust are invisible to search
- **Key Admin Feature:** Service areas + specials (intro packages)
- **Local SEO Keywords:** "personal trainer [city]", "in-home personal trainer [city]", "fitness coach near me", "weight loss trainer [city]"
- **FAQ Schema Questions:**
  - Do you train at my location or a gym?
  - What certifications do you hold?
  - How much does personal training cost?
  - What fitness goals do you specialize in?
  - Do you offer online training?

---

## Food & Beverage

### Restaurant
- **Schema @type:** `Restaurant` (or `FoodEstablishment`)
- **Primary Pain Point:** Menu not indexable by Google + hours wrong in Google My Business - Google can read structured menu data if it's in schema; most restaurant sites have a PDF menu or images Google can't read
- **Key Admin Feature:** Hours + daily specials
- **Local SEO Keywords:** "restaurant [city]", "[cuisine] near me", "[cuisine] restaurant [city]", "best [cuisine] [city]", "dinner [city]"
- **FAQ Schema Questions:**
  - What type of cuisine do you serve?
  - Do you take reservations?
  - Do you offer takeout or delivery?
  - Do you accommodate dietary restrictions?
  - What are your hours?

---

### Food Truck
- **Schema @type:** `FoodEstablishment` with `MobileService`
- **Primary Pain Point:** No location schedule shown + hours change daily - a food truck's biggest problem is discovery; customers can't find where you'll be tomorrow
- **Key Admin Feature:** Hours (daily schedule, location notes) + service areas (neighborhoods / recurring spots)
- **Local SEO Keywords:** "food truck [city]", "[cuisine] food truck", "food trucks near me [city]", "[cuisine] food truck [city]"
- **FAQ Schema Questions:**
  - Where can I find your food truck?
  - What days and hours do you operate?
  - Do you cater private events?
  - What do you serve?
  - Do you have a fixed location?

---

## Events & Creative

### Photographer
- **Schema @type:** `LocalBusiness` or `ProfessionalService`
- **Primary Pain Point:** Portfolio images not indexed by Google (large image files with no alt text) + no service area in schema
- **Key Admin Feature:** Service areas + specials (seasonal sessions, mini sessions)
- **Local SEO Keywords:** "photographer [city]", "wedding photographer near me", "portrait photographer [city]", "family photographer [city]", "headshot photographer [city]"
- **FAQ Schema Questions:**
  - What types of photography do you offer?
  - What areas do you travel to?
  - How much does photography cost?
  - How long until I receive my photos?
  - Do you offer engagement sessions?

---

### DJ / Event Services
- **Schema @type:** `EntertainmentBusiness`
- **Primary Pain Point:** No service area in schema - DJs travel but nothing on the site communicates radius or city coverage; lost to competitors who mention cities explicitly
- **Key Admin Feature:** Service areas + specials (off-peak pricing, package deals)
- **Local SEO Keywords:** "DJ [city]", "wedding DJ near me", "event DJ [city]", "party DJ [city]", "DJ for hire [city]"
- **FAQ Schema Questions:**
  - What events do you DJ?
  - What areas do you travel to?
  - What equipment do you bring?
  - How far in advance should I book?
  - Do you take requests?

---

## Other Local Services

### Moving Company
- **Schema @type:** `MovingCompany`
- **Primary Pain Point:** No origin/destination service area schema - local movers need to surface both where they pick up and where they deliver; most sites just say "we move you" with no geo data
- **Key Admin Feature:** Service areas + hours
- **Local SEO Keywords:** "moving company [city]", "local movers near me", "moving services [city]", "residential movers [city]", "affordable movers [city]"
- **FAQ Schema Questions:**
  - What areas do you move to and from?
  - How much does moving cost?
  - Do you provide packing services?
  - Are you licensed and insured?
  - How far in advance should I book?

---

### Locksmith
- **Schema @type:** `Locksmith`
- **Primary Pain Point:** 24/7 availability not surfaced in schema + spam-heavy niche - locksmith searches are flooded with scam results; legitimacy signals (schema, real address, hours, reviews) are the difference between a click and a pass
- **Key Admin Feature:** Hours (24/7 toggle) + emergency override (show emergency contact prominently)
- **Local SEO Keywords:** "locksmith near me", "emergency locksmith [city]", "car lockout [city]", "house lockout [city]", "24 hour locksmith [city]"
- **FAQ Schema Questions:**
  - Do you offer 24/7 locksmith service?
  - How fast can you arrive for a lockout?
  - Do you rekey locks?
  - Are you licensed?
  - How much does a locksmith cost?

---

## Summary Count

31 industries covered. Organized by category:

| Category | Industries |
|---|---|
| Automotive | Auto Repair (Mobile), Towing, Appliance Repair |
| Home Services | HVAC, Plumbing, Electrician, Roofing, Landscaping, House Cleaning, Pest Control, Pressure Washing, Tree Service, Pool Service |
| Professional Services | Law Firm, Accounting/CPA, Real Estate Agent |
| Health & Beauty | Dental, Medical/Urgent Care, Salon/Barbershop, Spa/Massage, Nail Salon, Veterinarian, Pet Grooming (Mobile), Gym/Fitness Studio, Personal Trainer |
| Food & Beverage | Restaurant, Food Truck |
| Events & Creative | Photographer, DJ/Event Services |
| Other Local Services | Moving Company, Locksmith |

All 31 use the same SC stack, same deploy process, same 100/100 standard.
