document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o carrossel e os slides
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelector('.slides');

    // Define a largura do carrossel para o total das larguras dos slides
    const slidesWidth = slides.scrollWidth;
    carousel.style.width = slidesWidth + 'px';

    // Configura a variável para controlar o slide atual
    let currentSlide = 0;

    // Função para avançar para o próximo slide
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.children.length) {
            currentSlide = 0;
        }
        updateSlidePosition();
    }

    // Função para atualizar a posição do slide
    function updateSlidePosition() {
        const slideWidth = slides.firstElementChild.clientWidth;
        slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    // Intervalo de tempo 3segundos
    setInterval(nextSlide, 3000);
});


