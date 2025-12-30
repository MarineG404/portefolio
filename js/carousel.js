const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dotsContainer = document.getElementById('dots');

let currentIndex = 0;
const totalItems = items.length;
const angleStep = 360 / totalItems;


const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    items.forEach((item, i) => {
        const angle = angleStep * (i - currentIndex);
        const rad = angle * Math.PI / 180;
        const x = Math.sin(rad) * 400;
        const z = Math.cos(rad) * 400 - 400;
        const scale = 0.7 + (Math.cos(rad) * 0.3);
        const opacity = z > -200 ? 1 : 0.3;
        
        item.style.transform = `
            translateX(${x}px) 
            translateZ(${z}px) 
            scale(${scale})
        `;
        item.style.opacity = opacity;
        item.style.zIndex = Math.round(z);
        
        if (i === currentIndex) {
            item.style.filter = 'brightness(1.1)';
        } else {
            item.style.filter = 'brightness(0.8)';
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

items.forEach((item, i) => {
    item.addEventListener('click', () => goToSlide(i));
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});


// Init
updateCarousel();
