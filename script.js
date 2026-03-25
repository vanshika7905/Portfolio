// Typing Animation
const typingElement = document.getElementById('typing-animation');
const texts = ['Engineer', 'YouTuber', 'Teacher'];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[index];
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
    setTimeout(typeEffect, 200);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}
typeEffect();

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Update Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();

// Counter Animation
const counters = [
  { element: document.getElementById('counter1'), target: 20, current: 0 },
  { element: document.getElementById('counter2'), target: 30, current: 0 },
  { element: document.getElementById('counter3'), target: 1000, current: 0 },
  { element: document.getElementById('counter4'), target: 500, current: 0 }
];
function animateCounters() {
  counters.forEach(counter => {
    if (counter.current < counter.target) {
      counter.current += Math.ceil(counter.target / 50);
      if (counter.current > counter.target) counter.current = counter.target;
      counter.element.textContent = counter.current;
    }
  });
  requestAnimationFrame(animateCounters);
}
animateCounters();