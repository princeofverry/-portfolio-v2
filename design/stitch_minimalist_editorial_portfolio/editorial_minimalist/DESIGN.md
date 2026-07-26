---
name: Editorial Minimalist
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e3e2e2'
  on-secondary-container: '#646464'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1100px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 120px
  element-gap: 32px
  unit: 8px
---

## Brand & Style
This design system focuses on extreme clarity, intentionality, and an editorial rhythm suited for high-end personal portfolios. It leverages a **Minimalist** aesthetic with high-contrast typography and a strictly restrained color palette to ensure content remains the primary focus.

The personality is sophisticated and professional, drawing inspiration from contemporary architectural journals and high-fashion digital lookbooks. It prioritizes white space as a structural element rather than a void, creating a calm, curated experience for the user.

## Colors
The palette is strictly monochromatic. The base background is a warm-toned light gray (`#F4F4F4`) to reduce eye strain compared to pure white, while text uses pure black (`#000000`) for maximum legibility. 

Metadata and secondary labels utilize a mid-tone gray (`#888888`) to establish visual hierarchy. Dividers are hair-thin and low-contrast, designed to provide structure without fragmenting the layout. The system is built to invert seamlessly for dark mode, swapping background and primary text values while maintaining the "ink on paper" feel.

## Typography
The system uses a dual-font approach. **Inter** serves as the primary typeface for all core content, utilizing its tight apertures and high x-height to maintain a modern, "Swiss" feel. Bold weights are reserved for large headings to create "moments" in the layout.

**JetBrains Mono** is introduced for technical metadata, tags, and small labels. This monospaced contrast reinforces the "work-in-progress" or "process" nature of a portfolio, adding a subtle layer of technical precision to the editorial layout.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop, centered within the viewport with a maximum width of 1100px. This constraint ensures line lengths remain optimal for readability and imagery feels intentional.

A 12-column grid is used for desktop, collapsing to 4 columns on mobile. Vertical rhythm is governed by large "Section Gaps" (120px) to separate projects or chapters, while internal elements use an 8px base unit. Margins are generous, favoring "breathing room" over density to highlight individual portfolio pieces.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows. 

Components do not "float" in this design system; they sit flat on the canvas. To distinguish interactive elements like cards, a 1px hairline border is used. When a user interacts with an element, a subtle background shift (from `#F4F4F4` to pure white or a very light gray) is preferred over a shadow. For dark mode, these borders should remain visible but low-contrast.

## Shapes
The shape language is primarily architectural and sharp, but utilizes a **Soft (0.25rem)** roundedness to prevent the UI from feeling aggressive or "brutalist." This slight rounding on cards and buttons softens the high-contrast edges of the typography and photography. 

Buttons and input fields should maintain this consistent small radius, while decorative elements or secondary tags may use a slightly larger `rounded-lg` (0.5rem) to differentiate them from functional containers.

## Components
### Buttons
Buttons are solid black with white text for primary actions, and outlined with 1px hairlines for secondary actions. Use `label-mono` typography for button text to maintain the technical aesthetic.

### Cards
Cards are defined by a 1px divider or hairline border. They should have no background fill by default, inheriting the page color. On hover, the background can transition to a slightly lighter or darker tint.

### Lists
Lists should be clean with generous vertical padding (16px - 24px) between items. Use hairline dividers between list entries to maintain the editorial rhythm.

### Inputs & Forms
Input fields are simple underlines or 1px stroke boxes. Focused states should be indicated by a weight change in the border (from 1px to 2px) rather than a color change.

### Chips/Tags
Tags use the `label-mono` style. They should be small, capitalized, and boxed in a 1px frame with the standard soft-rounded corner.