document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     Navbar Scroll Effect
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ==========================================================================
     Mobile Menu Toggle
     ========================================================================== */
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  // Basic toggle just in case
  if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      // In a full implementation, you'd toggle a class on navLinks to show/hide
      // For now, it's just a placeholder as per minimal requirements
    });
  }

  /* ==========================================================================
     Scroll Animations (Intersection Observer)
     ========================================================================== */
  const scrollElements = document.querySelectorAll('.scroll-animate');
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('in-view');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.1)) {
        displayScrollElement(el);
      }
    });
  };
  
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
  
  // Trigger once on load
  handleScrollAnimation();

  /* ==========================================================================
     About Section Tabs
     ========================================================================== */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      
      // Add active to clicked
      btn.classList.add('active');
      const targetId = `tab-${btn.dataset.tab}`;
      document.getElementById(targetId).classList.add('active');
    });
  });

  /* ==========================================================================
     Products Carousel
     ========================================================================== */
  const productsData = [
    {
      title: "Cold-Pressed Mustard Oil",
      desc: "Extracted using traditional cold-press method, our mustard oil is full-flavoured, pungent, and 100% natural.",
      img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1500&auto=format&fit=crop"
    },
    {
      title: "Stone-Ground Wheat Flour",
      desc: "Milled using traditional stone-grinding techniques that preserve natural nutrients and give authentic taste.",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1472&auto=format&fit=crop"
    },
    {
      title: "Premium Quality Pulses",
      desc: "Hand-sorted and cleaned pulses — chana, moong, masoor, and more — free from dust and impurities.",
      img: "assets/images/pulses.jpg"
    },
    {
      title: "Hand-Picked Spices",
      desc: "Sourced directly from spice farms, dried naturally, and packed without artificial preservatives.",
      img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1470&auto=format&fit=crop"
    }
  ];

  let currentProductIndex = 0;
  const featBg = document.querySelector('.featured-bg');
  const featTitle = document.getElementById('feat-title');
  const featDesc = document.getElementById('feat-desc');
  const dots = document.querySelectorAll('.dot');
  const thumbs = document.querySelectorAll('.thumb-card');
  const prevProdBtn = document.getElementById('prev-prod');
  const nextProdBtn = document.getElementById('next-prod');

  const updateProductCarousel = (index) => {
    // Update main display
    featBg.style.backgroundImage = `url('${productsData[index].img}')`;
    featTitle.textContent = productsData[index].title;
    featDesc.textContent = productsData[index].desc;
    
    // Update dots
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
    
    // Update thumbs
    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[index].classList.add('active');
    
    currentProductIndex = index;
  };

  prevProdBtn.addEventListener('click', () => {
    let newIndex = currentProductIndex - 1;
    if (newIndex < 0) newIndex = productsData.length - 1;
    updateProductCarousel(newIndex);
  });

  nextProdBtn.addEventListener('click', () => {
    let newIndex = currentProductIndex + 1;
    if (newIndex >= productsData.length) newIndex = 0;
    updateProductCarousel(newIndex);
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => updateProductCarousel(idx));
  });

  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => updateProductCarousel(idx));
  });

  /* ==========================================================================
     Testimonials Slider
     ========================================================================== */
  const testimonialsData = [
    {
      quote: "\"Before switching to Rudra Agro Mills' products, I used to worry about adulteration. Now, the mustard oil I get from GIRI is pure, aromatic, and my family loves it.\"",
      name: "Priya S.",
      role: "Homemaker, Jaipur"
    },
    {
      quote: "\"The stone-ground wheat flour from Rudra Agro Mills makes the softest rotis. It reminds me of the authentic taste from my childhood village.\"",
      name: "Ramesh T.",
      role: "Restaurant Owner, Delhi"
    },
    {
      quote: "\"As a nutritionist, I always recommend unpolished pulses. GIRI's premium pulses are exceptionally clean and retain their natural goodness.\"",
      name: "Sunita K.",
      role: "Nutritionist, Gurgaon"
    },
    {
      quote: "\"We have been sourcing spices from Rudra Agro Mills for our wholesale business. The quality and aroma are unmatched in the market.\"",
      name: "Mohanlal G.",
      role: "Wholesale Buyer, Bhiwadi"
    }
  ];

  let currentTestIndex = 0;
  const testQuote = document.getElementById('test-quote');
  const testCounter = document.getElementById('test-counter');
  const avatarWraps = document.querySelectorAll('.avatar-wrap');
  const prevTestBtn = document.getElementById('prev-test');
  const nextTestBtn = document.getElementById('next-test');

  const updateTestimonial = (index) => {
    // Basic fade effect
    testQuote.style.opacity = 0;
    
    setTimeout(() => {
      testQuote.textContent = testimonialsData[index].quote;
      testQuote.style.opacity = 1;
    }, 300);

    testCounter.textContent = `${index + 1}/4`;
    
    avatarWraps.forEach(a => a.classList.remove('active'));
    avatarWraps[index].classList.add('active');
    
    currentTestIndex = index;
  };

  prevTestBtn.addEventListener('click', () => {
    let newIndex = currentTestIndex - 1;
    if (newIndex < 0) newIndex = testimonialsData.length - 1;
    updateTestimonial(newIndex);
  });

  nextTestBtn.addEventListener('click', () => {
    let newIndex = currentTestIndex + 1;
    if (newIndex >= testimonialsData.length) newIndex = 0;
    updateTestimonial(newIndex);
  });

  avatarWraps.forEach((wrap, idx) => {
    wrap.addEventListener('click', () => updateTestimonial(idx));
  });

});
