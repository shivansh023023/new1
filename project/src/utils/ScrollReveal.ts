/**
 * Utility for scroll reveal animations
 */
const ScrollReveal = {
  init: () => {
    const revealElements = document.querySelectorAll('.reveal-item');
    
    const revealOnScroll = () => {
      const viewportHeight = window.innerHeight;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Adjust this value to change when elements become visible
        
        if (elementTop < viewportHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    // Initialize on load
    revealOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);
    
    // Add resize event listener to recalculate positions
    window.addEventListener('resize', revealOnScroll);
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('resize', revealOnScroll);
    };
  }
};

export default ScrollReveal;