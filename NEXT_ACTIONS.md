# Next Actions Register: Delhi Dental Center Website Consolidation

**Project Phase:** Local UI/UX Completion & Source Reconciliation Finished  
**Current Date:** October 17, 2026  
**Primary Repository:** `delhi-dental-center`  
**Overall Status:** Local UI Complete (21/21 Routes Active) | SEO Migration NOT READY

---

## 1. Single Highest-Priority Next Action

> [!IMPORTANT]
> **Priority #1 Action:** **Obtain Client Scope Confirmation on Medi-Spa / Facial Aesthetics.**
> The local UI for `website/facial-aesthetics/` is fully designed and operational with clear provisional placeholders. The client must formally decide whether facial aesthetics remains an active service vertical on the primary dental domain `delhidentalcenter.com`, is hosted on a separate sub-brand/domain, or is archived prior to production launch.

---

## 2. Action Categories & Prioritized Breakdown

### Category A: Immediate Implementation (Antigravity Engineering) — COMPLETED
All required local development and responsive UI stabilization tasks have been fully executed:
- [x] **Reconcile Scope from Source PDFs:** Verified 9 independent web domains and 16 Facebook properties from `PLAN_FINAL.pdf` and historical archives.
- [x] **Build Missing Clinical Routes:** Designed and implemented 3 missing service pages:
  - `website/root-canal-treatment/index.html` (Endodontics)
  - `website/periodontal-treatment/index.html` (Periodontics / Gum Care)
  - `website/facial-aesthetics/index.html` (Facial Aesthetics / Medi-Spa with provisional banner)
- [x] **Update Master Treatment Directory:** Updated `website/services/index.html` with cards linking to the 3 newly added clinical domains.
- [x] **Browser Acceptance & Multi-Viewport Verification:** Tested all 21 public routes on Desktop (1440px), Tablet (768px), and Mobile (390px). Confirmed zero horizontal overflow, working accordions, and sandboxed preview forms.
- [x] **Direct Service Discovery & On-Site Search Engine:** Built lightweight client-side search engine in `main.js` and `components.css`; embedded on homepage and services directory with controlled synonym mapping (e.g. debonding $\rightarrow$ `/orthodontics/braces/#debonding`).
- [x] **Tooth Debonding Section Architecture:** Enriched Step 4 of `/orthodontics/braces/` with dedicated clinical debonding, resin removal, and retention protocol with `#debonding` anchor.
- [x] **Canonical URLs & Google Discovery Architecture:** Injected canonical tags across all 21 public routes, authored `sitemap.xml` and `robots.txt`.
- [x] **Service Discovery Registers:** Produced `SERVICE_DISCOVERY_AND_URL_MAP.csv`, `SERVICE_SEARCH_IMPLEMENTATION_REPORT.md`, and `SERVICE_URL_AND_INDEXABILITY_AUDIT.md`.
- [x] **Deliverable Documentation:** Authored core audit and register documents in the repository root.
- [x] **Full Independent Audit & Defect Correction:** Completed deep verification across all 21 public routes, tested 26 service search query permutations, validated `#debonding` anchor navigation, added sticky header scroll-margin-top clearance, sanitized search empty state to prevent XSS, and authored `FULL_INDEPENDENT_AUDIT_REPORT.md`, `SERVICE_SEARCH_TEST_MATRIX.csv`, `PUBLIC_ROUTE_ACCEPTANCE_MATRIX.csv`, `SEO_INDEXABILITY_AUDIT.csv`, and `SECURITY_AND_PRIVACY_AUDIT.md`.

---

### Category B: Client Business Decisions & Administrative Inputs (Client Action Required)
Before staging or production deployment can occur, the clinic management must provide:

1. **Aesthetics / Medi-Spa Positioning:**
   - Confirm whether HydraFacial, Carbon Laser, Laser Hair Reduction, and Dermaplaning belong on `delhidentalcenter.com` navigation, or should be isolated.
2. **Clinic Operating Identity:**
   - Verified legal business name and clinic establishment year (replacing `[CLIENT TO CONFIRM]`).
   - Official contact telephone number, official clinic WhatsApp business number, and primary inquiry email address.
   - Physical clinic street address, landmark, and verified operating hours (weekdays vs. weekends).
3. **Clinician Credentials & Leadership:**
   - Full legal names of lead dental surgeons and specialists.
   - Registered dental council registration numbers, university qualifications, and accredited international fellowships.
   - High-resolution, authentic clinical portrait photography to replace visual placeholder cards.
4. **Treatment Pricing & Terms:**
   - Confirmation on whether treatment starting prices (e.g., Zirconia crowns, Zoom whitening) should be published or remain consultation-based.
   - Clarification of payment modes, EMI options, and international patient package boundaries.

---

### Category C: Clinical & Ethical Sign-Offs (Dental Surgeon Review Required)
The clinical staff must review draft protocols in `CLINICAL_REVIEW_REGISTER.md`:

1. **Zygomatic Implant Clinical Protocol:**
   - Surgical indications for severe maxillary resorption without bone grafting.
   - Verification of reconstructed recovery timelines and sedation/general anesthesia guidelines (original site was offline).
2. **Full-Arch Implant Protocols (All-on-4 / All-on-6 / All-on-8):**
   - Candidate screening criteria, multi-unit abutment protocols, and immediate loading vs. delayed loading contraindications.
3. **Root Canal & Periodontal Therapy Protocols:**
   - Single-visit vs. multi-visit RCT indications, rotary instrumentation terminology, and post-endodontic crown requirements.
   - Staging of periodontal disease (gingivitis vs. chronic periodontitis) and deep scaling / root planing recovery instructions.
4. **Removal of Unsubstantiated Marketing Claims:**
   - Formal confirmation that legacy claims such as "100% painless", "12,000+ completed RCTs", or "Guaranteed Lifetime Implants" remain permanently purged from all web content.

---

### Category D: SEO & Analytics Data Prerequisites (Marketing / SEO Team Action Required)
Prior to any server configuration, domain consolidation, or 301-redirect execution:

1. **Search Console Access & Data Export:**
   - Export 16 months of Google Search Console query and page-level performance data for all 9 source domains.
2. **GA4 / Web Analytics Exports:**
   - Export top landing pages by session volume and form completions over the past 12 months.
3. **Backlink Audit & Referring Domain Analysis:**
   - Pull full backlink audit reports (Ahrefs/Semrush) for all 8 satellite domains to preserve genuine external link equity.
4. **Doorway Page De-indexing Strategy:**
   - Confirm HTTP 410 Gone disposition for zero-traffic programmatic location doorway pages to prevent soft-404 algorithmic penalties.
5. **DNS & Server Infrastructure Preparation:**
   - Prepare unified Cloudflare or Nginx reverse proxy configuration to manage tier-1 redirects once client and clinical sign-offs are granted.

---

## 3. Workflow Summary Matrix

| Milestone | Responsible Party | Current Status | Blocker For |
| :--- | :--- | :---: | :--- |
| **Local UI & Route Implementation** | Antigravity Agent | **100% Complete** | None |
| **Client Business Inputs & Credentials** | Clinic Management | **Pending** | Production Content Freeze |
| **Clinical Content Verification** | Lead Dental Surgeon | **Pending** | Medical Compliance & Launch |
| **SEO Performance Data Provision** | Digital Marketing Team | **Pending** | 301 Redirect Execution |
| **Production Staging & Domain Cutover** | DevOps / Webmaster | **Blocked** | Pre-Migration Sign-Offs |
