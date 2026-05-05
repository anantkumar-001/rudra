# Rudra Agro Mills — Website Build Specification
> Brand: **GIRI** | Company: **Rudra Agro Mills**
> Reference Design: Farmora (agri-tech landing page style)
> Stack: HTML + CSS + Vanilla JS (single file, no frameworks unless noted)

---

## 1. Brand Identity

| Field | Value |
|---|---|
| Brand Name | **GIRI** |
| Company Name | Rudra Agro Mills |
| Tagline | *"Purity from the Fields, Quality in Every Grain"* |
| Director | Ashok Kumar (Sales & Marketing) |
| Phone | +91-9053689697 |
| Email | rudraagromills@gmail.com |
| Address | E-48A, 49A, 50(A1), Phase-I, Riico Indl. Area, Bhiwadi-301019 |
| Products | Pulses · Wheat Flour · Mustard Oil · Spices |

---

## 2. Color Palette

```css
:root {
  --primary:       #D4501A;   /* Rudra orange — from business card */
  --primary-dark:  #A83C10;
  --accent:        #2C6B4F;   /* Deep agri green */
  --accent-light:  #4A9B6F;
  --gold:          #C9A84C;   /* from GIRI logo metallic */
  --dark:          #1A1A18;   /* near-black background for dark sections */
  --dark-card:     #222220;
  --light-bg:      #F7F4EF;   /* warm off-white */
  --text-main:     #1C1C1A;
  --text-muted:    #6B6B65;
  --white:         #FFFFFF;
  --border:        #E5E0D8;
}
```

**Theme rules:**
- Hero section: full dark overlay on a rich farm/field image
- Features section: dark background (`--dark`) with orange & green icon accents
- About section: warm off-white (`--light-bg`)
- Tech/Product section: alternating light/dark cards
- Footer: `--dark` with orange brand accent

---

## 3. Typography

```css
/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

/* Display / Headings */
font-family: 'Playfair Display', serif;

/* Body / UI */
font-family: 'DM Sans', sans-serif;
```

| Role | Font | Weight | Size |
|---|---|---|---|
| Hero H1 | Playfair Display | 800 | clamp(2.8rem, 5vw, 4.5rem) |
| Section H2 | Playfair Display | 700 | clamp(2rem, 3.5vw, 3rem) |
| Card H3 | DM Sans | 600 | 1.2rem |
| Body | DM Sans | 400 | 1rem / 1.6 line-height |
| Label/Tag | DM Sans | 500 | 0.75rem uppercase, 2px letter-spacing |
| Nav links | DM Sans | 500 | 0.9rem |

---

## 4. Page Sections — Full Layout Spec

### 4.1 — Navigation Bar

**Layout:** Fixed top, full width, `backdrop-filter: blur(12px)` with slight dark tint on scroll.

**Left:** GIRI logo (text-based: use the monogram "GR" in gold + "GIRI" in dark, or embed the logo as SVG/img if available)

**Center links:**
- Home
- Products
- About Us
- Quality
- Contact

**Right:**
- Phone number: `+91-9053689697` (small, muted)
- **"Get Quote"** button → orange pill button (`--primary` bg, white text, border-radius: 50px)

**Scroll behavior:** On scroll past 80px, nav gets `background: rgba(26,26,24,0.92)` + `box-shadow`.

---

### 4.2 — Hero Section

**Full viewport height** (`100vh`), dark overlay on a high-quality background image of an Indian wheat field, mustard field, or spices market.

> **Image suggestion for Antigravity:** Use `https://images.unsplash.com/photo-1574943320219-553eb213f72d` (wheat field) or a similar Unsplash agri photo. Set `object-fit: cover`, overlay with `linear-gradient(135deg, rgba(26,26,24,0.82) 0%, rgba(26,26,24,0.4) 100%)`.

