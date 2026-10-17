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
});
