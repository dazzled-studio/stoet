---
version: alpha
name: Stoet Enschede
description: Bakery warmth meets editorial calm — a brunch cafe rebuild rooted in paper-cream, espresso ink, and a single soft lavender accent.
colors:
  primary: "#2A211C"
  secondary: "#6E5F54"
  tertiary: "#9C7FBE"
  neutral: "#F1EADE"
  background: "#FAF6EF"
  ink: "#1A1411"
  on-primary: "#FAF6EF"
  on-tertiary: "#1A1411"
typography:
  h1:
    fontFamily: Fraunces
    fontSize: 4rem
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  h2:
    fontFamily: Fraunces
    fontSize: 2.5rem
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  h3:
    fontFamily: Fraunces
    fontSize: 1.625rem
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body-md:
    fontFamily: Inter
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.55
  label-caps:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  sm: 6px
  md: 12px
  lg: 24px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 14px
    typography: "{typography.label-caps}"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 14px
    typography: "{typography.label-caps}"
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: 14px
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 28px
---

## Overview

Stoet (Twents dialect for "loaf of bread") is a daytime brunch and lunch cafe in Enschede. The design system reads as a small, warm bakery that takes its food seriously: cream paper, espresso ink, and a single lavender accent that carries forward from the original wordmark. The mood is craft, not corporate; calm, not loud. Headings sit in a contemporary book-weight serif so the menu reads like a printed bill of fare. Body type is a neutral humanist sans so the long lists of dishes, allergens, and opening hours stay legible at small sizes.

## Modernization stance

The source site was a 2010s-era Wix template: full-bleed lavender background, a thin geometric all-caps display font (Lulo Clean), sharp zero-radius outlined buttons, and a thin Avenir Light body. We keep three things from that identity — the STOET wordmark with its bread-loaf glyph inside the "O", the lavender hue as a deliberate accent (not a wall), and the unpretentious neighbourhood warmth. Everything else is rebuilt. Pure lavender backgrounds are demoted to small accent moments; the page now lives on a warm paper-cream that lets food photography breathe. Lulo Clean is replaced with Fraunces, a contemporary variable serif with the same editorial confidence but far better readability and a softer, more bakery-appropriate voice. Avenir Light is replaced with Inter for body. Zero-radius outline buttons are replaced with solid espresso-ink primary buttons at a modest 6px radius — friendlier, more confident, and a better CTA hierarchy.

## Colors

The palette is built around paper and ink. `background` is the warm cream the whole site rests on; `neutral` is a slightly darker cream used for cards, gallery wells, and section breaks. `primary` is a deep espresso brown used for body type, structural elements, and the solid CTA button — never for full sections, never as a background. `ink` is reserved for the absolute darkest type (display headings, key emphasis). `tertiary` is the refined lavender, used sparingly: section eyebrows, hover states, a small flourish in the hero, and the menu category dividers. Never use lavender as a section background; never put lavender body type on a lavender background. `secondary` is a warm taupe for muted captions and metadata.

## Typography

Two families. Fraunces in book to medium weight handles every heading and any short editorial pull-quote. Its slight softness and optical sizing fit the bakery brief without tipping into novelty. Headings sit tight at `-0.02em` for a printed feel. Inter handles body type, labels, and UI chrome at a relaxed 1.65 line-height so menu descriptions and opening-hours blocks read comfortably. The `label-caps` style is for small eyebrows, button labels, and tag chips — Inter Semibold with wide 0.12em tracking. Never mix the two families inside a single line; never set body copy in Fraunces.

## Components

`button-primary` is the only true call-to-action. Reserve it for "Bekijk de kaart", "Bel ons", "Stuur een bericht" — actions you want a visitor to actually take. `button-secondary` is a quiet alternative used inside cards or in menu chips; it must never compete with primary. `card` uses the neutral cream so it recedes against the paper background — never stack a card inside another card, never put a card on a lavender field. Inputs match the page background with a thin ink border on focus. All four components share the same 6px radius for a consistent soft-but-sharp shape; the larger 12px radius is reserved for cards and image wells.

## Layout principles

Vertical rhythm uses the doubling spacing scale: 4 / 8 / 16 / 32 / 64. Sections breathe with `xl` (64px) top and bottom padding on mobile, doubled on desktop. Inside a section, elements sit on the `md` (16px) gap; column gutters in galleries use `lg` (32px). Page-level horizontal padding is `md` on mobile, `lg` from md-breakpoint, `xl` at xl-breakpoint. Hero sections lead with a large Fraunces h1, a short Inter body lead, and a single primary CTA — never two competing CTAs side by side. The menu page is the densest screen: it uses tighter `sm` (8px) vertical gaps inside dish rows and `lg` between menu categories so the structure scans top-to-bottom like a printed bakery sheet.
