<template>
  <div class="carousel-wrapper">
    <div class="carousel" ref="carouselRef">
      <div class="carousel-item">
        <h3>Générateur de QR code</h3>
        <p>
          Ayant eu marre des outils en ligne remplis de publicités, j'ai créé mon propre générateur de
          QR code simple et efficace.
        </p>
        <button>
          <a href="https://qrcode.marinegonnord.fr" target="_blank" rel="noopener noreferrer">
            <i class="ri-link"></i>Visiter le site
          </a>
        </button>
      </div>

      <div class="carousel-item">
        <h3>Fokuz</h3>
        <p>
          Cherchant un sujet pour mon projet de cours de react native, j'ai décidé de créer une
          application de gestion de tâches simple et épurée.
        </p>
        <button>
          <a href="https://github.com/MarineG404/Fokuz" target="_blank" rel="noopener noreferrer">
            <i class="ri-github-fill"></i>Visiter le projet
          </a>
        </button>
      </div>

      <div class="carousel-item">
        <h3>Serveur et nom de domaine</h3>
        <p>
          Pour acquérir de l'autonomie, j'ai mis en place mon propre serveur et nom de domaine qui
          hébergent ce portfolio, le générateur de QR code et mon CV.
        </p>
        <button>
          <a href="https://cv.marinegonnord.fr" target="_blank" rel="noopener noreferrer">
            <i class="ri-file-text-line"></i>Voir mon CV
          </a>
        </button>
      </div>
    </div>

    <div class="controls">
      <button @click="prevSlide" aria-label="Projet précédent"><i class="ri-arrow-left-line"></i></button>
      <button @click="nextSlide" aria-label="Projet suivant"><i class="ri-arrow-right-line"></i></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const carouselRef = ref(null)
let items = []
let currentIndex = 0

function updateCarousel() {
  const totalItems = items.length
  if (totalItems === 0) return
  const angleStep = 360 / totalItems

  items.forEach((item, i) => {
    const angle = angleStep * (i - currentIndex)
    const rad = (angle * Math.PI) / 180
    const x = Math.sin(rad) * 400
    const z = Math.cos(rad) * 400 - 400
    const scale = 0.7 + Math.cos(rad) * 0.3
    const opacity = z > -200 ? 1 : 0.3

    item.style.transform = `translateX(${x}px) translateZ(${z}px) scale(${scale})`
    item.style.opacity = opacity
    item.style.zIndex = String(Math.round(z))

    item.style.filter = i === currentIndex ? 'brightness(1.1)' : 'brightness(0.8)'
  })
}

function goToSlide(index) {
  currentIndex = index
  updateCarousel()
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length
  updateCarousel()
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length
  updateCarousel()
}

onMounted(() => {
  const carouselEl = carouselRef.value
  if (!carouselEl) return
  items = Array.from(carouselEl.querySelectorAll('.carousel-item'))

  items.forEach((item, i) => {
    item.addEventListener('click', () => goToSlide(i))
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'ArrowRight') nextSlide()
  })

  updateCarousel()
})
</script>

<style scoped>
.carousel-wrapper {
	position: relative;
	height: 500px;
	perspective: 1000px;
	overflow: visible;
}

.carousel {
	position: relative;
	width: 100%;
	height: 100%;
	transform-style: preserve-3d;
	transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-item {
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;


	width: 320px;
	height: 400px;
	left: 50%;
	top: 50%;
	margin-left: -160px;
	margin-top: -200px;
	background: var(--bg-card);
	border-radius: 20px;
	padding: 20px;
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
	transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	backface-visibility: hidden;
	border: 1px solid var(--text-secondary);

	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: 12px;
		margin-bottom: 15px;
	}

	h3 {
		font-size: 1.8rem;
		color: var(--text-main);
		margin-bottom: 10px;
		text-align: center;
	}

	p {
		color: var(--text-secondary);
		line-height: 1.6;
		font-size: 1.1rem;
	}
}

.controls {
	display: flex;
	gap: 30px;

	button {
		padding: 10px 15px;

	}

	i {
		margin: 0;
	}
}
</style>
