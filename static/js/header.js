(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");

  if (!header || !toggle || !nav) {
    return;
  }

  function setMenuOpen(open) {
    header.classList.toggle("is-menu-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    const isOpen = header.classList.contains("is-menu-open");
    setMenuOpen(!isOpen);
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenuOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 680) {
      setMenuOpen(false);
    }
  });
})();