**Left column (60% width):**
```
[pill tag]  Traditional Indian Agri Brand

[H1]
Bringing Quality &
Purity to Every
Indian Kitchen.

[body text]
From premium pulses to stone-ground wheat flour,
cold-pressed mustard oil, and hand-picked spices —
Rudra Agro Mills delivers farm-fresh goodness
straight to your door.

[CTA button]  Explore Products  →
```

**Right column (40% width):** A floating glass-morphism card (dark, `backdrop-filter: blur`):
```
Our Mission
───────────
To deliver unadulterated, farm-fresh agricultural
products that bring health and trust to every Indian
household — rooted in quality since inception.

[Learn More  →]
```

**Bottom bar (overlapping into next section):** Three quick-stat chips in a horizontal row:
```
🌾  4+ Products  |  ✅  100% Pure & Natural  |  📍  Bhiwadi, Rajasthan
```

---

### 4.3 — About / Tab Section

**Background:** `--light-bg` warm off-white

**Tab row (pill tabs):**
```
[About Us]  [Our Journey]  [Vision]  [Mission]
```
Active tab has orange background + white text.

**Content (two-column):**

- **Left:** Small label "Who We Are at GIRI" + bullet
- **Right:** Large quote-style paragraph:
  ```
  With decades of tradition in agri-processing,
  we're committed to bringing the purest pulses,
  flour, mustard oil, and spices to households
  across India. Together, we're building trust —
  one grain at a time.
  ```
  Below: smaller body text + `[Learn More]` outlined button

**Tab content mapping:**
| Tab | Headline | Body |
|---|---|---|
| About Us | "Who We Are at GIRI" | Traditional agri-processing, Bhiwadi-based, trusted by families |
| Our Journey | "Rooted in Tradition" | Started as a small mill, grown to serve pan-India |
| Vision | "A Healthier India" | Make pure, unadulterated food accessible to every household |
| Mission | "Quality at Every Step" | Stringent quality checks, zero adulteration, farm-to-table |

---

### 4.4 — Stats Banner

**Two cards side-by-side** (styled like Farmora: image on left, stats on right, one card orange):

**Card 1 (dark/image):**
```
[Farm image]
10+
Years of Agri-Processing Excellence

With a decade of experience, we've ensured the
highest purity standards across all our products.
```

**Card 2 (orange / `--primary`):**
```
100%
Natural & Unadulterated Products

Every batch we produce is free from additives,
artificial colours, and preservatives.
```

Both cards have a small circular arrow button (top-right) in dark/white.

---

### 4.5 — Features / Main Features Section

**Background:** `--dark` (very dark, near black)

**Section label (top):** `● Main Features` (small, muted green)

**Heading (large, white, left-aligned):**
```
Unlock Freshness with Powerful
Features Designed for Purity,
Quality, and Trust.
```

**4 Feature Cards in 2×2 grid:**

| # | Icon | Title | Body |
|---|---|---|---|
| 1 | 🌾 | Stone-Ground Wheat Flour | Milled using traditional stone-grinding techniques that preserve natural nutrients and give authentic taste. |
| 2 | 💧 | Cold-Pressed Mustard Oil | Extracted without heat to retain all natural antioxidants, pungency, and rich flavour of mustard seeds. |
| 3 | 🫘 | Premium Quality Pulses | Hand-sorted and cleaned pulses — chana, moong, masoor, and more — free from dust and impurities. |
| 4 | 🌶️ | Hand-Picked Spices | Sourced directly from spice farms, dried naturally, and packed without artificial preservatives. |

Cards are dark (`--dark-card`), border: `1px solid rgba(255,255,255,0.08)`, with a small colored icon box (orange or green tint).

---

### 4.6 — Products / Technologies Section

**Background:** Light (`--light-bg`) with dark alternating product highlight cards.

**Section label:** `● Our Products`

**Heading:** `Pure. Natural. Trusted.`

**Large product card (left, dark background, full image):**
- Background image of mustard oil / wheat field
- Overlay text: **"Cold-Pressed Mustard Oil"**
- Short description: "Extracted using traditional cold-press method, our mustard oil is full-flavoured, pungent, and 100% natural."
- Navigation dots at bottom + prev/next arrows

