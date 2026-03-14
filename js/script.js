// Reserved for future enhancements
// Currently not required

document.addEventListener("DOMContentLoaded", () => {
  const impactSection = document.querySelector(".home-impact");
  if (!impactSection) return;

  const counters = impactSection.querySelectorAll(".impact-card h3");

  const animateCounter = (el) => {
    const originalText = el.textContent.trim();
    const isK = originalText.includes("K");
    const target = parseInt(originalText.replace(/\D/g, ""), 10);

    let current = 0;
    const increment = Math.ceil(target / 60);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = originalText;
        clearInterval(timer);
      } else {
        el.textContent = isK ? `${current}K+` : `${current}+`;
      }
    }, 20);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(counter => {
            if (!counter.dataset.animated) {
              counter.dataset.animated = "true";
              animateCounter(counter);
            }
          });
          obs.disconnect(); // ✅ run only once
        }
      });
    },
    { threshold: 0.6 } // starts when 60% visible
  );

  observer.observe(impactSection);
});
