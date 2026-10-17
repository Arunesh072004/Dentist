# PHASE 4I DESIGN SYSTEM 2.0

## 1. Design Tokens
- **Primary Color:** Sapphire Blue (`--color-accent-primary`)
- **Secondary Color:** Warm Charcoal (`--color-text-primary`)
- **Background:** Soft Off-White (`--color-bg-primary`)
- **Spacing Scale:** 4px baseline (`--spacing-1` through `--spacing-32`)
- **Border Radius:** Soft (`--border-radius-sm`, `--border-radius-md`, `--border-radius-lg`)

## 2. Typography
- **Display / H1 / H2:** Outfit (Clean, geometric, authoritative)
- **Body / Captions:** Inter (Highly legible, medical precision)
- **Hierarchy:** H1 (2.5rem), H2 (2rem), H3 (1.5rem), Body Large (1.125rem), Body (1rem), Small (0.875rem)

## 3. Grid & Layout System
- Max-width containers (1200px) with responsive padding.
- 12-column CSS Grid architecture for complex internal layouts.
- Asymmetrical split layouts (e.g., 5-col image, 7-col text) for editorial rhythm.

## 4. Components
- **Treatment Cards:** Subtle borders, no heavy shadows.
- **Comparison Matrix:** Tabular data that converts to stacked cards on mobile.
- **Buttons:** Solid primary, outline secondary, clear focus rings.
- **Accordions:** Semantic `<details>`/`<summary>` with smooth CSS height transitions.
- **Reviewer Blocks:** Avatar, Name, Role layout for clinical credibility.

## 5. Micro-Interactions
- Subtle opacity transitions on hover.
- Soft transform (`scale(1.02)`) on major CTAs.
- Reduced motion (`@media (prefers-reduced-motion)`) respected.
