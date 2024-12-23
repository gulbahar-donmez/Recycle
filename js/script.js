let index = 0;

function showSlide(n) {
    const slides = document.querySelector('.carousel-images');
    const totalSlides = slides.children.length;
    
    // Döngüsel geçiş
    index = (n + totalSlides) % totalSlides;

    // Resimleri kaydır
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function prevSlide() {
    showSlide(index - 1); // Önceki resme git
}

function nextSlide() {
    showSlide(index + 1); // Sonraki resme git
}

document.querySelector('a').addEventListener('click', function(event) {
    if (!event.target.closest('button')) {
        event.preventDefault(); // Buton dışında tıklamayı engelle
    }
});