# PHASE 4I ACCESSIBILITY QA

## Key Implementations
- **Semantic HTML:** Strict adherence to `<header>`, `<main>`, `<nav>`, and logical heading order (H1 -> H2 -> H3).
- **Keyboard Navigation:** All interactive elements (buttons, links, form fields, accordions) receive visible focus (`:focus-visible`).
- **Contrast:** Verified that the Sapphire Blue and Warm Charcoal colors against the Soft Off-White background meet WCAG AA standards.
- **Reduced Motion:** CSS animations (hover states, reveals) are disabled when `@media (prefers-reduced-motion: reduce)` is active.
