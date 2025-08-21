// Počkať, kým sa načíta celý DOM
document.addEventListener("DOMContentLoaded", function () {
  // Nájde všetky šípky v menu
  const arrows = document.querySelectorAll(".menu-item .arrow");
  // Pridať event listener na každú šípku
  arrows.forEach(arrow => {
    arrow.addEventListener("click", function (event) {
      // Zastaví propagáciu, aby sa neaktivovali iné klikacie prvky
      event.stopPropagation();
      const menuItem = event.target.closest(".menu-item");
      // Prepína triedu "open" na aktuálnej položke
      menuItem.classList.toggle("open");
      // Zavrie všetky ostatné submenu
      document.querySelectorAll(".menu-item").forEach(item => {
        if (item !== menuItem) {
          item.classList.remove("open");
        }
      });
    });
  });
  // Zavrie všetky submenu pri kliknutí mimo menu
  document.addEventListener("click", function () {
    document.querySelectorAll(".menu-item").forEach(item => {
      item.classList.remove("open");
    });
  });
});
  // Po načítaní stránky pridá triedu 'loaded'
  window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
  });
  // Pri kliknutí na odkaz najprv spustí animáciu fade-out
  document.querySelectorAll('a').forEach(link => {
    // Iba ak je to interný odkaz
    if (link.hostname === window.location.hostname) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.href;
        document.body.classList.remove('loaded');
        setTimeout(() => {
          window.location.href = href;
        }, 100); // Trvanie fade-out animácie
      });
    }
  });

