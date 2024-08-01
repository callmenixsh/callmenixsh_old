document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('.animate-me');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          target.classList.add('in-view');
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.1 });
  
    observer.observe(target);
  });
  