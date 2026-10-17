# SEO Migration Readiness Register: Delhi Dental Center Consolidation

**Current Status:** **NOT READY** (Migration Execution Strictly Blocked)  
**Consolidation Destination:** `https://delhidentalcenter.com`  
**Primary Source Documents:** `PLAN_FINAL.pdf`, `From_start_till_Phase_4F.pdf`  
**Date:** October 17, 2026

---

## 1. Executive Summary & Gatekeeper Status

The planned consolidation of 8 satellite microsite domains into the primary domain `delhidentalcenter.com` **MUST NOT BE EXECUTED AT THIS STAGE**. 

A blanket 301-redirect or DNS cutover without historical performance validation carries an extreme risk of catastrophic organic traffic collapse, algorithmic penalty for soft-404 redirects, and loss of keyword visibility. 

Until verified Google Search Console (GSC) search analytics, Google Analytics 4 (GA4) conversion paths, backlink authority metrics, and comprehensive uncapped crawl logs are provided, the technical migration status remains firmly **NOT READY**.

---

## 2. Evidence Audit: Received vs. Missing

| Evidence Category | Required Specification | Current Status | Impact on Migration Confidence |
| :--- | :--- | :--- | :--- |
| **Google Search Console (GSC)** | 16-month historical search queries, impressions, clicks, CTR, and average position for all 9 source domains | **MISSING** (No property access or data exports provided) | **CRITICAL**: Cannot distinguish high-ranking legacy assets from dead programmatic pages. |
| **GA4 / Web Analytics** | Landing page performance, organic session counts, conversion rates, and goal completions over 12+ months | **MISSING** (No exports or tracking access provided) | **CRITICAL**: High bounce/thin pages cannot be isolated from revenue-generating clinical entry points. |
| **Backlink Profiles** | Full backlink exports (Ahrefs, Semrush, or Moz) identifying high-equity external links, referring domains, and anchor text | **MISSING** (No backlink exports provided) | **CRITICAL**: External link equity cannot be preserved without targeting exact destination URLs. |
| **XML Sitemaps** | Production XML sitemaps for all 9 domains indicating live indexation status | **PARTIAL** (Discovered during historical crawls, but stale) | **HIGH**: Many indexed pages may not have been captured in crawler samples. |
| **Crawl Coverage** | Exhaustive, complete URL census of every public URL on all 9 domains | **INCOMPLETE** (8 domains capped at 250 URLs; 1 domain completely offline) | **HIGH**: True depth of programmatic doorway pages remains unmapped. |
| **Clinical Approvals** | Surgeon/dentist verification of clinical copy, protocols, and procedure indications | **PENDING** (Zygomatic, RCT, Periodontal, and Aesthetics awaiting review) | **HIGH**: Destination content cannot be indexed if clinical claims are unverified. |
| **Client Business Scope** | Formal confirmation of facial aesthetics services and brand positioning | **PENDING** (Client decision required on aesthetics inclusion) | **HIGH**: Routing and taxonomy cannot be locked while scope remains provisional. |

---

## 3. Crawl Coverage Limits & Source Domain Integrity

Historical discovery audits revealed that 8 out of the 9 domains were governed by programmatic doorway architectures targeting hundreds of geographic locations (e.g., Delhi, NCR, South Delhi, international patient queries). Previous crawls were capped at 250 URLs per domain to prevent crawler exhaustion.

| Source Domain | Crawl Scope | Crawl Cap Hit? | Inaccessible / Failed | Coverage Assessment |
| :--- | :---: | :---: | :---: | :--- |
| `delhidentalcenter.com` | Sampled | Yes (250 limit) | None | Core clinical taxonomy captured; deep location variants unmapped. |
| `dentalbracesdelhi.com` | Sampled | Yes (250 limit) | None | Core orthodontic procedures mapped; location doorway pages unmapped. |
| `toothwhiteningdelhi.com`| Sampled | Yes (250 limit) | None | Core whitening procedures mapped; deep duplicate city pages unmapped. |
| `zirconiadentalcrownsindia.com` | Sampled | Yes (250 limit) | None | Material specs & pricing claims captured; location pages unmapped. |
| `fullmouthdentalimplantsindia.com` | Sampled | Yes (250 limit) | None | Full-arch protocols captured; high volume of location doorways unmapped. |
| `zygomaticimplantsindia.com` | **0 URLs** | **N/A** | **DNS-FAIL / Offline** | **ZERO ORIGINAL COVERAGE**. Site was completely offline. Copy reconstructed from literature; surgeon review required. |
| `all-on-4-dentalimplantsindia.com` | Sampled | Yes (250 limit) | None | Surgical steps & criteria captured; doorway variants unmapped. |
| `all-on-6-dentalimplantsindia.com` | Sampled | Yes (250 limit) | None | Surgical steps & criteria captured; doorway variants unmapped. |
| `all-on-8-dentalimplantsindia.com` | Sampled | Yes (250 limit) | None | Full-mouth rehabilitation captured; doorway variants unmapped. |

