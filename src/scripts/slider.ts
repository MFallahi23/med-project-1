const initSlider = async () => {
  // Dynamically import Swiper with await
  const { default: Swiper } = await import("swiper");
  const { Pagination, Navigation } = await import("swiper/modules");

  // Initialize Swiper
  new Swiper(".swiper", {
    modules: [Pagination, Navigation],
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      // Add navigation config
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

initSlider();
