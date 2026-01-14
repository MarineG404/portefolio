<template>
  <section id="about" class="about">
    <h2>À propos de moi</h2>
    <p>
      Languages et technologies que j'ai pu utiliser jusqu'à présent
    </p>

    <img
      :src="`https://urskill.erickpaoletti.fr?icons=javascript,typescript,npm,,,vscode,visualstudio,pycharm,,,linux,debian,ubuntu,html,bootstrap,css,,,github,gitlab,git,,,windows,arduino,raspberrypi,python,php,cs,cpp,,docker,mysql,postman,,,,,,symfony,django,angular,react,,,&max_per_row=13&background_color=${bgColor}`"
      :key="bgColor" />

	<p class="caption">
		(L'assemblage des icones provient de <a href="https://urskill.erickpaoletti.fr" target="_blank" rel="noopener noreferrer">urskill.erickpaoletti.fr</a>)
	</p>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const bgColor = ref('')

const updateBgColor = () => {
	bgColor.value = window.getComputedStyle(document.documentElement)
		.getPropertyValue('--bg-card-light')
		.trim()
		.replace('#', '')
}

onMounted(() => {
	updateBgColor()

	const observer = new MutationObserver(() => {
		updateBgColor()
	})

	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ['data-theme']
	})
})

</script>

<style scoped>
.about {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;

	img {
		margin:  30px auto;

		width: 60%;

		&:hover {
			filter: drop-shadow(0 0 2px var(--accent));
			transition: filter 0.3s, transform 0.3s;
			transform: scale(1.02);
		}

		&:not(:hover) {
			transition: filter 0.3s, transform 0.3s;
			filter: none;
			transform: scale(1);
		}
	}

	.caption {
		font-size: 0.8em;
		color: var(--text-secondary);
		font-style: italic;

		a {
			color: var(--link-main);
			text-decoration: none;

			&:hover {
				color: var(--link-hover);
				text-decoration: underline;
			}
		}
	}
}

@media (max-width: 768px) {
	.about {
		img {
			width: 100%;
		}
	}
}
</style>
