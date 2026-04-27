(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");
  const mobileBreakpoint = 809;

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
    if (event.key === "Escape" && header.classList.contains("is-menu-open")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("click", function (event) {
    if (!header.classList.contains("is-menu-open")) {
      return;
    }

    if (!header.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > mobileBreakpoint) {
      setMenuOpen(false);
    }
  });
})();
