---
version: alpha
name: lonefox
description: A restrained Astro webhome. White paper, one ember.
colors:
  paper: "#FFFFFF"
  ink: "#1E2433"
  primary: "#A63D14"
  primary-hot: "#C2551F"
  secondary: "#3D4866"
  tertiary: "#8A6A1C"
  night-paper: "#14171F"
  night-primary: "#E08B4F"
typography:
  display:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: 2.05rem
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: 0.96rem
    fontWeight: 400
    lineHeight: 1.7
  meta:
    fontFamily: "ui-monospace, SF Mono, Menlo, monospace"
    fontSize: 0.74rem
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: 0px
spacing:
  col: 600px
  pad: clamp(20px, 7vw, 56px)
components:
  link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.primary}"
  link-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.primary-hot}"
---

# Design System: lonefox

## Overview

**Creative North Star: "White paper, one ember."**

A personal webhome. One 600px column. Day is pure white. Night is a deep blue-black room. Ember is the only loud color.

**Key Characteristics:**

- Square corners. Hairlines and dotted rules.
- Serif speaks. Mono files. Sans does nav.
- Dark theme is a second room, not an invert.

## Colors

- **Paper** (`{colors.paper}`): day ground. Never cream.
- **Ember** (`{colors.primary}`): wordmark, links, current nav.
- **Indigo** (`{colors.secondary}`): secondary marks.
- **Glow** (`{colors.tertiary}`): decor and night light.
- **Night paper** (`{colors.night-paper}`): the dark room.

**The One Ember Rule.** If a layout needs a second loud color, the layout is wrong.

**The White Paper Rule.** Day ground is `#FFFFFF`. Cream is dirt.

## Typography

Georgia (serif) for speech. System mono for records. System sans for nav.

## Layout

One column, `600px`. Home is a walk: door → hearth → shelves → table → study door. Do not turn it into topbar + hero + footer.

## Elevation & Depth

Flat. No drop shadows.

## Shapes

Square. No card radii.

## Components

Nav underline grows from the left in ember. Tags are square chips. Archive and scraps rows are mark + title + date.

## Do's and Don'ts

### Do:

- **Do** keep identity in `lonefox.config.ts` and tokens in `src/styles/global.css`.

### Don't:

- **Don't** cream the paper, add glass, or swap ember for teal.
- **Don't** rearrange the rooms.
