document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }

  var header = document.querySelector(".navbar");
  if (header) {
    document.addEventListener("scroll", function () {
      header.style.borderBottomColor =
        window.scrollY > 10 ? "var(--border)" : "transparent";
    });
  }
});