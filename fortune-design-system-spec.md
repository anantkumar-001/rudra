# Fortune Foods — Complete Design System Specification

> A pixel-faithful design transfer document for recreating the Fortune Foods visual language on any product. Every section below is implementation-ready.

---

## 1. Design DNA Analysis

### Aesthetic Identity
Fortune's website is a **warm, festive, consumer food brand** interface — bold, joyful, and culturally rooted. It sits at the intersection of mass-market Indian FMCG branding and modern web design. The aesthetic is **maximalist-warmth**: energetic color, generous imagery, confident typography, and a sense of celebration.

### Emotional Tone
- Warm, trustworthy, familial
- Festive and appetite-stimulating
- Confident and established (legacy brand energy)
- Not clinical, not "startup", not minimal

### Brand Personality
- Mother's kitchen warmth projected at national scale
- Heritage brand that feels modern but not trendy
- Celebrates Indian food culture unapologetically

### Visual Density
Medium-high. Large typographic moments alternate with generous white space. Sections are clearly delineated with full-width color bands.

### What Makes It Cohesive
1. Amber/orange palette used consistently across all interactive states, backgrounds, and accents
2. Deep crimson-red used exclusively for primary CTAs and section headers
3. Off-cream backgrounds (not pure white) give warmth throughout
4. All imagery is food-forward and high-quality
5. Curved/diagonal section transitions avoid boxy rigidity
6. Consistent rounded corners (~16–24px) across all cards and buttons

---

## 2. Full Visual System Extraction

### Color System

#### Primary Brand Colors
| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| Brand Amber | `#F5A800` | rgb(245, 168, 0) | Section backgrounds, badges, carousel arrows, bottom bar |
| Brand Red | `#C0392B` | rgb(192, 57, 43) | Section headings, logo text, CTA buttons, links |
| Deep Orange | `#E8870A` | rgb(232, 135, 10) | Decorative blobs, gradient blends with amber |

#### Background Colors
| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| Cream White | `#FAF7F2` | rgb(250, 247, 242) | Primary page background, section BGs |
| Off White | `#FFFFFF` | rgb(255, 255, 255) | Navbar, card backgrounds, footer upper |
| Warm Cream | `#F5F0E8` | rgb(245, 240, 232) | Product section backgrounds |

#### Text Colors
| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| Dark Charcoal | `#2C2C2C` | rgb(44, 44, 44) | Body copy, nav links |
| Brand Red | `#C0392B` | rgb(192, 57, 43) | Headings on cream BG, footer category headers |
| Pure White | `#FFFFFF` | rgb(255, 255, 255) | Text on amber/orange backgrounds |

#### Accent & Interactive Colors
| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| Amber Hover | `#E09600` | rgb(224, 150, 0) | Button hover, arrow hover |
| Red Hover | `#A93226` | rgb(169, 50, 38) | CTA hover |
| Amber Mid | `#F0A020` | rgb(240, 160, 32) | Carousel dots, decorative lines |

#### Border Colors
| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| Soft Border | `#E8E2D9` | rgb(232, 226, 217) | Card borders on cream BG |
| White Border | `rgba(255,255,255,0.3)` | — | Subtle white borders on colored BGs |

#### Decorative / Gradient
| Name | HEX | Opacity | Usage |
|------|-----|---------|-------|
| Amber Blob | `#F5A800` | 100% | Large decorative organic shapes |
| Deep Red Blob | `#C0392B` | 100% | Accent blobs on amber sections |
| Dashed Path | `#D4960A` | 60% | Dotted SVG guide lines between products |

---

### Typography System

#### Font Family
- **Display / Logo**: Custom fortune logotype font (script-weight, used only in logo)
- **Headings**: A bold rounded sans (visually similar to **Nunito ExtraBold** or **Poppins Bold**)
- **Body / Nav**: Clean geometric sans (visually similar to **Poppins Regular/Medium**)

