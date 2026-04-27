document.addEventListener("DOMContentLoaded", function () {

let current = 0;
const slides = document.querySelectorAll('.vitrina-slide');

function showSlide(index) {
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');
  current = index;
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

let interval = setInterval(nextSlide, 5000);

// click miniaturas - MEJORADO: cambio de slide + abrir enlace en nueva pestaña
document.querySelectorAll('.item img').forEach(img => {
  img.addEventListener('click', function(event) {
    const index = parseInt(img.dataset.slide);
    const url = img.dataset.url;

    if (!isNaN(index)) {
      // Cambiar de slide
      showSlide(index);
      clearInterval(interval);
      interval = setInterval(nextSlide, 5000);

      // Si hay URL, abrir en nueva pestaña
      if (url && url.trim() !== '') {
        window.open(url, '_blank');
      }
    }
  });
});

});