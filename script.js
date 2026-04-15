// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.setAttribute('data-theme', 'dark');
  themeToggle.querySelector('i').className = 'fas fa-moon';
}

themeToggle.addEventListener('click', () => {
  const isDark = body.getAttribute('data-theme') === 'dark';
  body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeToggle.querySelector('i').className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Navbar Mobile Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
  }
});

// Fade-in Animations on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe sections and cards
document.querySelectorAll('.section, .skill-card, .project-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Contact Form Submission (WhatsApp fallback)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector('textarea').value;
  
  const whatsappUrl = `https://wa.me/+919876543210?text=Hi%20Nandini,%20${encodeURIComponent(name)}%20(${email}):%20${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  
  // Reset form
  contactForm.reset();
});

// Floating Hearts Animation (scoped to projects, no footer)
function createHeart() {
  const heart = document.createElement('div');
  heart.innerHTML = '💖';
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
  const projectsSection = document.querySelector('#projects');
  if (projectsSection) {
    projectsSection.appendChild(heart);
  }
  
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 5000);

// **Fully Working Projects**
// Blog Demo
document.addEventListener('click', (e) => {
  if (e.target.textContent === 'Live Demo' && e.target.closest('.project-card')?.querySelector('h3').textContent === 'English Blog Platform') {
    e.preventDefault();
    const modal = document.getElementById('blog-modal');
    modal.style.display = 'flex';
    // Toggle posts demo
    const postsBtn = modal.querySelector('.toggle-posts');
    const postsList = modal.querySelector('.posts-list');
    postsBtn.onclick = () => postsList.classList.toggle('active');
  }
});

// Poetry Generator
document.addEventListener('click', (e) => {
  if (e.target.textContent === 'Live Demo' && e.target.closest('.project-card')?.querySelector('h3').textContent === 'Poetry Generator App') {
    e.preventDefault();
    const modal = document.getElementById('poetry-modal');
    modal.style.display = 'flex';
  }
});

const poetryLines = [
  'Whispers of the wind carry secrets untold',
  'Moonlight dances on petals so soft',
  'Stars weave dreams in the velvet night',
  'Rivers sing lullabies to ancient stones'
];

function generatePoem() {
  const modal = document.getElementById('poetry-modal');
  const poemEl = modal.querySelector('.generated-poem');
  const lines = [];
  for (let i = 0; i < 4; i++) {
    lines.push(poetryLines[Math.floor(Math.random() * poetryLines.length)]);
  }
  poemEl.textContent = lines.join('\n\n');
}

document.querySelector('.generate-btn')?.addEventListener('click', generatePoem);

// Resume Builder
document.addEventListener('click', (e) => {
  if (e.target.textContent === 'Live Demo' && e.target.closest('.project-card')?.querySelector('h3').textContent === 'Resume Builder') {
    e.preventDefault();
    const modal = document.getElementById('resume-modal');
    modal.style.display = 'flex';
  }
});

document.querySelector('.preview-btn')?.addEventListener('click', function() {
  const name = document.querySelector('.resume-name').value || 'Nandini';
  const skills = document.querySelector('.resume-skills').value || 'Web Dev, Writing';
  const preview = document.querySelector('.resume-preview');
  preview.innerHTML = `
    <h3>${name}</h3>
    <p>Skills: ${skills}</p>
    <p>Professional Portfolio Developer</p>
  `;
});

// Close modals
document.querySelectorAll('.close-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.project-modal').forEach(modal => modal.style.display = 'none');
  });
});

// Navbar Active Link on Scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  document.querySelectorAll('.nav-menu a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
});
