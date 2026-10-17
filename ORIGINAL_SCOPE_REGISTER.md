# ORIGINAL SCOPE REGISTER — DELHI DENTAL CENTER CONSOLIDATION

**Project:** Delhi Dental Center — Website Consolidation & Redesign  
**Primary Reference:** `PLAN_FINAL.pdf` (05 October 2026)  
**Historical Project Record:** `From_start_till_Phase_4F.pdf`  
**Primary Consolidation Domain:** `delhidentalcenter.com`  
**Date of Audit:** October 2026

---

## 1. Authoritative Original Scope Summary

The master planning documents establish that Delhi Dental Center's digital presence developed over two decades into multiple treatment-specific microsites and social properties. The consolidation mandate is to unite all clinical services under one authoritative, calm, editorial-style domain (`delhidentalcenter.com`) without diluting the primary dental identity.

### 1.1 The Nine Independent Source Domains
`PLAN_FINAL.pdf` (Page 5, Section 4 "Complete Source Inventory") and `From_start_till_Phase_4F.pdf` (Page 4, Section 3 "Discovery & Nine-Domain Audit") explicitly define the web domain scope as **exactly nine independent domains**:

1. **`https://delhidentalcenter.com/`** — Primary clinic website; multi-disciplinary dental care, domestic/international patient logistics, and clinic facilities.
2. **`https://dentalbracesdelhi.com`** — Delhi/NCR orthodontic, ceramic, metal, and adult braces lead generation.
3. **`https://toothwhiteningdelhi.com`** — Delhi/NCR laser teeth whitening and supervised home bleaching.
4. **`https://zirconiadentalcrownsindia.com`** — India/international zirconia ceramic crowns and bridges.
5. **`https://fullmouthdentalimplantsindia.com`** — India/international full-mouth implant rehabilitation.
6. **`https://zygomaticimplantsindia.com`** — India/international specialist zygomatic implant care (**Offline/DNS Failure at audit**).
7. **`https://all-on-4-dentalimplantsindia.com`** — India/international All-on-4 protocol and dental tourism logistics.
8. **`https://all-on-6-dentalimplantsindia.com`** — India/international All-on-6 protocol.
9. **`https://all-on-8-dentalimplantsindia.com`** — India/international All-on-8 protocol.

### 1.2 The 16 Facebook Social Assets
`PLAN_FINAL.pdf` (Page 5, "Facebook / social sources supplied by client") explicitly documents 16 individual social properties. These are marketing and social proof assets, not independent website domains:

| # | Asset Category / Purpose | Documented URL / Identifier | Implementation & Scope Tracking |
|---|---|---|---|
| 1 | Personal / Dr Amit Goswami profile | `https://www.facebook.com/dramit.goswami.1` | Doctor profile reference; credentials require client verification |
| 2 | Clinic Profile / Secondary Page | `https://www.facebook.com/profile.php?id=100064033119482` | Secondary clinic social page; requires verification |
| 3 | Main Clinic Brand Page | `https://www.facebook.com/delhidentalcenter/` | Primary clinic brand social property |
| 4 | Gum Disease Treatment | `https://www.facebook.com/gumdiseasetreatmentdelhiindia/` | Corresponds to `/periodontal-treatment/` |
| 5 | Painless Root Canal Treatment (RCT) | `https://www.facebook.com/PainlessrootcanaltreatmentRCTineastdelhi/` | Corresponds to `/root-canal-treatment/` (Unsubstantiated "painless" claim purged) |
| 6 | Dental Braces Treatment | `https://www.facebook.com/besttopdentalbracestreatmentclinicinDelhi/` | Corresponds to `/orthodontics/` & `/orthodontics/braces/` |
| 7 | Laser Teeth Whitening | `https://www.facebook.com/besttopLaserTeethWhiteningdentalclinicindelhi/` | Corresponds to `/cosmetic-dentistry/teeth-whitening/` |
| 8 | Dental Crown Treatment | `https://www.facebook.com/Dentalcrowntreatmentdentistdentalclinicindelhi/` | Corresponds to `/cosmetic-dentistry/zirconia-crowns/` |
| 9 | Zirconia Porcelain Crowns | `https://www.facebook.com/zirconiaporcelaindentalcrownsindelhi` | Corresponds to `/cosmetic-dentistry/zirconia-crowns/` |
| 10 | Dental Tourism India | `https://www.facebook.com/cheapdentaltourisminindia/` | Corresponds to `/international-patients/` |
| 11 | HydraFacial Treatment Delhi | `https://www.facebook.com/HydraFacial-treatment-Delhi-101680225763235/` | Corresponds to `/facial-aesthetics/` (HydraFacial service card) |
| 12 | Skin Treatments Delhi | `https://www.facebook.com/Skin-Treatments-Delhi-101861862416090/` | Corresponds to `/facial-aesthetics/` (Carbon laser & dermaplaning) |
| 13 | Laser Hair Removal / Reduction | `https://www.facebook.com/Laser-Hair-removal-reduction-treatment-Delhi-104546898809995/` | Corresponds to `/facial-aesthetics/` (Laser hair removal card) |
| 14 | Hair Regrowth Treatment Delhi | `https://www.facebook.com/Hair-Regrowth-Treatment-Delhi-111435734779735/` | Corresponds to `/facial-aesthetics/` (Hair regrowth therapy card) |
| 15 | Dermaplaning / Microdermabrasion | `https://www.facebook.com/Dermaplaning-Mirco-Dermabrasion-Treatment-Delhi-108439805093880/` | Corresponds to `/facial-aesthetics/` (Dermaplaning card) |
| 16 | Microneedling Treatment Delhi | `https://www.facebook.com/Micro-Needling-Treatment-Delhi-102686775677112/` | Corresponds to `/facial-aesthetics/` (Microneedling card) |

