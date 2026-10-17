# PHASE 4D COMPONENT INVENTORY

## 1. All-on-X Comparison Matrix
- **Purpose:** Visually compare All-on-4/6/8 configurations without hardcoding superiority.
- **Configurable Fields:** Protocol, Implant Count, Clinical Indications, Bone Requirements.
- **Dependencies:** `[CLINICAL REVIEW REQUIRED]` for all specific anatomical/clinical claims.
- **Responsive Behavior:** Converts from standard desktop table to a stacked, label-prefixed card layout on mobile (`max-width: 767px`).

## 2. Clinical Diagram Block
- **Purpose:** Present anatomical configurations, implant mechanics, and treatment pathways.
- **Configurable Fields:** Image asset area, descriptive caption.
- **Dependencies:** `[ASSET REQUIRED]`, `[CLINICAL REVIEW REQUIRED]`.

## 3. Treatment Decision Block
- **Purpose:** Patient decision-support outlining what needs to be discussed during a consultation.
- **Dependencies:** Clinically neutral wording required.

## 4. Doctor / Specialist Reviewer Block
- **Purpose:** Attribute clinical text to specific specialists (essential for Zygomatic and complex cases).
- **Configurable Fields:** Avatar, Name, Credentials, Role.
- **Dependencies:** `[CLIENT VERIFICATION REQUIRED]`.

## 5. Patient Case
- **Purpose:** Show authentic clinical outcomes.
- **Configurable Fields:** Header (summary), Before/After Image area, Body (approach).
- **Dependencies:** `[AUTHENTIC PATIENT CASE REQUIRED]`.

## 6. Journey Timeline
- **Purpose:** Sequential process mapping, specifically utilized on the International Patients page.
- **Dependencies:** Logistical steps marked `[CLIENT VERIFICATION REQUIRED]`.

## 7. Configurable Quick Facts
- **Purpose:** Highly flexible treatment summary data.
- **Responsive Behavior:** CSS Grid (`repeat(auto-fit, minmax(150px, 1fr))`) auto-adjusts based on the number of facts present.

## 8. Before/After Slider Placeholder
- **Purpose:** Visual placeholder for cosmetic results. Designed to fail gracefully (can be safely omitted if no asset exists without breaking the page layout).
- **Dependencies:** `[AUTHENTIC APPROVED BEFORE/AFTER ASSET REQUIRED]`.

## 9. Related Treatments
- **Purpose:** Contextual intra-cluster navigation (pill-shaped anchor links).
