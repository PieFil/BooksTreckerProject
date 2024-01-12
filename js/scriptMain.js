document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;
  
    function setInitialClasses() {
      items[0].classList.add('clear');
      items[1].classList.add('clear');
      items[2].classList.add('clear');
    }
  
    function updateCarousel() {
      for (let i = 0; i < totalItems; i++) {
        const distanceToCenter = Math.abs(currentIndex - i);
  
        if (distanceToCenter === 1) {
          items[i].classList.add('clear');
        } else {
          items[i].classList.remove('clear');
        }
      }
    }
  
    function rotateCarousel() {
      const newPosition = -currentIndex * (100 / 3) + '%';
      carousel.style.transform = 'translateX(' + newPosition + ')';
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
      rotateCarousel();
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel();
      rotateCarousel();
    }
  
    setInitialClasses();
    updateCarousel();
  
    document.querySelector('.carousel-container').addEventListener('click', function (event) {
      const width = document.documentElement.clientWidth;
      const clickX = event.clientX;
  
      if (clickX < width / 2) {
        prevSlide();
      } else {
        nextSlide();
      }
    });
  });
  
//скачивание файла
  function downloadFile() {
    var filePath = 'D:\\BooksTreckerProjectM\\src\\downlodeFile.png';
  
    var link = document.createElement('a');
    link.href = filePath;
  
    link.download = 'downlodeFile.png';
  
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }
  