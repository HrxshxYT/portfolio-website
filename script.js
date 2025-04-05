document.addEventListener('DOMContentLoaded', () => {
  const fadeSections = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  fadeSections.forEach(section => observer.observe(section));
});