**Recommended stack for replication**:
```css
font-family: 'Poppins', 'Nunito', sans-serif;
```

#### Type Scale
| Role | Size | Weight | Color | Notes |
|------|------|--------|-------|-------|
| Hero Headline | 52–64px | 700–800 | `#C0392B` | "Lighten up all your festive meals" |
| Section Display | 72–80px | 800 | `#C0392B` or `#FFFFFF` | "fortune kitchen" large wordmark |
| H2 Section Title | 48–56px | 700 | `#C0392B` | "For Healthy Food" |
| H3 Sub-heading | 24–28px | 600 | `#C0392B` | "with Taste ka Tadka" |
| Section Banner Text | 20–24px | 400 | `#FFFFFF` | "Now there's something for everyone..." |
| Nav Link | 15–16px | 500 | `#2C2C2C` | Oils, Foods, Resources... |
| Button Text | 14–15px | 600 | `#FFFFFF` | "Watch Now", "Bring it Home" |
| Body Copy | 14–16px | 400 | `#2C2C2C` | Card descriptions |
| Footer Category | 14px | 700 | `#C0392B` | "Oils", "Foods" (bold + colored) |
| Footer Link | 13–14px | 400 | `#2C2C2C` | Regular footer links |
| Copyright | 13px | 400 | `#FFFFFF` or `#666` | Bottom bar |

#### Typography Hierarchy Strategy
1. Hero → Giant, bold, crimson-red on light or image background
2. Section header → Bold orange/red on cream
3. Sub-labels → Medium weight, smaller, same red family
4. Body → Normal weight, dark charcoal
5. UI labels (buttons, nav) → Semi-bold, appropriate contrast for BG

#### Letter Spacing
- Headings: `letter-spacing: -0.02em` (tight for display)
- Body: `letter-spacing: 0` (normal)
- Nav: `letter-spacing: 0.01em`
- ALL CAPS: Not used — brand uses sentence case and title case only

---

### Layout & Spacing System

#### Grid
- Full-width sections: `width: 100vw` — edge-to-edge color bands
- Content container: `max-width: 1200px; margin: 0 auto; padding: 0 40px`
- Columns: Flexible, often 2-column (product left, copy right) or 3-column card grids

#### Section Spacing
| Area | Value |
|------|-------|
| Section vertical padding | 80–120px |
| Between section blocks | 0 (flush transitions) |
| Hero height | 500–620px |
| Banner strip height | 180–200px |

#### Component Spacing
| Component | Padding |
|-----------|---------|
| Navbar | 16px vertical, 40px horizontal |
| Card | 24–32px |
| Button | 14px 32px (v / h) |
| Footer columns | 40px gap |
| Card grid gap | 24–32px |

#### Whitespace Philosophy
- Generous breathing room within sections
- Zero margin between sections (edge-to-edge color transitions)
- Product imagery allowed to bleed outside containers
- Text blocks centered vertically relative to product images

---

### Shape Language

#### Border Radius
| Component | Radius |
|-----------|--------|
| Cards (video, product) | 16–24px |
| CTA Buttons | 8–10px (slightly rounded rectangle) |
| Carousel Nav Arrows | 50% (perfect circle) |
| Section color bands | 0 (full bleed) |
| Chat widget | 12px |

#### Geometric Softness
- Cards are soft rectangles, never sharp squares
- Buttons are softly rounded, not pill-shaped
- Decorative blobs are fully organic (freeform SVG paths)
- Navigation arrows are circular

#### Blob Decorations
- Large organic shapes appear in corners of amber sections
- Colors: deep amber, deep orange-red
- No drop shadows on blobs — flat fill only
- Blobs bleed off-screen intentionally

---

### Depth & Layering

#### Shadow System
- Cards on amber BG: `box-shadow: none` (pure flat, rely on white card vs amber BG contrast)
- Chat widget: `box-shadow: 0 4px 16px rgba(0,0,0,0.15)`
- Navbar: subtle `box-shadow: 0 1px 4px rgba(0,0,0,0.08)` or none

