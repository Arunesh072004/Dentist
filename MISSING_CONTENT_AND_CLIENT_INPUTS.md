# MISSING CONTENT AND CLIENT INPUTS REGISTER

**Project:** Delhi Dental Center — Website Consolidation & Redesign  
**Document:** Outstanding Client Verification, Asset Requirements & Placeholders Register  
**Audit Date:** October 2026  
**Status:** **Preview Complete / Gated by Client Information**

---

## 1. Practice Entity & Contact Data (Blocks Production Launch)

The current local website deliberately renders honest visual placeholders for all unverified physical contact details. To transition from local preview to live publishing, the client must supply and verify:

| Field | Current Local Value / Placeholder | Source Finding in Legacy Code | Verification Required From Client |
|---|---|---|---|
| **Physical Address** | `[Verified Address Pending Approval]` | `76 Radhey Puri Extension-1, East Delhi 110051` | Confirm current physical practice address and PIN code. |
| **Direct Phone Number** | `[Verified Phone Line Pending Approval]` | `+91-9968288257` | Confirm primary telephone number for patient appointments. |
| **Inquiry Email** | `[Inquiry Email Awaiting Clinic Confirmation]` | `delhidentalcenter@gmail.com` | Confirm official clinic email address for web inquiries. |
| **Operating Hours** | `[Schedule Awaiting Clinic Confirmation]` | Legacy footer mentioned Mon–Sat hours | Confirm exact days and operating hours for reception. |
| **Sunday Policy** | `[Policy Awaiting Clinic Confirmation]` | Not specified | Confirm if clinic is open by appointment on Sundays. |
| **Practice Age / Founding** | `Since 2000` (26-year-old practice in 2026) | `Established in 2000 (22-year-old practice)` | Confirm exact founding year (2000). |

---

## 2. Clinician Profiles & Professional Credentials

Dr. Amit Goswami and Dr. Vandana Goswami are featured on `/about/` with structural placeholder cards:

| Clinician | Required Data Items | Current Status | Blocker |
|---|---|---|---|
| **Dr. Amit Goswami** | (1) Formal degrees (BDS, MDS, FICOI, etc.)<br>(2) Dental Council Registration Number<br>(3) High-resolution professional portrait photograph<br>(4) Signed written consent for public web display | Listed as "Senior Dental Surgeon · Implantology Focus" with placeholder avatar | **BLOCKED:** No high-res headshot (legacy was 15 KB); degrees unverified. |
| **Dr. Vandana Goswami** | (1) Formal degrees and dental certifications<br>(2) Dental Council Registration Number<br>(3) High-resolution professional portrait photograph<br>(4) Signed written consent for public web display | Listed as "Dental Specialist · Restorative & Orthodontic Care" with placeholder avatar | **BLOCKED:** Written consent and verified credentials required. |

---

## 3. Practice Statistics Normalization

`PLAN_FINAL.pdf` (Page 2) flagged contradictory statistics across legacy pages. These are neutralized on the local site and require client sign-off:

| Metric | Legacy Claim Found | Status on New Site | Client Action Required |
|---|---|---|---|
| Dental Implants Placed | `15,000+` | Omitted / Hedged | Client to provide auditable, verified implant volume count. |
| Root Canal Treatments | `12,000+ Painless RCTs` | Omitted ("Painless" claim banned) | Client to provide verified RCT procedure count. |
| Smile Makeovers | `8,500+` | Omitted / Hedged | Client to confirm verified cosmetic case count. |
| Teeth Whitening | `2,000+` | Omitted / Hedged | Client to confirm verified whitening case count. |
| Countries Served | `50+ Countries` vs `70+ Countries` | Standardized to general international care | Client to confirm international patient geographic footprint. |

---

## 4. Patient Case Results & Review Consents

- **Patient Cases (`/patient-cases/`):** The gallery layout is complete and responsive, but displays **zero patient before/after photographs**. Every photograph requires a signed patient clinical photography consent form complying with medical privacy regulations.
- **Google Reviews & Testimonials:** `googleReviews.json` contains 10 reviews with reviewer names and star ratings. These are omitted from public pages until written consent is documented.

---

## 5. Strategic Scope Decision: Facial Aesthetics & Skin Services

`PLAN_FINAL.pdf` (p.4, 5, 8) and `SkinTreatments.tsx` confirm that Delhi Dental Center historically provided HydraFacial, carbon laser facials, laser hair removal, and skin rejuvenation.

- **Current Implementation:** A provisional page is live at `/facial-aesthetics/` with a clear `[CLIENT SCOPE CONFIRMATION REQUIRED]` banner.
- **Client Decision Required:**
  1. **Option A:** Approve inclusion of `/facial-aesthetics/` as a dedicated aesthetic sub-hub on `delhidentalcenter.com`.
  2. **Option B:** Spin off skin and medi-spa services into a distinct standalone website/brand to preserve pure dental positioning.
  3. **Option C:** Formally retire aesthetic services and decommission the 6 legacy Facebook pages.
