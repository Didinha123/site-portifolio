// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('open');
    nav.classList.remove('open');
  });
});

// Header com fundo ao rolar
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// Link ativo conforme a seção visível
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(section => sectionObserver.observe(section));

// Animação de entrada dos elementos
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();