#### Blur Usage
- None (no glassmorphism)
- Hero section has a soft photographic blur in the background image (not CSS blur)

#### Elevation Strategy
- Flat UI philosophy — depth created by color contrast (white card on amber = elevated feeling)
- No z-axis shadows except on floating chat widget

#### Layering Order
1. Page background (cream)
2. Full-bleed section bands (amber, white)
3. Cards and product images
4. Navigation overlay
5. Chat widget (floating, fixed)

---

## 3. Design Transfer To My Product

### Dashboard
- Use cream `#FAF7F2` as page background
- Header bar: white, no shadow or 1px bottom border
- Metric cards: white bg on cream — card contrast creates elevation without shadows
- Key numbers in `#C0392B` (brand red) — mimics the bold colored numerics from product pages
- Section dividers: full-width amber `#F5A800` bands for major section breaks

### Landing Page
- Full-viewport hero with warm photography/illustration, amber diagonal overlay
- Hero headline: 56–72px Poppins ExtraBold in `#C0392B`
- Sub-copy: 20px `#FFFFFF` on amber strip below hero
- Primary CTA: solid `#C0392B` button, 14px 32px padding, 8px radius
- Product/feature showcase: cream BG with product floating center, copy right-aligned
- Video/content section: full amber BG `#F5A800` with white card grid (3-col)

### Cards
- White bg `#FFFFFF`
- Border radius: 20px
- No shadow on amber sections
- Subtle border: `1px solid #E8E2D9` on cream sections
- Title: 15–16px `#2C2C2C` 500 weight
- CTA inside card: `#C0392B` solid button, full-width or right-aligned

### Navigation
- White bg, no border (or 1px `#F0EBE0`)
- Logo left, nav links center-right
- Nav links: 15px `#2C2C2C` 500 weight
- Active: `#C0392B`
- Hover: `#C0392B`
- Sticky on scroll

### Buttons
- Primary: `background: #C0392B; color: #FFF; border-radius: 8px; padding: 12px 28px`
- Hover: `background: #A93226`
- Carousel/Nav arrows: `background: #F5A800; color: #FFF; border-radius: 50%; width: 40px; height: 40px`

### Forms
- Input: `border: 1px solid #D4C9B8; border-radius: 8px; padding: 12px 16px`
- Focus: `border-color: #F5A800; outline: none`
- Label: 13px `#666` above input
- Submit: Red primary button

### Footer
- Upper: white bg, 4-column link grid
- Category headers: `#C0392B` bold 14px
- Links: `#2C2C2C` 13px regular
- Bottom bar: amber `#F5A800` or dark, white text, centered copyright

### Modals
- White bg, 20px radius
- Header: bold title in `#C0392B`
- Overlay: `rgba(0,0,0,0.4)`
- Close: X in `#999`

### Empty States
- Centered layout
- Illustration in brand amber tones
- Headline in `#C0392B` 24px
- Sub-copy in `#888` 15px
- CTA button below

---

## 4. Pixel-Level Component Specifications

### Navbar
```
height: 64–72px
background: #FFFFFF
padding: 0 40px
logo: left-aligned, 32px height
nav links: right-aligned, 15px Poppins 500, #2C2C2C, gap: 32px
hover: color: #C0392B
active: color: #C0392B
position: sticky top: 0
z-index: 1000
border-bottom: none (clean)
```

### Hero Banner
```
height: 500–620px
background: cream + warm photography
headline: Poppins 800 52–64px #C0392B, line-height: 1.15
product image: left 40%, floating/drop-shadow-free
copy: right 60%, vertically centered
carousel dots: 8px circles, #F5A800 active, #CCC inactive
```

### Section Banner Strip
```
height: 180–200px
background: #F5A800
padding: 40px 80px
text-top: 20px #FFFFFF 400 "Now there's something..."
text-main: Poppins 800 72–80px #FFFFFF logotype style
decorative blobs: right side, dark amber/red organic shapes
```

