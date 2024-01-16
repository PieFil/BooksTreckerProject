document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  let currentIndex = 0;

  function showSlide(index) {
      currentIndex = index;
      const translateValue = -index * 100 + '%';
      carousel.style.transform = 'translateX(' + translateValue + ')';
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % 5; // Измените 5 на общее количество слайдов
      showSlide(currentIndex);
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + 5) % 5; // Измените 5 на общее количество слайдов
      showSlide(currentIndex);
  }

  // Обработка свайпов для мобильных устройств
  let touchStartX = 0;
  let touchEndX = 0;

  document.querySelector('.carousel-container').addEventListener('touchstart', function (event) {
      touchStartX = event.changedTouches[0].screenX;
  });

  document.querySelector('.carousel-container').addEventListener('touchend', function (event) {
      touchEndX = event.changedTouches[0].screenX;

      if (touchEndX < touchStartX) {
          nextSlide();
      } else if (touchEndX > touchStartX) {
          prevSlide();
      }
  });

  // Поддержка прокрутки колеса мыши
  document.querySelector('.carousel-container').addEventListener('wheel', function (event) {
      if (event.deltaY > 0) {
          nextSlide();
      } else {
          prevSlide();
      }
  });
});