**Small product thumbnails (right column, 2 stacked):**
- Card 1: Wheat Flour image + "Stone-Ground Atta"
- Card 2: Pulses image + "Premium Pulses"

Make this a **carousel/slider** — clicking arrows cycles through all 4 products.

**Product list for carousel:**
1. Cold-Pressed Mustard Oil
2. Stone-Ground Wheat Flour
3. Premium Pulses (Chana, Moong, Masoor, Tur)
4. Whole & Ground Spices (Haldi, Mirch, Dhaniya, Garam Masala)

---

### 4.7 — Testimonials / Success Stories

**Background:** White / very light

**Section label:** `● Customer Stories`

**Counter:** `[1/4]` with prev/next arrows (right-aligned)

**Large testimonial quote (center, large text):**
```
"Before switching to Rudra Agro Mills' products, I used to
worry about adulteration. Now, the mustard oil I get from
GIRI is pure, aromatic, and my family loves it."
```

**Customer avatars (4 small circular photos below):**
Use placeholder avatars. Names/roles:
- Priya S. — Homemaker, Jaipur
- Ramesh T. — Restaurant Owner, Delhi
- Sunita K. — Nutritionist, Gurgaon
- Mohanlal G. — Wholesale Buyer, Bhiwadi

Clicking an avatar switches the testimonial.

---

### 4.8 — Contact / Footer Section

**Split into two parts:**

**Top strip (dark background, orange accent):**
```
Growing with Farm Innovation, Purity, and Quality
— Connecting Producers to Your Kitchen.

[left: company tagline]              [right: Contact Us button]
```

**Footer (very dark, `--dark`):**

Three columns:

**Col 1 — Brand:**
```
GIRI
Rudra Agro Mills

A trusted name in agri-processing —
bringing purity from the farm to
your kitchen since our founding.
```

**Col 2 — Products:**
```
Products
─────────
Wheat Flour
Mustard Oil
Pulses
Spices
```

**Col 3 — Contact:**
```
Contact Us
───────────
📞  +91-9053689697
✉️  rudraagromills@gmail.com
📍  E-48A, 49A, 50(A1), Phase-I
    Riico Indl. Area, Bhiwadi-301019

[Social icons: WhatsApp · Facebook · Instagram]
```

**Bottom bar:**
```
© 2025 Rudra Agro Mills. All rights reserved.  |  Designed by [Your Agency]
```

---

## 5. Reusable Components

### Button Styles
```css
/* Primary CTA */
.btn-primary {
  background: var(--primary);
  color: white;
  padding: 14px 32px;
  border-radius: 50px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s, transform 0.2s;
}
.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}

/* Outlined */
.btn-outline {
  border: 1.5px solid var(--text-main);
  color: var(--text-main);
  padding: 12px 28px;
  border-radius: 50px;
  background: transparent;
  font-weight: 500;
}
.btn-outline:hover {
  background: var(--text-main);
  color: white;
}
```

### Pill Tag (Section Labels)
```css
.pill-tag {
  display: inline-block;
  border: 1px solid currentColor;
  border-radius: 50px;
  padding: 4px 14px;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
/* On dark bg: color white | On light bg: color --accent */
```

### Feature Icon Box
```css
.icon-box {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(212, 80, 26, 0.15); /* orange tint */
  display: grid;
  place-items: center;
  font-size: 1.3rem;
}
```

---

## 6. Animations & Interactions

| Trigger | Animation |
|---|---|
| Page load | Hero text fades in + slides up (staggered: tag → H1 → body → CTA) |
| Scroll into section | `IntersectionObserver` → `opacity: 0 → 1` + `translateY(30px → 0)` |
| Hover: product card | Slight scale `1.02` + shadow deepens |
| Tab click (About) | Smooth fade-out / fade-in of content |
| Testimonial arrow | Slide transition, previous/next with CSS transform |
| Nav on scroll | Smooth background + shadow transition |