### Product Showcase Section
```
background: #FAF7F2
padding: 100px 0
layout: 3-col (image left, product center, copy right)
product image: floating, drop-shadow-free
copy heading: Poppins 800 52px #C0392B
sub-heading: Poppins 600 22px #C0392B
CTA button: #C0392B solid, 12px 28px, 8px radius
carousel arrows: 40px circles #F5A800
dotted guide paths: SVG, dashed orange, opacity 0.6
```

### Video Cards (on Amber Section)
```
background: #F5A800 section
card: background: #FFFFFF, border-radius: 20px, no shadow
card padding: 0 (image full bleed top) / 24px bottom
image: top half, 16:9 aspect, border-radius: 20px 20px 0 0
play button overlay: #FFFFFF circle 48px, orange play icon
title: 15px #2C2C2C 400
CTA: #C0392B button full-width or right, "Watch Now"
grid: 3 columns, gap: 24px
carousel with left/right arrows outside grid
```

### CTA Buttons
```
Primary:
  background: #C0392B
  color: #FFFFFF
  padding: 13px 32px
  border-radius: 8px
  font: Poppins 600 14px
  hover: background #A93226
  transition: background 0.2s ease

Carousel Arrow:
  background: #F5A800
  color: #FFFFFF
  width: 40px, height: 40px
  border-radius: 50%
  border: none
  hover: background #E09600
```

### Footer Upper
```
background: #FFFFFF
padding: 60px 80px
columns: 4-col grid
category heading: 14px Poppins 700 #C0392B
link: 14px Poppins 400 #2C2C2C, line-height: 2
link hover: color #C0392B
logo column: right, stacked AWL + Fortune logos
```

### Footer Bottom Bar
```
background: #F5A800 (amber) or #2C2C2C
color: #FFFFFF
padding: 20px 80px
copyright: 13px left
social icons: right, 24px white icons
```

### Chat Widget (Floating)
```
position: fixed, bottom: 24px, right: 24px
background: #C0392B or #F5A800
color: #FFFFFF
border-radius: 12px
padding: 14px 20px
font: 13px Poppins 500
product image: right side, small
close X: top-right corner
box-shadow: 0 4px 20px rgba(0,0,0,0.2)
```

---

## 5. Animation & Interaction Language

### Hover Effects
- Nav links: `color` transition 0.15s ease
- Buttons: `background` transition 0.2s ease, subtle `transform: translateY(-1px)` 0.2s
- Cards: no transform — flat philosophy, no lift on hover
- Carousel arrows: background darken 0.2s

### Easing Curves
```css
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
```

### Motion Intensity
- Low to medium — this is a food brand, not a SaaS tool
- No parallax, no dramatic scroll animations
- Carousel slides with standard ease
- Fade-in for page load content

### Transition Speeds
| Interaction | Duration |
|-------------|----------|
| Button hover | 200ms |
| Nav hover | 150ms |
| Carousel slide | 400ms |
| Page transition | 300ms |
| Chat widget appear | 300ms ease-out |

### Carousel Behavior
- Auto-play: 5s per slide
- Manual: prev/next circular arrows in amber
- Dots: bottom indicator, filled vs outline
- Transition: cross-fade or slide

### Microinteractions
- Play button on video cards: slight pulse on hover
- Carousel arrows: slight background darken
- CTA buttons: 1px upward nudge on hover

---

