new Swiper(".slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
          slidesPerView: 1,
      },
      480: {
          slidesPerView: 2,
      },
      992: {
          slidesPerView: 3,
      },
    },
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopedSlides: 3,
  });
  