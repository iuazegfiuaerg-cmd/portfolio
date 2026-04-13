// ========== CURSOR ==========
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; 
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .project-card, .hscroll-card, .discipline-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    ring.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    ring.classList.remove('hover');
  });
});

// ========== MENU ==========
const menuBtn = document.getElementById('menuBtn');
const fullmenu = document.getElementById('fullmenu');
const nav = document.getElementById('mainNav');

if (menuBtn && fullmenu && nav) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    fullmenu.classList.toggle('open');
    nav.classList.toggle('dark');
  });

  fullmenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuBtn.classList.remove('open');
      fullmenu.classList.remove('open');
      nav.classList.remove('dark');
    });
  });
}

// ========== NAV DARK ON HERO ==========
const hero = document.getElementById('hero');
if (hero) {
  const observer1 = new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !fullmenu.classList.contains('open')) {
      nav.classList.add('dark');
    } else {
      nav.classList.remove('dark');
      if (fullmenu && fullmenu.classList.contains('open')) nav.classList.add('dark');
    }
  }, { threshold: 0.1 });
  observer1.observe(hero);
  nav.classList.add('dark');
}

// ========== HERO AUTO-ROTATE BACKGROUNDS ==========
const heroImgs = [
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&q=80',
  'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?w=1800&q=80',
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80'
];

const heroImg = document.getElementById('heroImg');
const heroCounter = document.getElementById('heroCounter');

if (heroImg && heroCounter) {
  let current = 0;
  setInterval(() => {
    current = (current + 1) % heroImgs.length;
    heroImg.style.opacity = '0';
    setTimeout(() => {
      heroImg.src = heroImgs[current];
      heroImg.onload = () => { heroImg.style.opacity = '0.35'; };
      heroCounter.textContent = String(current + 1).padStart(2, '0') + ' / 0' + heroImgs.length;
    }, 600);
  }, 4500);
}

// ========== SCROLL REVEAL ==========
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = (i % 4) * 0.1 + 's';
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(r => obs.observe(r));

// ========== PAGE TRANSITION ON LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========== SMOOTH NUMBER COUNTER ==========
function animateCount(el, target, suffix = '') {
  let start = 0;
  const dur = 2000;
  const step = t => {
    start = t;
    const run = ts => {
      const progress = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target) + suffix;
      if (progress < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  };
  requestAnimationFrame(step);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const nums = e.target.querySelectorAll('.stat-number');
      nums.forEach(n => {
        const val = parseInt(n.textContent);
        const suffix = n.textContent.includes('+') ? '+' : '';
        animateCount(n, val, suffix);
      });
      statObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

const statSection = document.querySelector('.statement-cols');
if (statSection) statObserver.observe(statSection);

// ========== TICKER DUPLICATION ==========
const tickerInner = document.getElementById('ticker');
if (tickerInner) {
  tickerInner.innerHTML += tickerInner.innerHTML;
}
