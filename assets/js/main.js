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

  /* ---- Filtres projets ---- */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var projectCards = document.querySelectorAll(".project-card[data-category]");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.getAttribute("data-filter");
      filterBtns.forEach(function (b) { b.classList.remove("is-active"); b.setAttribute("aria-pressed", "false"); });
      btn.classList.add("is-active"); btn.setAttribute("aria-pressed", "true");
      projectCards.forEach(function (card) {
        var cat = card.getAttribute("data-category");
        var ok = f === "all" || cat === f;
        card.classList.toggle("filtered-out", !ok);
      });
    });
  });

  /* ---- Bouton retour-haut ---- */
  var toTop = document.getElementById("to-top");
  if (toTop) {
    var onScroll = function () {
      toTop.classList.toggle("is-visible", (window.scrollY || document.documentElement.scrollTop) > 480);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});