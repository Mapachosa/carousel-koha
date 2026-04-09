<script>
document.addEventListener("DOMContentLoaded", function () {

  let current = 0;
  const slides = document.querySelectorAll('.vitrina-slide');

  // Validación (evita errores si no encuentra nada)
  if (slides.length === 0) return;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  // Estado inicial
  showSlide(current);

  // Autoplay
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 6000); // más tiempo para leer

});
</script>