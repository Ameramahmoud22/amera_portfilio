/* ============================================================
   AMERA ELBASSAL — PORTFOLIO SCRIPT
   ============================================================ */

'use strict';

/* ── 1. CURSOR GLOW ── */
const cursorGlow = document.getElementById('cursorGlow');

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
});

document.addEventListener('mouseleave', () => {
  cursorGlow.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
  cursorGlow.style.opacity = '1';
});


/* ── 2. NAVBAR — scroll state + active section ── */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function onScroll() {
  // Scrolled class for blur/bg effect
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active nav link
  let current = '';
  sections.forEach((section) => {
    const top = section.offsetTop - 110;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on load


/* ── 3. HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close on nav link click (mobile)
mobileNav.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});


/* ── 4. TYPEWRITER EFFECT ── */
const roles = [
  'scalable REST APIs',
  'clean backend systems',
  'ASP.NET Core services',
  'Django applications',
  'secure auth flows',
];

let roleIndex = 0;
let charIndex  = 0;
let isDeleting = false;
const roleEl   = document.getElementById('roleText');

function typewrite() {
  if (!roleEl) return;

  const current = roles[roleIndex];

  if (isDeleting) {
    roleEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    roleEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 50 : 90;

  if (!isDeleting && charIndex === current.length) {
    delay = 1800;           // pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting  = false;
    roleIndex   = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(typewrite, delay);
}

typewrite();


/* ── 5. INTERSECTION OBSERVER — fade-up + timeline ── */
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
};

// Generic fade-up
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-up, .skill-category, .project-card, .edu-card')
  .forEach((el) => {
    el.classList.add('fade-up');
    fadeObserver.observe(el);
  });

// Timeline items
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      timelineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item').forEach((el) => {
  timelineObserver.observe(el);
});


/* ── 6. SKILL BARS — animate on scroll ── */
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach((bar) => {
        const target = bar.getAttribute('data-width');
        bar.style.width = target + '%';
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) barObserver.observe(skillsSection);


/* ── 7. SKILL CATEGORIES — staggered entrance ── */
const catObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      catObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.skill-category').forEach((el) => {
  catObserver.observe(el);
});


/* ── 8. CONTACT FORM ── */
const contactForm = document.getElementById('contactForm');
const formNote    = document.getElementById('formNote');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = contactForm.name.value.trim();
    const email   = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      showNote('Please fill in all required fields.', 'error');
      shakeForm();
      return;
    }

    if (!isValidEmail(email)) {
      showNote('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate sending (no backend yet)
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

    setTimeout(() => {
      showNote('✓ Thanks! Your message has been received. I\'ll get back to you soon.', 'success');
      contactForm.reset();
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    }, 1600);
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNote(msg, type) {
  if (!formNote) return;
  formNote.textContent = msg;
  formNote.style.color = type === 'success' ? '#6ee7b7' : '#f87171';
  setTimeout(() => { formNote.textContent = ''; }, 5000);
}

function shakeForm() {
  contactForm.style.animation = 'shake 0.4s ease';
  setTimeout(() => { contactForm.style.animation = ''; }, 400);
}

// Inject shake keyframe
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    20%      { transform: translateX(-8px); }
    40%      { transform: translateX(8px); }
    60%      { transform: translateX(-6px); }
    80%      { transform: translateX(6px); }
  }
`;
document.head.appendChild(shakeStyle);


/* ── 9. SMOOTH SCROLL for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


/* ── 10. STATS COUNTER ANIMATION ── */
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach((el) => {
        animateCount(el);
      });
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

const aboutSection = document.querySelector('.about');
if (aboutSection) statObserver.observe(aboutSection);

function animateCount(el) {
  const text   = el.textContent;               // e.g. "20+"
  const num    = parseInt(text);               // 20
  const suffix = text.replace(/[0-9]/g, '');  // "+"
  const duration = 1200;
  const steps    = 50;
  const increment = num / steps;
  let current = 0;
  let step    = 0;

  const timer = setInterval(() => {
    step++;
    current = Math.round(increment * step);
    el.textContent = (step < steps ? current : num) + suffix;
    if (step >= steps) clearInterval(timer);
  }, duration / steps);
}


/* ── 11. PROJECT CARDS — subtle tilt on hover ── */
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect   = card.getBoundingClientRect();
    const x      = e.clientX - rect.left;
    const y      = e.clientY - rect.top;
    const midX   = rect.width  / 2;
    const midY   = rect.height / 2;
    const rotateX = ((y - midY) / midY) * -4;
    const rotateY = ((x - midX) / midX) *  4;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.4s ease';
    setTimeout(() => { card.style.transition = ''; }, 400);
  });
});


/* ── 12. ACTIVE SECTION HIGHLIGHT — section progress glow ── */
function updateSectionGlow() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.6 && rect.bottom > 0;
    if (inView) {
      section.style.setProperty('--section-visible', '1');
    }
  });
}

window.addEventListener('scroll', updateSectionGlow, { passive: true });


/* ── 13. PAGE LOAD — entrance animation ── */
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });

  // Hero content stagger
  const heroChildren = document.querySelectorAll(
    '.hero-badge, .hero-title, .hero-role, .hero-desc, .hero-actions, .hero-socials'
  );
  heroChildren.forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`;
    setTimeout(() => {
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
    }, 100 + i * 100);
  });
});


/* ── 14. BACK-TO-TOP on logo click ── */
document.querySelectorAll('a[href="#home"]').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
