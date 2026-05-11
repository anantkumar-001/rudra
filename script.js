document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     Navbar Scroll Effect
     ========================================================================== */
  const navbar = document.getElementById("navbar");
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 40) {
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
      } else {
        navbar.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
      }
    },
    { passive: true },
  );

  /* ==========================================================================
     Mobile Menu Toggle
     ========================================================================== */
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.querySelector(".navbar-nav");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      if (navLinks.style.display === "flex") {
        navLinks.style.display = "";
        navLinks.style.flexDirection = "";
        navLinks.style.position = "";
        navLinks.style.background = "";
        navLinks.style.padding = "";
        navLinks.style.top = "";
        navLinks.style.left = "";
        navLinks.style.width = "";
        navLinks.style.boxShadow = "";
      } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.background = "#FFFFFF";
        navLinks.style.padding = "20px 0";
        navLinks.style.top = "68px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
      }
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = "";
        }
      });
    });
  }

  /* ==========================================================================
     Hero Slider
     ========================================================================== */
  const heroSlides = document.querySelectorAll(".hero-slide");
  const heroDots = document.querySelectorAll(".hero-carousel-dots .dot");
  let currentHero = 0;
  let heroTimer;

  const goToHero = (index) => {
    heroSlides.forEach((s) => s.classList.remove("active"));
    heroDots.forEach((d) => d.classList.remove("active"));

    currentHero = index;

    if (heroSlides[currentHero])
      heroSlides[currentHero].classList.add("active");
    if (heroDots[currentHero]) heroDots[currentHero].classList.add("active");
  };

  const nextHero = () => {
    if (heroSlides.length === 0) return;
    goToHero((currentHero + 1) % heroSlides.length);
  };

  if (heroSlides.length > 0) {
    heroTimer = setInterval(nextHero, 4500);

    heroDots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        clearInterval(heroTimer);
        goToHero(idx);
        heroTimer = setInterval(nextHero, 4500);
      });
    });
  }

  /* ==========================================================================
     Product Slider ("For X")
     ========================================================================== */
  const productSlides = document.querySelectorAll(".product-slide");
  const prevBtns = document.querySelectorAll(".prev-btn");
  const nextBtns = document.querySelectorAll(".next-btn");
  let currentProduct = 0;

  const goToProduct = (index) => {
    productSlides.forEach((s) => s.classList.remove("active"));
    currentProduct = index;
    if (productSlides[currentProduct])
      productSlides[currentProduct].classList.add("active");
  };

  if (productSlides.length > 0) {
    prevBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        let newIdx = currentProduct - 1;
        if (newIdx < 0) newIdx = productSlides.length - 1;
        goToProduct(newIdx);
      });
    });

    nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        let newIdx = currentProduct + 1;
        if (newIdx >= productSlides.length) newIdx = 0;
        goToProduct(newIdx);
      });
    });
  }

  /* ==========================================================================
     About Section Tabs
     ========================================================================== */
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabPanes.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const target = document.getElementById(`tab-${btn.dataset.tab}`);
      if (target) target.classList.add("active");
    });
  });

  /* ==========================================================================
     Contact Form
     ========================================================================== */
  const contactForm = document.getElementById("contact-form");
  const formSuccess = document.getElementById("form-success");

  if (contactForm && formSuccess) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      contactForm.style.display = "none";
      formSuccess.style.display = "block";
    });
  }
});
