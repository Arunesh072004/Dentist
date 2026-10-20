document.addEventListener('DOMContentLoaded', () => {
  // Accordion Logic with Accessibility
  const accordions = document.querySelectorAll('.accordion-header');
  
  accordions.forEach((acc, index) => {
    // 1. Accessibility Initialization
    const content = acc.nextElementSibling;
    if (!content) return;
    const headerId = `accordion-header-${index}`;
    const contentId = `accordion-content-${index}`;
    
    // Convert to semantic interaction if it's not a button
    if (acc.tagName.toLowerCase() !== 'button') {
      acc.setAttribute('role', 'button');
      acc.setAttribute('tabindex', '0');
    }
    
    acc.setAttribute('id', headerId);
    acc.setAttribute('aria-controls', contentId);
    
    content.setAttribute('id', contentId);
    content.setAttribute('role', 'region');
    content.setAttribute('aria-labelledby', headerId);
    
    // Set initial aria-expanded state
    const isOpen = content.classList.contains('open');
    acc.setAttribute('aria-expanded', isOpen.toString());
    
    // 2. Interaction Handlers
    const toggleAccordion = () => {
      const isCurrentlyOpen = content.classList.contains('open');
      
      // Close all other accordions (optional, but good for UX)
      document.querySelectorAll('.accordion-header').forEach(otherAcc => {
        if (otherAcc !== acc) {
          otherAcc.setAttribute('aria-expanded', 'false');
          otherAcc.nextElementSibling.classList.remove('open');
        }
      });
      
      // Toggle current
      if (!isCurrentlyOpen) {
        content.classList.add('open');
        acc.setAttribute('aria-expanded', 'true');
      } else {
        content.classList.remove('open');
        acc.setAttribute('aria-expanded', 'false');
      }
    };
    
    // Click event
    acc.addEventListener('click', toggleAccordion);
    
    // Keyboard event (Enter or Space)
    acc.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); // Prevent page scroll for Space
        toggleAccordion();
      }
    });
  });

  // Mobile Menu Logic
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('nav-open');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('nav-open')) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('nav-open');
        mobileToggle.focus();
      }
    });
  }

  // Dynamic Footer Copyright Year
  const copyrightYearElem = document.getElementById('current-year');
  if (copyrightYearElem) {
    copyrightYearElem.textContent = new Date().getFullYear();
  }

  // =========================================================================
  // ON-SITE SERVICE SEARCH & DIRECT DISCOVERY ENGINE
  // =========================================================================
  const servicesCatalog = [
    {
      title: "Orthodontic Braces",
      url: "/orthodontics/braces/",
      category: "Orthodontics",
      desc: "Fixed metal, ceramic, and self-ligating brackets for 3D tooth alignment and bite correction.",
      keywords: ["braces", "dental braces", "metal braces", "ceramic braces", "teeth straightening", "teeth alignment", "crooked teeth", "arch alignment", "adult braces", "orthodontic brackets"]
    },
    {
      title: "Tooth Debonding & Bracket Removal",
      url: "/orthodontics/braces/#debonding",
      category: "Orthodontics",
      desc: "Safe bracket removal, residual composite cleanup, enamel polishing, and retainer delivery.",
      keywords: ["debonding", "tooth debonding", "braces removal", "remove braces", "bracket debonding", "take off braces", "debonding teeth", "bracket removal", "resin cleanup", "retainers", "after braces"]
    },
    {
      title: "Orthodontics Discipline Hub",
      url: "/orthodontics/",
      category: "Orthodontics",
      desc: "Comprehensive dentofacial orthopedics, cephalometric planning, and malocclusion correction.",
      keywords: ["orthodontics", "orthodontist", "bite correction", "malocclusion", "overbite", "underbite", "crossbite", "open bite", "teeth spacing", "gap in teeth", "diastema"]
    },
    {
      title: "In-Clinic Teeth Whitening",
      url: "/cosmetic-dentistry/teeth-whitening/",
      category: "Cosmetic",
      desc: "Supervised laser enamel brightening and customized take-home maintenance bleaching trays.",
      keywords: ["whitening", "teeth whitening", "tooth whitening", "laser whitening", "zoom whitening", "bleaching", "yellow teeth", "stained teeth", "teeth brightening", "smile brightening"]
    },
    {
      title: "Zirconia Ceramic Crowns",
      url: "/cosmetic-dentistry/zirconia-crowns/",
      category: "Restorative",
      desc: "High-strength monolithic and layered biocompatible crowns for damaged or root-treated teeth.",
      keywords: ["zirconia", "zirconia crown", "dental crown", "tooth crown", "tooth cap", "ceramic crown", "porcelain crown", "metal free crown", "dental bridge", "zirconia bridge", "tooth cap cost"]
    },
    {
      title: "Dental Implants Discipline Hub",
      url: "/dental-implants/",
      category: "Implantology",
      desc: "Surgical implantology overview from single tooth replacement to full-arch restorations.",
      keywords: ["dental implants", "tooth implant", "implant", "implants", "missing teeth", "replace tooth", "artificial tooth", "implant dentist", "implant cost"]
    },
    {
      title: "All-on-4 Dental Implants",
      url: "/dental-implants/all-on-4-dental-implants/",
      category: "Implantology",
      desc: "Patented tilted posterior implant protocol providing fixed full-arch teeth without bone grafting.",
      keywords: ["all on 4", "all-on-4", "all on four", "4 implants", "fixed teeth in a day", "teeth in a day", "4 implant denture", "permanent denture"]
    },
    {
      title: "All-on-6 Dental Implants",
      url: "/dental-implants/all-on-6-dental-implants/",
      category: "Implantology",
      desc: "Six-implant architecture delivering optimized occlusal load distribution for permanent fixed bridges.",
      keywords: ["all on 6", "all-on-6", "all on six", "6 implants", "full arch bridge", "6 implant bridge", "full jaw implants"]
    },
    {
      title: "All-on-8 Dental Implants",
      url: "/dental-implants/all-on-8-dental-implants/",
      category: "Implantology",
      desc: "Segmented full-mouth rehabilitation utilizing 8 fixtures per arch for maximum functional bite force.",
      keywords: ["all on 8", "all-on-8", "all on eight", "8 implants", "segmented bridge", "full mouth reconstruction"]
    },
    {
      title: "Full-Mouth Dental Implants",
      url: "/dental-implants/full-mouth-dental-implants/",
      category: "Implantology",
      desc: "Comprehensive double-arch rehabilitation comparing fixed bridges and implant overdentures.",
      keywords: ["full mouth implants", "full mouth dental implants", "full mouth rehabilitation", "replace all teeth", "full mouth teeth", "edentulous", "complete tooth loss"]
    },
    {
      title: "Zygomatic Dental Implants",
      url: "/dental-implants/zygomatic-dental-implants/",
      category: "Specialist",
      desc: "Advanced graftless procedure anchoring extra-long implants into the cheekbone for severe bone loss.",
      keywords: ["zygomatic", "zygoma", "zygomatic implants", "severe bone loss", "no bone implants", "cheekbone implants", "maxillary atrophy"]
    },
    {
      title: "Bone Grafting & Sinus Augmentation",
      url: "/dental-implants/bone-grafting/",
      category: "Surgery",
      desc: "Alveolar ridge preservation, guided bone regeneration (GBR), and sinus lift procedures.",
      keywords: ["bone grafting", "bone graft", "sinus lift", "sinus augmentation", "socket preservation", "ridge augmentation", "gbr", "insufficient bone"]
    },
    {
      title: "Root Canal Treatment (RCT)",
      url: "/root-canal-treatment/",
      category: "Endodontics",
      desc: "Rotary endodontic therapy to remove infected pulpal tissue and save the natural tooth.",
      keywords: ["root canal", "rct", "root canal treatment", "tooth pain", "toothache", "nerve treatment", "pulp infection", "abscess", "save tooth", "swollen gum"]
    },
    {
      title: "Periodontal Therapy & Gum Care",
      url: "/periodontal-treatment/",
      category: "Periodontics",
      desc: "Diagnosis and therapy for gingivitis and periodontitis, deep scaling, root planing, and flap surgery.",
      keywords: ["gum treatment", "periodontal", "gum disease", "bleeding gums", "pyorrhea", "loose teeth", "deep cleaning", "scaling", "root planing", "srp", "gum surgery"]
    },
    {
      title: "Facial Aesthetics & Skin Services",
      url: "/facial-aesthetics/",
      category: "Aesthetics",
      desc: "HydraFacial, carbon laser facial, laser hair reduction, hair regrowth, and microneedling.",
      keywords: ["hydrafacial", "facial aesthetics", "skin treatment", "carbon laser", "laser hair removal", "hair regrowth", "microneedling", "dermaplaning", "medi spa", "skin clinic"]
    },
    {
      title: "International Patients Care",
      url: "/international-patients/",
      category: "Patient Care",
      desc: "Dedicated travel planning, airport transit logistics, lodging, and appointment coordination.",
      keywords: ["international patients", "dental tourism", "dental travel", "dental tourism india", "foreign patients", "airport transfer", "accommodation"]
    },
    {
      title: "Clinical Cases & Results",
      url: "/patient-cases/",
      category: "Case Gallery",
      desc: "Documented smile transformations and clinical cases with strict patient consent standards.",
      keywords: ["cases", "patient cases", "before and after", "results", "smile makeover", "case studies", "clinical results"]
    },
    {
      title: "Patient Resources & Guides",
      url: "/resources/",
      category: "Education",
      desc: "Clinical educational guides, procedure FAQs, and pre/post-operative patient instructions.",
      keywords: ["resources", "faq", "guides", "patient guides", "dental blog", "recovery instructions", "post op care"]
    },
    {
      title: "Contact & Clinic Location",
      url: "/contact/",
      category: "Contact",
      desc: "Schedule clinical consultations, find clinic transit directions, and view operating hours.",
      keywords: ["contact", "appointment", "schedule", "clinic address", "phone number", "directions", "location", "timings", "hours", "book visit"]
    }
  ];

  // Initialize all search instances on the page
  const searchWrappers = document.querySelectorAll('.service-search-wrapper');

  searchWrappers.forEach((wrapper) => {
    const input = wrapper.querySelector('.service-search-input');
    const dropdown = wrapper.querySelector('.service-search-dropdown');
    const clearBtn = wrapper.querySelector('.service-search-clear');
    if (!input || !dropdown) return;

    let selectedIndex = -1;
    let currentResults = [];

    const normalize = (str) => str.toLowerCase().trim().replace(/[-_]/g, ' ');

    const renderResults = (query) => {
      const q = normalize(query);
      if (!q) {
        dropdown.classList.remove('open');
        dropdown.innerHTML = '';
        if (clearBtn) clearBtn.classList.remove('visible');
        currentResults = [];
        selectedIndex = -1;
        return;
      }

      if (clearBtn) clearBtn.classList.add('visible');

      // Rank results: 
      // 1. Exact or prefix match on title
      // 2. Keyword exact match
      // 3. Keyword partial match / category match
      // 4. Description match
      const matched = [];

      servicesCatalog.forEach((item) => {
        const titleNorm = normalize(item.title);
        const catNorm = normalize(item.category);
        const descNorm = normalize(item.desc);

        let score = 0;
        let matchedTerm = '';

        if (titleNorm === q) {
          score += 100;
          matchedTerm = 'Exact title match';
        } else if (titleNorm.startsWith(q)) {
          score += 80;
          matchedTerm = `Matches title "${item.title}"`;
        } else if (titleNorm.includes(q)) {
          score += 60;
          matchedTerm = `Contains in title`;
        }

        item.keywords.forEach((kw) => {
          const kwNorm = normalize(kw);
          if (kwNorm === q) {
            score = Math.max(score, 90);
            matchedTerm = `Matches "${kw}"`;
          } else if (kwNorm.startsWith(q)) {
            score = Math.max(score, 70);
            matchedTerm = `Related to "${kw}"`;
          } else if (kwNorm.includes(q) || q.includes(kwNorm)) {
            score = Math.max(score, 50);
            matchedTerm = `Related to "${kw}"`;
          }
        });

        if (score === 0 && catNorm.includes(q)) {
          score = 40;
          matchedTerm = `Category: ${item.category}`;
        }

        if (score === 0 && descNorm.includes(q)) {
          score = 30;
          matchedTerm = 'Matches treatment description';
        }

        if (score > 0) {
          matched.push({ item, score, matchedTerm });
        }
      });

      // Sort by score descending
      matched.sort((a, b) => b.score - a.score);
      currentResults = matched.map(m => m.item);
      selectedIndex = -1;

      if (matched.length === 0) {
        const safeQuery = query.replace(/[&<>"']/g, (m) => ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;'
        }[m]));
        dropdown.innerHTML = `
          <div class="service-search-empty">
            <div class="service-search-empty-text">No direct treatment match for "${safeQuery}".</div>
            <p style="margin: 0 0 8px 0; font-size: 11px;">Browse our core clinical categories or contact our team for assistance:</p>
            <div class="service-search-tags">
              <a href="/orthodontics/braces/" class="service-search-tag">Braces & Debonding</a>
              <a href="/dental-implants/" class="service-search-tag">Dental Implants</a>
              <a href="/root-canal-treatment/" class="service-search-tag">Root Canal</a>
              <a href="/periodontal-treatment/" class="service-search-tag">Gum Disease</a>
              <a href="/cosmetic-dentistry/teeth-whitening/" class="service-search-tag">Teeth Whitening</a>
              <a href="/services/" class="service-search-tag" style="background: var(--color-accent-secondary); color: var(--color-accent-primary); font-weight: 600;">View All Services &rarr;</a>
            </div>
          </div>
        `;
      } else {
        dropdown.innerHTML = matched.map((m, idx) => `
          <a href="${m.item.url}" class="service-search-result-item" data-index="${idx}" role="option" id="search-opt-${idx}">
            <div class="service-search-result-header">
              <span class="service-search-result-title">${m.item.title}</span>
              <span class="service-search-result-badge">${m.item.category}</span>
            </div>
            <p class="service-search-result-desc">${m.item.desc}</p>
            <div class="service-search-result-match">${m.matchedTerm}</div>
          </a>
        `).join('');
      }

      dropdown.classList.add('open');
    };

    // Live typing
    input.addEventListener('input', (e) => {
      renderResults(e.target.value);
    });

    // Clear button
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        renderResults('');
        input.focus();
      });
    }

    // Keyboard navigation
    input.addEventListener('keydown', (e) => {
      if (!dropdown.classList.contains('open') || currentResults.length === 0) {
        if (e.key === 'ArrowDown') {
          renderResults(input.value || ' ');
        }
        return;
      }

      const items = dropdown.querySelectorAll('.service-search-result-item');
      if (!items.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        updateSelection(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        updateSelection(items);
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          items[selectedIndex].click();
        } else if (items.length > 0) {
          // Open the top ranked result directly on Enter
          e.preventDefault();
          items[0].click();
        }
      } else if (e.key === 'Escape') {
        dropdown.classList.remove('open');
        selectedIndex = -1;
      }
    });

    const updateSelection = (items) => {
      items.forEach((item, idx) => {
        if (idx === selectedIndex) {
          item.classList.add('selected');
          item.scrollIntoView({ block: 'nearest' });
          input.setAttribute('aria-activedescendant', `search-opt-${idx}`);
        } else {
          item.classList.remove('selected');
        }
      });
    };

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!wrapper.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });

    // Reopen when clicking input if query exists
    input.addEventListener('focus', () => {
      if (input.value.trim()) {
        renderResults(input.value);
      }
    });
  });
});

