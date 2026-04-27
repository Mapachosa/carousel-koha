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

// click miniaturas
document.querySelectorAll('.item img').forEach(img => {
  img.addEventListener('click', () => {
    const index = parseInt(img.dataset.slide);
    if (!isNaN(index)) {
      showSlide(index);
      clearInterval(interval);
      interval = setInterval(nextSlide, 5000);
    }
  });
});

});