> [!WARNING]
> A 250-URL crawl cap is an audit sample, NOT proof of exhaustive inventory. Under no circumstances should non-crawled URLs be blanket-redirected to the homepage (`/`). Google's search algorithms treat bulk home-page redirects as Soft 404 errors, neutralizing incoming PageRank.

---

## 4. Redirect Strategy & Governance Framework

When the project reaches migration execution readiness, 301 redirects must strictly adhere to the following 4-tier hierarchy:

### Tier 1: 1-to-1 Exact Clinical Matching (Confirmed Destinations)
*Legacy URLs with identical clinical intent, high authority, or proven organic traffic.*
- `dentalbracesdelhi.com/invisible-braces.html` $\rightarrow$ `delhidentalcenter.com/orthodontics/invisible-braces/`
- `toothwhiteningdelhi.com/zoom-whitening.html` $\rightarrow$ `delhidentalcenter.com/teeth-whitening/zoom-whitening/`
- `all-on-4-dentalimplantsindia.com/procedure.html` $\rightarrow$ `delhidentalcenter.com/dental-implants/all-on-4-dental-implants/`
- `all-on-6-dentalimplantsindia.com/procedure.html` $\rightarrow$ `delhidentalcenter.com/dental-implants/all-on-6-dental-implants/`
- `all-on-8-dentalimplantsindia.com/procedure.html` $\rightarrow$ `delhidentalcenter.com/dental-implants/all-on-8-dental-implants/`
- `zirconiadentalcrownsindia.com/zirconia-crowns.html` $\rightarrow$ `delhidentalcenter.com/zirconia-crowns/`
- `fullmouthdentalimplantsindia.com/` $\rightarrow$ `delhidentalcenter.com/dental-implants/full-mouth-implants/`

### Tier 2: Category Hub Consolidation (Topical Aggregation)
*Legacy treatment sub-pages that lack dedicated individual pages in the consolidated information architecture.*
- Bone grafting legacy articles $\rightarrow$ `delhidentalcenter.com/dental-implants/bone-grafting/`
- General implant technology, planning, and CBCT scans $\rightarrow$ `delhidentalcenter.com/dental-implants/`
- General aesthetic or smile makeover legacy content $\rightarrow$ `delhidentalcenter.com/services/` or `delhidentalcenter.com/facial-aesthetics/` (pending scope confirmation)

### Tier 3: Programmatic Location & Doorway Pages (Disposition Pending Traffic Audit)
*Legacy location-stuffed pages (e.g., `/all-on-4-dental-implants-in-noida.html`, `/best-dentist-south-delhi.html`).*
- **Action:** Cross-reference against GSC performance data.
  - If clicks $> 10$/month: Map to relevant clinical treatment hub or local contact page.
  - If clicks $= 0$ and impressions $< 50$: Return **HTTP 410 Gone** to purge index bloat cleanly without triggering soft-404 penalties.

### Tier 4: Zygomatic Implants Domain
*Domain `zygomaticimplantsindia.com` was offline at time of audit.*
- **Action:** If domain ownership is restored or DNS resolves, map legacy domain apex to `delhidentalcenter.com/dental-implants/zygomatic-implants/` once clinical content is approved by the operating surgeon.

---

## 5. Strict Pre-Migration Checklist (Gate Conditions)

Migration execution may only be scheduled when **ALL** of the following conditions are satisfied:

1. [ ] **GSC Search Performance Data Provided:** Minimum 6 months of search performance data exported for all 9 domains.
2. [ ] **GA4 Conversion Data Exported:** Validated list of top 100 organic landing pages generating patient inquiries.
3. [ ] **Backlink Audit Complete:** Referring domains with Domain Rating/Authority $> 20$ mapped to exact 1-to-1 URLs.
4. [ ] **Surgeon Sign-off:** Dr. [SURGEON TO CONFIRM] approval on Zygomatic, All-on-4/6/8, and bone grafting protocols.
5. [ ] **Client Aesthetics Decision:** Written client confirmation on whether Medi-Spa/Facial Aesthetics is launched or suppressed.
6. [ ] **Staging Redirect Map Tested:** All `.htaccess` / Nginx / Cloudflare 301 rules tested in staging with zero redirect chains or loops.
7. [ ] **Search Console Property Unification:** Domain-level GSC property established for `delhidentalcenter.com`.
8. [ ] **Change of Address Tool Preparation:** Google Search Console "Change of Address" tool staged for active legacy domains.

---

## 6. Conclusion

The Delhi Dental Center local consolidated site UI and architecture are completely assembled and verified across 21 responsive routes. However, **SEO MIGRATION READINESS REMAINS "NOT READY"**. No live redirects, DNS updates, or domain retirements are permitted until external traffic and backlink data are supplied by the client.
