const track = document.querySelector('.carousel-track');
const images = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const indicators = Array.from(document.querySelectorAll('.indicator'));

let currentIndex = 0;

function updateCarousel() {
    const width = images[0].getBoundingClientRect().width;

    // Перемещаем трек
    track.style.transform = `translateX(-${currentIndex * width}px)`;

    // Обновляем индикаторы
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Цикличность
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Цикличность
    updateCarousel();
});

// Индикаторы переключения
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});
