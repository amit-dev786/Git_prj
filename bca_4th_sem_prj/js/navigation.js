/**
 * Mobile navigation toggle for the site header.
 */
(function () {
    "use strict";

    function initNavigation() {
        var menuToggle = document.querySelector(".site-header__menu-toggle");
        var navMenu = document.querySelector(".site-header__nav");
        var navLinks = document.querySelectorAll(".site-header__link");

        if (!menuToggle || !navMenu) {
            return;
        }

        menuToggle.addEventListener("click", function () {
            var isOpen = navMenu.classList.toggle("is-open");
            menuToggle.classList.toggle("is-active", isOpen);
            menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

            navLinks.forEach(function (link) {
                link.classList.toggle("is-active", isOpen);
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        if (typeof window.injectSiteLayout === "function") {
            window.injectSiteLayout();
        }

        initNavigation();
    });
})();