---

## 7. Responsive Breakpoints

```css
/* Mobile first */
@media (max-width: 768px) {
  /* Hero: single column, H1 smaller */
  /* Features: 1×4 stacked grid */
  /* Stats: stacked cards */
  /* Nav: hamburger menu */
  /* Footer: 1 column */
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* Features: 2×2 grid */
  /* Hero: two-column but condensed */
}

@media (min-width: 1025px) {
  /* Full desktop layout as described above */
}
```

---

## 8. Assets & Images

All images should be sourced from **Unsplash** (free, no attribution required for dev):

| Section | Query / Suggested URL |
|---|---|
| Hero bg | `wheat field India golden` → `https://images.unsplash.com/photo-1574943320219-553eb213f72d` |
| About section | `Indian farmer smiling crop` |
| Mustard Oil product | `mustard oil yellow bottle` |
| Wheat Flour | `wheat flour atta bag India` |
| Pulses | `indian lentils pulses colorful` |
| Spices | `indian spices colorful market` |
| Testimonial avatars | Use `https://i.pravatar.cc/80?img=N` (N = 1–70) |

> **Note for Antigravity:** All images should use `loading="lazy"` and have descriptive `alt` attributes for accessibility.

---

## 9. SEO & Meta Tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GIRI | Rudra Agro Mills — Pure Pulses, Flour, Mustard Oil & Spices</title>
<meta name="description" content="Rudra Agro Mills offers 100% natural stone-ground wheat flour, cold-pressed mustard oil, premium pulses, and hand-picked spices. Based in Bhiwadi, Rajasthan.">
<meta name="keywords" content="Rudra Agro Mills, GIRI, wheat flour, mustard oil, pulses, spices, Bhiwadi, natural, pure, agro">

<!-- Open Graph -->
<meta property="og:title" content="GIRI | Rudra Agro Mills">
<meta property="og:description" content="Pure. Natural. Trusted. Agri products from Bhiwadi, Rajasthan.">
<meta property="og:type" content="website">
```

---

## 10. File Structure

```
rudra-agro-mills/
├── index.html          ← Single page (all sections)
├── style.css           ← All CSS (or embedded in <style>)
├── script.js           ← Interactions: tabs, carousel, nav scroll, animations
├── assets/
│   ├── logo-giri.svg   ← GIRI logo (or PNG)
│   └── images/         ← Downloaded/placeholder images
└── README.md
```

---

## 11. Section Order Summary

```
1.  Navbar (fixed)
2.  Hero (fullscreen, dark overlay, farm image)
3.  About / Tab Section (light bg, tabbed content)
4.  Stats Banner (two cards: dark + orange)
5.  Features (dark bg, 2×2 feature grid)
6.  Products Carousel (light bg, large product highlight)
7.  Testimonials (white bg, sliding quotes)
8.  Contact Strip + Footer (dark)
```

---

## 12. Key Design Reminders for Antigravity

- **Never use Inter or Arial.** Use Playfair Display + DM Sans only.
- **Orange (`#D4501A`) is the primary action color** — buttons, active states, highlights.
- **Green (`#2C6B4F`) is secondary** — icons, accents, tags on dark backgrounds.
- **Gold (`#C9A84C`)** is used only for the GIRI logo / brand monogram.
- **Do not use purple gradients or generic gradients.** Use rich dark overlays and warm off-whites instead.
- **Cards must have subtle borders** (`rgba(255,255,255,0.07)` on dark, `rgba(0,0,0,0.06)` on light).
- **Spacing is generous** — min 80px section padding top/bottom on desktop.
- **The hero arrow CTA button** is circular with an arrow icon inside, not a plain rectangle.
- **Match the Farmora layout exactly** but replace all farming-tech content with Rudra Agro Mills content, swap green-lime accent for orange+gold, and maintain the warm earthy Indian aesthetic.