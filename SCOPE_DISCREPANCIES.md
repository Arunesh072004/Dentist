# SCOPE DISCREPANCIES AND SOURCE CONFLICTS

**Project:** Delhi Dental Center — Website Consolidation & Redesign  
**Document:** Source Conflict Analysis, Crawl Ceiling Audits & Scope Evolution  
**Primary Reference:** `PLAN_FINAL.pdf` (05 Oct 2026), `From_start_till_Phase_4F.pdf`  
**Audit Date:** October 2026

---

## 1. Domain Count Discrepancies Resolved

### The Issue
Previous audit summaries contained conflicting statements regarding the number of source websites (ranging from 9 to 11).

### The Evidence
- **`PLAN_FINAL.pdf` (Page 5):** Lists 1 primary main site (`delhidentalcenter.com`) and 8 treatment microsites (`dentalbracesdelhi.com`, `toothwhiteningdelhi.com`, `zirconiadentalcrownsindia.com`, `fullmouthdentalimplantsindia.com`, `zygomaticimplantsindia.com`, `all-on-4-dentalimplantsindia.com`, `all-on-6-dentalimplantsindia.com`, `all-on-8-dentalimplantsindia.com`).
- It also lists 16 Facebook properties under *"Facebook / social sources supplied by client"*.
- In earlier audit drafts, a derived 465 KB project spreadsheet (`PHASE_2_MASTER_URL_CONSOLIDATION_MATRIX.csv`) was mistakenly counted as a 10th source website.

### Authoritative Resolution
- **Total Independent Web Domains:** **9 domains**.
- **Total Client Social Properties:** **16 Facebook URLs**.
- No other web domains exist in the primary project documents.

---

## 2. Inaccessible Domain: `zygomaticimplantsindia.com`

- **Finding:** At crawl time, `zygomaticimplantsindia.com` returned an unresolvable DNS error (`getaddrinfo` failed). The domain was completely offline.
- **Reconciliation Impact:** Zero legacy URLs, HTML copy, or images could be extracted.
- **Resolution:** The page `/dental-implants/zygomatic-dental-implants/` was created using evidence-based peer-reviewed dental literature, strictly hedged.
- **Governance:** The page is marked as provisional and cannot be approved for live production until the clinic's operating surgeon reviews and approves it.

---

## 3. Crawl Limitations: The 250-URL Ceiling

- **Finding:** Eight of the nine web domains reached the crawler's 250-URL ceiling.
- **Underlying Cause:** These satellite microsites utilized programmatic keyword/location permutations (e.g., `braces-in-east-delhi`, `braces-in-mayur-vihar`, `braces-in-patparganj`, etc.).
- **Reconciliation Impact:** Complete URL-level parity for all long-tail programmatic pages beyond the 250 crawled URLs is not proven.
- **Resolution:** The 21 consolidated routes consolidate all substantive clinical disciplines, treatment protocols, and user intents into authoritative hub-and-spoke routes on `delhidentalcenter.com`.

---

## 4. Scope Evolution: Omissions Now Corrected

| Service Category | Original Status in First Build | Master Plan Scope | Action Taken in This Phase |
|---|---|---|---|
| **Root Canal Treatment (RCT)** | Omitted from initial 18 routes | Master Plan p.8 lists "Root Canal: RCT, endodontic care, FAQs" | **RESOLVED:** Created `/root-canal-treatment/` with 4 process steps, facts strip, and consultation form. Tested across 3 viewports. |
| **Gum & Periodontal Care** | Omitted from initial 18 routes | Master Plan p.8 lists "Gum Care: Gum disease, bleeding gums, periodontal care" | **RESOLVED:** Created `/periodontal-treatment/` with 4 process steps, clinical indications, and consultation form. Tested across 3 viewports. |
| **Facial Aesthetics & Skin Services** | Omitted from initial 18 routes | Master Plan p.4, 5, 8 & `SkinTreatments.tsx` confirm HydraFacial, laser hair, carbon facial | **RESOLVED:** Created `/facial-aesthetics/` with clear `[CLIENT SCOPE CONFIRMATION REQUIRED]` notice. Tested across 3 viewports. |

---

## 5. Defect Register & Resolution Log

| Defect ID | Severity | File / Route Affected | Defect Description | Correction Applied | Retest Result |
|---|---|---|---|---|---|
| **DEF-001** | Medium | `website/periodontal-treatment/index.html` | Step 4 description used absolute phrasing: "maintain gingival stability over a lifetime." | Replaced with non-promissory medical wording: "maintain gingival stability, and help prevent disease recurrence." | **PASS** — Verified via code inspection and retest. |
| **DEF-002** | Medium | `website/facial-aesthetics/index.html` | Service cards omitted Hair Regrowth Therapy and Microneedling documented in `PLAN_FINAL.pdf` p.5, 8. | Added two dedicated service cards for Hair Regrowth and Microneedling & Collagen Induction with clear `[TERMS TO BE PROVIDED]` badges. | **PASS** — Verified in Chromium browser; all 6 cards render cleanly. |
| **DEF-003** | Low | `ORIGINAL_SCOPE_REGISTER.md` | Facebook assets listed as a summary paragraph rather than an exhaustive 16-row register. | Replaced with full 16-row table mapping each Facebook URL from `PLAN_FINAL.pdf` p.5 to its purpose and corresponding destination route. | **PASS** — Documentation verified against source PDF. |
| **DEF-004** | Low | Narrative Documentation vs. Canonical URLs | Theoretical discussion of alternate short URLs (`/teeth-whitening/`, `/zirconia-crowns/`) in earlier notes risked path confusion. | Confirmed all 550 internal HTML links point strictly to canonical destinations (`/cosmetic-dentistry/teeth-whitening/`, `/cosmetic-dentistry/zirconia-crowns/`, `/dental-implants/full-mouth-dental-implants/`, `/dental-implants/zygomatic-dental-implants/`, `/orthodontics/braces/`). | **PASS** — 0 broken internal links across all 21 public routes. |
| **DEF-005** | Low | Route Inventory Accounting | Root count was described as 21, but directory scan showed a legacy internal QA directory `website/preview-evidence/`. | Clarified in route inventory: exactly **21 public production-candidate routes** + 1 local development QA harness (`/preview-evidence/`), total 22 index.html files. | **PASS** — Clear separation documented. |

