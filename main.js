document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-card', { delay: 500 });
ScrollReveal().reveal('.banner', { delay: 500 });
ScrollReveal().reveal('.banner2', { delay: 500 });