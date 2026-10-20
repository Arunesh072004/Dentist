# Open Questions and Client-Gated Blockers

**Project:** Delhi Dental Center Consolidated Website  
**Date:** 2026-10-20  
**Status:** Blocking Production Launch  
**Governing Plan:** `PLAN_FINAL.pdf`

---

## Overview

The following items are gated on clinic input, doctor verification, or external third-party service credentials. Under strict anti-fabrication guidelines, placeholder or fabricated data must never be deployed.

---

## Client & Clinical Input Blockers

### B-01 / D-07: Primary Clinic Phone Number
- **Requirement:** Add authentic primary telephone contact for clinic.
- **Status:** Pending client confirmation.
- **Impact:** Header call button, footer contact card, and contact page use non-actionable labels until confirmed.

### B-02 / D-08: Clinic Contact Email Address
- **Requirement:** Authentic email address for general inquiries and international patient coordination.
- **Status:** Pending client confirmation.
- **Impact:** Footer and contact page display placeholder email until confirmed.

### B-03 / D-21: Doctor Qualifications & Registration
- **Requirement:** Verified degrees (BDS, MDS, FICD, etc.), universities, years of graduation, and state dental council registration numbers for Dr. Amit Goswami and Dr. Vandana Goswami.
- **Status:** Pending doctor submission.
- **Impact:** About page holds placeholder disclaimer at line 112; doctors section omitted from homepage.

### B-04: Practice Trust & Case Statistics
- **Requirement:** Verified statistics (founding year confirmed as 2000, implant case volume, patient count).
- **Status:** Pending client review.
- **Impact:** Capability strips and trust badges display qualitative statements only; quantitative claims withheld.

### B-05 / D-11: Clinical Claims Approval
- **Requirement:** Sign-off by attending clinician on 10 entries in `PHASE_4N_CLINICAL_CONTENT_APPROVAL_REGISTER.csv`.
- **Status:** Status remains "REQUIRES CLINICAL REVIEW".
- **Impact:** No outcome guarantees or clinical claims are published.

### B-06 / D-12: Real Clinic Photography & Media Assets
- **Requirement:** High-resolution clinic photography (operatory, OPG machine, reception, exterior, clinician portraits).
- **Status:** Pending asset collection.
- **Impact:** `assets/images/` contains no clinic photographs; `og:image` metadata omitted across all pages.

### B-07 / D-43: Patient Case Studies & Consent Documentation
- **Requirement:** Signed patient consent for before/after documentation and case imagery.
- **Status:** Patient cases page holds consent-gated status.
- **Impact:** No patient before/after imagery is published without documented consent.

### B-08 / D-13: Verified Patient Testimonials
- **Requirement:** Authentic patient reviews with verifiable attribution (e.g. Google Maps review link or signed feedback).
- **Status:** Pending client supply.
- **Impact:** Testimonial blocks omitted from homepage and service hubs.

### B-09 / D-04: WhatsApp Business Number
- **Requirement:** Dedicated WhatsApp Business line for patient inquiries and international triage.
- **Status:** Pending client supply.
- **Impact:** WhatsApp floating CTA and `wa.me/` direct links withheld.

### B-11 / D-09, D-10, D-22: Legal & Clinical Policy Text
- **Requirement:** Approved text for Privacy Policy, Terms of Use, and Medical Disclaimer.
- **Status:** Pending legal/doctor approval.
- **Impact:** Dedicated legal pages withheld; footer links point to verified sections.

### B-13 / D-06: Form Submission Routing & Backend Choice
- **Requirement:** Destination email address for appointment requests and contact form submissions; choice of backend (Formspree vs. Web3Forms vs. custom worker).
- **Status:** Pending client decision and email supply.
- **Impact:** All 13 form instances remain in safe client-side preview mode (`event.preventDefault()`).

### B-14: International Patient Concierge Services
- **Requirement:** Confirmation of whether airport transfer, accommodation assistance, and foreign exchange coordination remain active services.
- **Status:** Pending clinic confirmation.
- **Impact:** International patients page maintains conservative general guidance.

### B-15: Treatment & Service Catalog Deprecations
- **Requirement:** Identification of any discontinued services from historic legacy domains.
- **Status:** Pending clinic review.
- **Impact:** Current IA maintains verified 7 service hubs.

---

## External Configuration Blockers

### D-03: Google Analytics 4 (GA4) Measurement ID
- **Requirement:** Valid GA4 Measurement ID (`G-XXXXXXXXXX`) and Google Search Console property verification.
- **Status:** Pending account provisioning by client.
- **Impact:** Analytics tracking code not loaded.

### D-60: Cloudflare Pages Deployment Finalization
- **Requirement:** Complete Git integration on Cloudflare Pages and publish staging preview URL.
- **Status:** Authorization checkpoint pending user interaction in browser.
- **Impact:** Staging URL verification deferred to post-deployment phase.
