# Delhi Dental Center — Project Documentation Index

This directory provides an index of all project audit registers, quality assurance reports, compliance matrices, and architectural documentation for the Delhi Dental Center consolidated website.

All historical audit evidence and migration registers are preserved under strict change control.

---

## 1. Governance & Remediation

- **`REMEDIATION_PLAN.md`** (workspace root): Complete sprint-by-sprint remediation plan mapped to `PLAN_FINAL.pdf` requirements and defect IDs.
- **`PLAN_FINAL_AUDIT_REPORT.md`** (workspace root): Objective, evidence-based audit measuring existing implementation against `PLAN_FINAL.pdf`.
- **`OPEN_QUESTIONS.md`** (`website/OPEN_QUESTIONS.md`): Blockers B-01 through B-15 requiring client input, clinician verification, or third-party service credentials.
- **`CHANGELOG.md`** (`website/CHANGELOG.md`): Semantic record of architectural and structural updates.

---

## 2. Compliance, Clinical & Privacy Audits

- **`SECURITY_AND_PRIVACY_AUDIT.md`**: Evaluation of client data handling, form submission states, and privacy safeguards.
- **`CONTENT_APPROVAL_WORKFLOW.md`**: Medical content governance procedure and clinician sign-off protocols.
- **`CLIENT_VERIFICATION_REQUEST.md`**: Formal questionnaire for clinic stakeholders.
- **`PHASE_4N_CLINICAL_CONTENT_APPROVAL_REGISTER.csv`**: Inventory of clinical claims categorized by verification status.

---

## 3. SEO & Migration Registers

- **`COMPLETE_ROUTE_INVENTORY.csv`**: Mapping of all 21 public routes, canonical URLs, titles, and breadcrumbs.
- **`SOURCE_TO_CONSOLIDATED_SITE_MATRIX.csv`**: Crosswalk of legacy standalone treatment domains to target consolidated site architecture.
- **`migration/old-domains/`**: Domain-specific redirect candidates and legacy URL preservation mappings.
- **`seo/url-strategy/`**: URL structure guidelines, trailing-slash rules, and clean slug standards.
- **`seo/keyword-research/`**: Topic clusters and patient intent mapping for Delhi NCR and international dentistry.

---

## 4. Design System & Technical Specifications

- **`REFERENCE_DESIGN_PRINCIPLES.md`**: Anti-AI-design guidelines, typography hierarchy, and visual restraint criteria.
- **`PHASE_4I_DESIGN_SYSTEM.md`**: Specification for CSS tokens, color palettes, button variants, and card layouts.
- **`PHASE_4C_COMPONENT_REQUIREMENTS.md`**: UI component specifications (accordions, modal search, sticky header, mobile drawer).
