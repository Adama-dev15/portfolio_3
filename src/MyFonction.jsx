(function () {
  /* "use strict"; */

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /**
   * Function to handle click on mobile nav toggle
   */
  const handleMobileNavToggle = (e) => {
    select("#navbar").classList.toggle("navbar-mobile");
    e.currentTarget.classList.toggle("bi-list");
    e.currentTarget.classList.toggle("bi-x");
  };

  /**
   * Function to handle click on nav links
   */
  const handleNavLinksClick = (e) => {
    const sectionId = e.currentTarget.getAttribute("href");
    const section = select(sectionId);

    if (section) {
      e.preventDefault();

      const navbar = select("#navbar");
      const header = select("#header");
      const sections = select("section", true);
      const navlinks = select("#navbar .nav-link", true);

      navlinks.forEach((item) => {
        item.classList.remove("active");
      });

      e.currentTarget.classList.add("active");

      if (navbar.classList.contains("navbar-mobile")) {
        navbar.classList.remove("navbar-mobile");
        const navbarToggle = select(".mobile-nav-toggle");
        navbarToggle.classList.toggle("bi-list");
        navbarToggle.classList.toggle("bi-x");
      }

      if (sectionId === "#header") {
        header.classList.remove("header-top");
        sections.forEach((item) => {
          item.classList.remove("section-show");
        });
        return;
      }

      if (!header.classList.contains("header-top")) {
        header.classList.add("header-top");
        setTimeout(function () {
          sections.forEach((item) => {
            item.classList.remove("section-show");
          });
          section.classList.add("section-show");
        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove("section-show");
        });
        section.classList.add("section-show");
      }

      scrollto(sectionId);
    }
  };

  /**
   * Activate/show sections on load with hash links
   */
  const handleHashLinksOnLoad = () => {
    if (window.location.hash) {
      const initial_nav = select(window.location.hash);

      if (initial_nav) {
        const header = select("#header");
        const navlinks = select("#navbar .nav-link", true);

        header.classList.add("header-top");

        navlinks.forEach((item) => {
          if (item.getAttribute("href") === window.location.hash) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });

        setTimeout(function () {
          initial_nav.classList.add("section-show");
        }, 350);

        scrollto(window.location.hash);
      }
    }
  };

  /**
   * Initialization function
   */
  const init = () => {
    // Attach click event to mobile nav toggle
    on("click", ".mobile-nav-toggle", handleMobileNavToggle);

    // Attach click event to nav links
    on("click", "#navbar .nav-link", handleNavLinksClick, true);

    // Handle hash links on load
    window.addEventListener("load", handleHashLinksOnLoad);
  };

  // Initialize the script when the DOM content is loaded
  document.addEventListener("DOMContentLoaded", init);
})();
