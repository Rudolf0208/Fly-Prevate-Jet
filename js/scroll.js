document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollSmoother.create({
    smooth: 0.8,
    effects: false,
    smoothTouch: 0.1,
  });

  const header = document.querySelector('.header');
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    toggleClass: { className: "header--scrolled", targets: header },
  });




  document.querySelectorAll('.header__link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const smoother = ScrollSmoother.get();
        smoother.scrollTo(targetElement, true);
      }
    });
  }
  );

  const fadeIn = ".fade-in";
  const rightInFadeIn = ".right-fade-in";
  const zoomInFadeIn = ".zoom-in-fade-in";

  const welcome = ".welcome";
  const welcome__plane = ".welcome__plane";

  const mission = ".mission";

  const flights = ".flights";
  const flightsImages = ".flights__images";

  const booked = ".booked";
  const bookedImages = ".booked__img";

  const costs = ".costs";
  const costsImages = ".costs__images";

  const costsBottomLeft = ".costs__bottom-left";
  const costsBottomRight = ".costs__bottom-right";

  const applyEmpty = ".apply__empty";
  const applyCard = ".apply__card";

  const faq = ".faq";

  gsap.from(fadeIn, {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power2.ease",
  });

  gsap.from(rightInFadeIn, {
    x: 20,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power2.ease",
  });

  gsap.from(zoomInFadeIn, {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
    immediateRender: false,
  });

  gsap.from(welcome__plane, {
    x: -140,
    y: 50,
    duration: 1.5,
    ease: "power3.ease",
  });

  const welcomeTl = gsap.timeline({
    scrollTrigger: {
      trigger: welcome,
      start: "top top",
      end: "+=120%",
      scrub: true,
    },
  });

  welcomeTl
    .to(
      zoomInFadeIn,
      {
        scale: 0.8,
        opacity: 0,
        ease: "none",
      },
      0
    )
    .to(
      welcome__plane,
      {
        x: 140,
        y: -50,
      },
      0
    );

  welcomeTl.to(zoomInFadeIn, {
    scale: 1,
    opacity: 0,
    ease: "none",
  });

  gsap.utils.toArray(`${mission} > div`).forEach((item) => {
    gsap.fromTo(
      item,
      { y: 25, scale: 0.7, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 95%",
          end: "top 45%",
          scrub: true,
        },
      }
    );
  });

  gsap.from(`${flights} > .container`, {
    scale: 0.9,
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power2.ease",
  });

  gsap.from(flightsImages, {
    scale: 0.9,
    opacity: 0,
    x: 150,
    duration: 1.5,
    ease: "power3.ease",
  });

  gsap.fromTo(
    `${flights} > .container`,
    { scale: 0.9, opacity: 0, x: -100 },
    {
      scale: 1,
      opacity: 1,
      x: 0,
      ease: "none",
      scrollTrigger: {
        trigger: flights,
        start: "top 80%",
        end: "+=80%",
        scrub: true,
      },
    }
  );
  gsap.from(flightsImages, {
    scale: 0.9,
    x: -100,
    duration: 1.5,
    ease: "power3.ease",
  })
  

  gsap.fromTo(
    flightsImages,
    {
      scale: 0.9,
      x: 150,
    },
    {
      x: -300,
      opacity: 1,
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: flightsImages,
        start: "top 65%",
        end: "+=120%",
        scrub: true,
        immediateRender: false,
      },
    }
  );

  gsap.from(`${booked} > .booked__top`, {
    scale: 0.9,
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power2.ease",
  });


  gsap.fromTo(
    `${booked} > .booked__top`,
    { scale: 0.9, opacity: 0, x: 100 },
    {
      scale: 1,
      opacity: 1,
      x: 0,
      ease: "none",
      scrollTrigger: {
        trigger: booked,
        start: "top 80%",
        end: "+=80%",
        scrub: true,
      },
    }
  );
  gsap.from(bookedImages, {
    scale: 0.9,
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: "power3.ease",
  })

  gsap.fromTo(
    bookedImages,
    {
      scale: 0.9,
      x: -100,
    },
    {
      x: 300,
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: bookedImages,
        start: "top 65%",
        end: "+=120%",
        scrub: true,
        immediateRender: false,
      },
    }
  );

  gsap.from(`${booked} .booked__bottom`, {
    scale: 0.9,
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power2.ease",
  });

  gsap.fromTo(
    `${booked} .booked__bottom`,
    { scale: 0.9, opacity: 0, x: -100 },
    {
      scale: 1,
      opacity: 1,
      x: 0,
      ease: "none",
      scrollTrigger: {
        trigger: `${booked} .booked__bottom`,
        start: "top 82%",
        end: "top 22%",
        scrub: true,
        immediateRender: false,
      },
    }
  );

  gsap.from(`${costs} ${costsBottomRight}`, {
    scale: 0.9,
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power2.ease",
  });

  gsap.fromTo(
    `${costs} ${costsBottomRight}`,
    { scale: 0.9, opacity: 0, x: 100 },
    {
      scale: 1,
      opacity: 1,
      x: 0,
      ease: "none",
      scrollTrigger: {
        trigger: `${costs} ${costsBottomRight}`,
        start: "top 82%",
        end: "top 22%",
        scrub: true,
        immediateRender: false,
      },
    }
  );

  gsap.from(costsImages, {
    scale: 0.9,
    opacity: 0,
    x: -150,
    y: -50,
    duration: 1.5,
    ease: "power3.ease",
  })

  gsap.fromTo(
    costsImages,
    {
      scale: 0.9,
      x: -100,
      y: -50,
    },
    {
      x: 150,
      y: 50,
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: costsImages,
        start: "top 65%",
        end: "+=170%",
        scrub: true,
        immediateRender: false,
      },
    }
  );

  gsap.from(`${costs} ${costsBottomLeft}`, {
    scale: 0.9,
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power2.ease",
  });

  gsap.fromTo(
    `${costs} ${costsBottomLeft}`,
    { scale: 0.9, opacity: 0, x: -100 },
    {
      scale: 1,
      opacity: 1,
      x: 0,
      ease: "none",
      scrollTrigger: {
        trigger: `${costs} ${costsBottomLeft}`,
        start: "top 82%",
        end: "top 22%",
        scrub: true,
        immediateRender: false,
      },
    }
  );

 gsap.utils.toArray(`${applyEmpty}, ${applyCard}`).forEach((item) => {
    gsap.fromTo(
      item,
      { y: 16, scale: 0.85, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "top 25%",
          scrub: true,
          immediateRender: false,
          invalidateOnRefresh: true,
        },
      }
    );
  });

  gsap.fromTo(
    faq,
    { y: 16, scale: 0.85, opacity: 0 },
    {
      y: 0,
      scale: 1,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: faq,
        start: "top 95%",
        end: "+=100%",
        scrub: true,
        immediateRender: false,
        invalidateOnRefresh: true,
      },
    }
  );

  gsap.set(
    [
      welcome,
      welcome__plane,
      `${flights} > .container`,
      flightsImages,
      `${booked} > .booked__top`,
      `${booked} .booked__bottom}`,
      bookedImages,
      fadeIn,
      rightInFadeIn,
      zoomInFadeIn,
      `${costs} ${costsBottomLeft}`,
      `${costs} ${costsBottomRight}`,
      costsImages,
      `${applyEmpty}, ${applyCard}`,
      faq,
    ],
    {
      force3D: true,
      transformPerspective: 1000,
      backfaceVisibility: "hidden",
    }
  );

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});


