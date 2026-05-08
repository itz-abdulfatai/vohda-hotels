---
name: Vohda Sovereign
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#121213'
  on-primary: '#ffffff'
  primary-container: '#272727'
  on-primary-container: '#8f8e8d'
  inverse-primary: '#c8c6c5'
  secondary: '#715c23'
  on-secondary: '#ffffff'
  secondary-container: '#fbdd97'
  on-secondary-container: '#766027'
  tertiary: '#14130c'
  on-tertiary: '#ffffff'
  tertiary-container: '#292720'
  on-tertiary-container: '#918e84'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#fedf9a'
  secondary-fixed-dim: '#e0c480'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#57440d'
  tertiary-fixed: '#e7e2d6'
  tertiary-fixed-dim: '#cbc6bb'
  on-tertiary-fixed: '#1d1c15'
  on-tertiary-fixed-variant: '#49473e'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin: 48px
  section-padding: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system embodies the essence of "Quiet Luxury." It is curated for a discerning audience that values discretion, comfort, and timeless elegance over fleeting trends. The brand personality is poised, welcoming, and sophisticated, avoiding visual clutter to allow high-end photography and premium service offerings to take center stage.

The design style is a blend of **Minimalism** and **Modern Corporate**, utilizing expansive whitespace to create a sense of physical space and breathability—mimicking the layout of a luxury hotel suite. Subtle micro-interactions, such as soft-fade transitions and elegant hover states on interactive elements, reinforce the high-end hospitality experience.

## Colors

The palette is anchored in high-contrast neutrals and metallic accents. 
- **Primary (#272727):** A deep charcoal used for core typography and structural elements to provide a grounded, authoritative feel.
- **Secondary (#B59B5C):** A soft champagne gold used sparingly for calls to action, highlights, and icons to evoke prestige.
- **Tertiary (#F2EDE1):** A warm taupe/bone white used for sectional backgrounds to soften the interface and add a tactile, "paper-like" quality.
- **Neutral (#FFFFFF):** Pure white is used for the primary canvas to maximize the impact of the generous whitespace.

## Typography

This design system utilizes a high-contrast typographic pairing to balance heritage and modernity. 

- **Headlines:** **Noto Serif** provides the editorial, literary feel required for a luxury brand. Large headlines should use tight letter-spacing and generous line height to maintain a "vogue" aesthetic.
- **Body & Interface:** **Inter** offers maximum readability and a clean, utilitarian contrast to the serif headings. 
- **Labels:** Small labels and navigational elements should utilize Inter with increased letter-spacing and uppercase styling to denote hierarchy and a sense of "concierge" precision.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to ensure the content feels curated and contained. A 12-column grid is used with wide 48px margins to frame the content. 

Spacing is intentionally "loose." Rather than packing information, the system uses large vertical padding between sections (80px+) to signal a relaxed, unhurried pace. Alignment should lean toward symmetrical layouts for a classical feel, with occasional asymmetrical image placements to maintain a modern editorial edge.

## Elevation & Depth

To maintain a sophisticated and flat "architectural" feel, elevation is achieved through **Tonal Layers** and **Ambient Shadows** rather than heavy gradients.

- **Surface Tiers:** Use the Tertiary taupe (#F2EDE1) to define secondary content areas or sidebar backgrounds.
- **Shadows:** Shadows are reserved exclusively for "floating" elements like cards or modals. These should be extremely diffused (e.g., `box-shadow: 0 20px 40px rgba(0,0,0,0.04)`), creating a soft lift that feels like a natural light source.
- **Imagery:** Photos should have a very subtle inner "vignette" or soft rounded corners to integrate them into the white canvas seamlessly.

## Shapes

The design system employs **Soft** geometry. While sharp edges can feel cold, and pill-shapes can feel too casual, a subtle 0.25rem (4px) to 0.75rem (12px) radius strikes a balance between professional rigor and welcoming comfort.

- **Primary Buttons:** Subtle 4px radius.
- **Content Cards:** 8px to 12px radius.
- **Form Inputs:** 4px radius for a structured, architectural appearance.

## Components

### Buttons
Primary actions use the Secondary champagne gold (#B59B5C) with white text, or a Ghost style with a Primary (#272727) border. Transitions should be slow (300ms) to evoke a sense of deliberate luxury.

### Cards
Cards should be used for room listings or amenities. They feature high-quality imagery, a soft ambient shadow on hover, and minimal text. The title should always be in Noto Serif.

### Inputs
Search and booking fields are ultra-minimal. Bottom-border-only inputs or very light-gray outlines are preferred to avoid visual clutter. Use Inter for input text for maximum clarity.

### Chips & Tags
Use for "Availability" or "Amenities." These should have a light taupe background (#F2EDE1) with dark charcoal text, avoiding bright "status" colors like green or red in favor of monochromatic alternatives (e.g., using a small icon for status).

### Hospitality-Specific Elements
- **Booking Bar:** A persistent, thin bar at the top or bottom of the screen with a fixed "Book Now" CTA.
- **Trust Signals:** Icons for "Verified Luxury," "Concierge 24/7," and "Best Price Guarantee" should use fine-line, custom gold-accented iconography.
- **Immersive Gallery:** A full-bleed carousel component with a soft-fade transition effect.