---

## 2. Source-of-Truth Status Register

| Domain / Scope Item | Original Requirement | Current Status | Information / Review Dependency |
|---|---|---|---|
| `delhidentalcenter.com` (Main) | Core clinic entity, practice history, doctors, facilities | **Implemented with Placeholders** | Client must verify official address, phone, email, and doctor credentials |
| `dentalbracesdelhi.com` | Orthodontic hub and braces treatment protocol | **Implemented & Tested** (`/orthodontics/`, `/orthodontics/braces/`) | Clinician review of treatment timelines |
| `toothwhiteningdelhi.com` | In-clinic laser and home teeth whitening | **Implemented & Tested** (`/cosmetic-dentistry/teeth-whitening/`) | Clinician confirmation of bleaching agent concentrations |
| `zirconiadentalcrownsindia.com` | Monolithic and layered zirconia crown restorations | **Implemented & Tested** (`/cosmetic-dentistry/zirconia-crowns/`) | Clinician review of crown durability claims |
| `fullmouthdentalimplantsindia.com` | Full-arch edentulism and implant rehabilitation | **Implemented & Tested** (`/dental-implants/full-mouth-dental-implants/`) | Clinician review of full-mouth surgical copy |
| `zygomaticimplantsindia.com` | Graftless zygomatic implant protocol for severe atrophy | **Reconstructed with Placeholders** (`/dental-implants/zygomatic-dental-implants/`) | **High Dependency:** Operating surgeon must confirm procedure is offered and approve copy |
| `all-on-4-dentalimplantsindia.com` | Angled 4-implant protocol and provisional loading | **Implemented & Tested** (`/dental-implants/all-on-4-dental-implants/`) | Clinician review of immediate loading copy |
| `all-on-6-dentalimplantsindia.com` | Six-implant architecture for enhanced load distribution | **Implemented & Tested** (`/dental-implants/all-on-6-dental-implants/`) | Clinician review of occlusal load claims |
| `all-on-8-dentalimplantsindia.com` | Eight-implant segmented arch rehabilitation | **Implemented & Tested** (`/dental-implants/all-on-8-dental-implants/`) | Clinician review of segmental bridge claims |
| **Root Canal Treatment (RCT)** | Endodontic therapy and tooth preservation (Plan p.8) | **Implemented & Tested** (`/root-canal-treatment/`) | Clinician review of endodontic protocol |
| **Gum & Periodontal Care** | Gingival scaling, flap surgery, GBR (Plan p.8) | **Implemented & Tested** (`/periodontal-treatment/`) | Clinician review of periodontal protocol |
| **Facial Aesthetics & Skin** | HydraFacial, laser hair, carbon facial (Plan p.4, 5, 8) | **Provisional Page Implemented** (`/facial-aesthetics/`) | **Client Decision Required:** Confirm whether to publish under dental domain or separate brand |
| **International Patients** | Airport transit, lodging, travel planning (Plan p.8) | **Implemented & Tested** (`/international-patients/`) | Client verification of hospital/hotel partnerships |
| **Patient Cases / Results** | Transformation photos and case studies (Plan p.8) | **Implemented with Consent Gate** (`/patient-cases/`) | Signed patient HIPAA/privacy consent forms |
| **Clinical Resources / Guides** | Educational articles and FAQs (Plan p.8) | **Implemented with Placeholders** (`/resources/`) | Client content strategy and clinician article sign-offs |
