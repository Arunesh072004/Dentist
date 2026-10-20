# Changelog

All notable changes to the Delhi Dental Center consolidated website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to semantic phase milestones outlined in `PLAN_FINAL.pdf`.

---

## [0.2.0] - 2026-10-20 — Sprint 1 Remediation (Implemented & Verified)

### Added & Implemented
- **TRACK-A (D-01) — Social Metadata:** Added full Open Graph metadata (`og:title`, `og:description`, `og:url`, `og:site_name`, `og:type`) and Twitter Card summary metadata (`twitter:card="summary"`, `twitter:title`, `twitter:description`) across all 21 public HTML routes. All metadata attributes are derived directly from each page's validated `<title>`, `<meta name="description">`, and canonical URL. Fabricated `og:image` is strictly omitted until authentic approved photography is supplied.
- **TRACK-B (D-02) — Structured Data (JSON-LD):**
  - Homepage: Implemented valid dual `MedicalBusiness` and `Dentist` schema via `@graph` containing only verified factual attributes (`@id: https://delhidentalcenter.com/#clinic`, name, URL, founding date 2000, area served: Delhi NCR, medical specialties). Zero fabricated contact details, opening hours, ratings, or doctor credentials.
  - Interior Public Pages (20 routes): Added structured `BreadcrumbList` schema exactly matching the visible breadcrumb trail on each page.
  - Homepage FAQs: Added `FAQPage` schema strictly matching the 4 visible procedural/logistical FAQ questions and answers. All JSON-LD parsed and verified as valid JSON.
- **TRACK-C (D-19) — Custom 404 Page:** Created `website/404.html` adhering to the central design system (`variables.css`, `layout.css`, `components.css`), with matching global header, deep-navy footer, and accessible navigation linking back to key verified hubs (Home, Treatments Directory, Dental Implants, Orthodontics, International Patients, Contact).
- **TRACK-D (D-16) — Treatment Categories Grid:** Implemented 7-category treatment grid on the homepage linking directly to verified clinical hubs: Dental Implants, Orthodontics & Braces, Crowns & Bridges, Root Canal Treatment, Gum Care & Periodontics, Cosmetic Dentistry, and Skin & Facial Aesthetics, plus a directory button linking to `/services/`.
- **TRACK-E (D-18) — Clinical Approach & Differentiators:** Added practice foundations section to the homepage covering diagnostic imaging first, multi-disciplinary coordination, biological longevity/preservation, and transparent consultations, derived directly from approved About page copy.
- **TRACK-F (D-15) — Homepage Logistical FAQs:** Added 4 accessible process and logistical FAQs on the homepage utilizing the existing `.accordion-item` and `.accordion-header` interaction pattern with full keyboard navigation and ARIA attributes.
- **TRACK-G (D-24) — Image Lazy Loading:** Added `loading="lazy"` to all below-the-fold images across all HTML routes (including footer logo instances and preview-evidence screenshots) while maintaining eager loading for any LCP elements.
- **TRACK-H (D-27, D-28) — Documentation & Governance:** Established `website/OPEN_QUESTIONS.md` tracking client-gated blockers B-01 through B-15 and external configuration blockers D-03/D-60; established `website/docs/README.md` indexing all audit registers and compliance matrices; maintained change log integrity.

---

## [Previous Milestones]

### Phase 4O / 4P - Footer Architecture & Polish
- Redesigned site-wide footer with deep-navy theme (`#07162c`), restrained teal accents, accessible typography, and verified navigation links.
- Sanitized mobile navigation and sticky header interactions.
- Added comprehensive evidence register and local QA audits.

### Phase 4A - 4N - Initial Consolidation & IA Implementation
- Consolidated 9 legacy practice domains into a single authoritative IA under `delhidentalcenter.com`.
- Implemented 21 static HTML routes covering dental implant specializations, orthodontics, cosmetic dentistry, root canal, periodontal, facial aesthetics, international patients, and patient cases.
- Centralized CSS design system (`variables.css`, `components.css`, `layout.css`, `typography.css`).
- Built accessible search filter and mobile drawer in `main.js`.
