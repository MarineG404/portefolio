<template>
	<div class="page-container">

		<article class="presentation">
			<div class="text">
				<h2>Marine Gonnord</h2>
				<p>Je suis développeuse web en formation, actuellement en recherche de stage.</p>
				<button><a href="#contact"><i class="ri-mail-line"></i>Me contacter</a></button>
			</div>
			<img src="../assets/avatar.svg" alt="Photo de Marine Gonnord" />
		</article>

		<section id="projects" class="projects">
			<h2>Projets</h2>
			<p>Voici quelques-uns de mes projets récents</p>

			<Carousel />
		</section>

		<section id="about" class="about">
			<h2>À propos de moi</h2>
			<p>
				Languages et technologies que j'ai pu utiliser jusqu'à présent
			</p>

			<img
				src="https://urskill.erickpaoletti.fr?icons=javascript,typescript,npm,,,vscode,visualstudio,pycharm,,,linux,debian,ubuntu,html,bootstrap,css,,,github,gitlab,git,,,windows,arduino,raspberrypi,python,php,cs,cpp,,docker,mysql,postman,,,,,,symfony,django,angular,react,,,&max_per_row=13&background_color=2E2E2E" />
		</section>

		<section id="contact" class="contact">
			<h2>Contactez-moi</h2>
			<p>Vous pouvez me contacter via les réseaux sociaux ou par email :</p>
			<div class="contact-links">
				<a href="https://github.com/marineG404"><i class="ri-github-line"></i></a>
				<a href="https://www.linkedin.com/in/marine-gonnord-7a1517234/"><i class="ri-linkedin-line"></i></a>
				<a href="mailto:marine.gonnord.pro@gmail.com"><i class="ri-mail-line"></i></a>
			</div>
		</section>
	</div>
</template>

<script setup>
import Carousel from './Carousel.vue'
</script>

<style scoped>
.page-container {
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	padding-top: 100px;
	padding-bottom: 80px;
	gap: 100px;

	h2 {
		text-align: center;
		font-size: 2.5rem;
	}

	p {
		text-align: center;
		color: var(--text-secondary);
		font-size: 1.3rem;
	}

	.presentation {
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: 20px;
		align-items: center;
		width: 100%;
		min-height: 90vh;

		.text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			font-size: var(--font-size-large);
			line-height: 1.5;
			gap: 20px;
		}
	}

	.projects {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	.about {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;

		img {
			margin-top: 20px;

		}
	}

	.contact {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;

		.contact-links {
			display: flex;
			flex-direction: row;
			gap: 15px;
		}
	}
}
</style>
