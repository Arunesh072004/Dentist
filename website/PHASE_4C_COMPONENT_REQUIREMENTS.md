# PHASE 4C: COMPONENT REQUIREMENTS

To successfully execute the blueprint and ensure strict differentiation between pages (especially the All-on-X family), the following new UI components must be developed:

## 1. Treatment Comparison Matrix (All-on-X)
- **Purpose:** To visually compare All-on-4, All-on-6, and All-on-8 without relying solely on text paragraphs.
- **Fields:** The exact clinical fields (e.g., bone requirements, indications, stability factors) must be entirely configurable and left blank or populated conditionally.
- **Dependencies:** [CLINICAL REVIEW REQUIRED] for exact comparison metrics.

## 2. Before/After Visual Slider
- **Purpose:** For cosmetic pages (Teeth Whitening, Zirconia Crowns) and Patient Cases.
- **Note:** This is an *optional* component. The page architecture MUST remain visually strong if authentic approved before/after imagery is unavailable. No fake placeholders.
- **Dependencies:** [ASSET REQUIRED: Authentic, clinically approved patient images].

## 3. Clinical Diagram Block
- **Purpose:** To show anatomical configurations.
- **Dependencies:** [ASSET REQUIRED: High-quality medical diagrams].

## 4. International Journey Timeline
- **Purpose:** A specific horizontal or vertical timeline component for `/international-patients/` mapping the steps from Enquiry to Return.
- **Dependencies:** [CLIENT VERIFICATION REQUIRED: Airport assistance, hotel/accommodation information, visa assistance, travel planning, payment logistics].

## 5. Doctor / Specialist Reviewer Block
- **Purpose:** To attribute clinical content to a specific specialist (critical for Zygomatic and complex implant pages).
- **Fields:** Doctor Name, Photo, Verified Credentials / Qualifications / Awards, "Reviewed by" badge.

## 6. Configurable Quick Facts (Variant)
- **Purpose:** Modify the existing Quick Facts component to allow omitting elements like "Starting Price" or "Anesthesia" for non-surgical pages.
