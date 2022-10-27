const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    e.target.classList.toggle("show", e.isIntersecting);
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((e) => observer.observe(e));
