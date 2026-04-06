// Animate skill/score bars when they scroll into view
const animateBars = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.skill-fill, .score-fill').forEach(bar => {
      const level = bar.dataset.level || bar.dataset.score;
      if (level) bar.style.width = level + '%';
    });
    observer.unobserve(entry.target);
  });
};

const observer = new IntersectionObserver(animateBars, { threshold: 0.3 });
document.querySelectorAll('#skills, #education').forEach(el => observer.observe(el));

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => navLinks.classList.toggle('open'));

// Close mobile nav on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});