## 6. Tailwind / Frontend Implementation Tokens

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          amber:    '#F5A800',
          'amber-hover': '#E09600',
          red:      '#C0392B',
          'red-hover': '#A93226',
          cream:    '#FAF7F2',
          'warm-cream': '#F5F0E8',
          charcoal: '#2C2C2C',
          'soft-border': '#E8E2D9',
        }
      },
      fontFamily: {
        display: ['Poppins', 'Nunito', 'sans-serif'],
        body:    ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'hero':    ['62px', { lineHeight: '1.1', fontWeight: '800' }],
        'display': ['80px', { lineHeight: '1.0', fontWeight: '800' }],
        'h2':      ['52px', { lineHeight: '1.15', fontWeight: '700' }],
        'h3':      ['26px', { lineHeight: '1.3',  fontWeight: '600' }],
        'body':    ['15px', { lineHeight: '1.7',  fontWeight: '400' }],
        'nav':     ['15px', { lineHeight: '1',    fontWeight: '500' }],
        'btn':     ['14px', { lineHeight: '1',    fontWeight: '600' }],
        'label':   ['13px', { lineHeight: '1.5',  fontWeight: '400' }],
      },
      borderRadius: {
        'card':   '20px',
        'btn':    '8px',
        'circle': '50%',
        'chip':   '6px',
      },
      boxShadow: {
        'card':    'none',
        'widget':  '0 4px 20px rgba(0,0,0,0.18)',
        'navbar':  '0 1px 4px rgba(0,0,0,0.06)',
      },
      spacing: {
        'section': '100px',
        'section-sm': '60px',
        'container': '80px',
        'card':      '28px',
        'gap':       '28px',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s cubic-bezier(0,0,0.2,1)',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      transitionDuration: {
        btn:  '200ms',
        nav:  '150ms',
        slide:'400ms',
      },
    },
  },
}
```

---

## 7. Anti-Hallucination Guardrails

### Strict Instructions for AI/Frontend Agents

**DO NOT:**
- Invent new colors outside `#F5A800`, `#C0392B`, `#FAF7F2`, `#FFFFFF`, `#2C2C2C`
- Use purple, blue, green, or gray accent colors
- Use pure white `#FFFFFF` as page background (use warm cream `#FAF7F2`)
- Use gradient fills on buttons or backgrounds (flat fills only)
- Add glassmorphism or backdrop-blur
- Use Inter, Roboto, or system fonts — must be Poppins
- Use sharp 0px or 4px radius on cards (minimum 16px)
- Add hover lift/shadow to cards
- Use thin (300) or ultra-bold (900) font weights
- Center-align body copy (only headlines and section titles)
- Use borders heavier than 1px
- Use uppercase text styling except in logo
- Use box-shadows heavier than `0 4px 20px rgba(0,0,0,0.18)`
- Use dark backgrounds for main sections

**ALWAYS CHECK:**
1. Is the background cream `#FAF7F2`, not white or grey?
2. Are CTA buttons `#C0392B` with white text?
3. Are section headers in Poppins 700-800 `#C0392B`?
4. Are amber sections `#F5A800` with white text?
5. Do cards have 20px+ border radius?
6. Are carousel arrows amber circles?
7. Is font Poppins (not Inter, not system)?
8. Are decorative blobs organic (not geometric)?
9. Is there no glassmorphism or gradient?
10. Is the footer amber bottom bar with white text?

---

## 8. Final Design Identity Summary

| Attribute | Value |
|-----------|-------|
| Primary palette | Amber `#F5A800` + Crimson `#C0392B` |
| Background | Warm cream `#FAF7F2` |
| Font | Poppins 400/500/600/700/800 |
| Card radius | 20–24px |
| Button radius | 8px |
| Shadow philosophy | Flat — depth via color contrast only |
| Section rhythm | Full-bleed alternating: cream → amber → white → amber |
| Motion | Subtle, warm, 200–400ms ease |
| Depth | 2D flat with color-based layering |
| Brand personality | Festive, warm, confident, Indian food culture |
| Decorative elements | Organic blobs, dotted SVG paths, product imagery bleed |
| Icon treatment | Minimal; play buttons on video, arrow icons in circles |
| Text contrast | Always high — white on amber/red, near-black on cream |

### The Golden Rule
> Every page and component must feel like it was cooked in the same Fortune kitchen — warm amber colors, confident crimson headlines, Poppins bold, and a joyful festive energy that makes food look irresistible.
