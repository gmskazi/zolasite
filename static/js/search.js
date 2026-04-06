(function () {
  const modal = document.getElementById("search-modal");
  const openBtn = document.getElementById("open-search");
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");

  if (!modal || !openBtn || !input || !results) {
    return;
  }

  const closeButtons = modal.querySelectorAll("[data-close-search]");
  const rawIndex = window.searchIndex;
  const loadedIndex =
    rawIndex && window.elasticlunr ? elasticlunr.Index.load(rawIndex) : null;

  if (!loadedIndex) {
    return;
  }

  const docs = (loadedIndex.documentStore && loadedIndex.documentStore.docs) || {};

  function openSearch() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    input.focus();
  }

  function closeSearch() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    input.value = "";
    results.innerHTML = "";
  }

  function renderResults(matches) {
    results.innerHTML = "";

    if (!matches.length) {
      const empty = document.createElement("li");
      empty.textContent = "No results";
      empty.className = "search-empty";
      results.appendChild(empty);
      return;
    }

    matches.slice(0, 12).forEach((match) => {
      const page = docs[match.ref];
      if (!page) {
        return;
      }

      let resultHref = match.ref;
      try {
        const parsed = new URL(match.ref, window.location.origin);
        resultHref = parsed.pathname + parsed.search + parsed.hash;
      } catch (error) {
        resultHref = match.ref;
      }

      const item = document.createElement("li");
      const link = document.createElement("a");
      const text = document.createElement("p");
      link.href = resultHref;
      link.textContent = page.title;

      if (page.body) {
        text.textContent = page.body.slice(0, 180);
      }

      item.appendChild(link);
      if (text.textContent) {
        item.appendChild(text);
      }
      results.appendChild(item);
    });
  }

  openBtn.addEventListener("click", openSearch);

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeSearch);
  });

  input.addEventListener("input", function () {
    const query = input.value.trim();
    if (!query) {
      results.innerHTML = "";
      return;
    }

    const matches = loadedIndex.search(query, {
      fields: {
        title: { boost: 4 },
        body: { boost: 1 },
      },
      expand: true,
    });

    renderResults(matches);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeSearch();
    }
  });
})();
