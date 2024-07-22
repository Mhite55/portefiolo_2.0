document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".tech-img");
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }

  // Initialiser la première image
  images[currentIndex].classList.add("active");

  // Changer d'image toutes les 3 secondes
  setInterval(showNextImage, 3000);
});
