<template>
  <article class="presentation">
    <div class="text">
      <h2>Marine Gonnord</h2>
      <p>Je suis développeuse web en formation, actuellement en recherche de stage.</p>
      <button><a href="#contact"><i class="ri-mail-line"></i>Me contacter</a></button>
    </div>
	<img src="../../assets/avatar.svg" alt="Photo de Marine Gonnord" />
  </article>
</template>

<script setup>
// simple presentational component
</script>

<style scoped>
.presentation {
	display: grid;
	grid-template-columns: 3fr minmax(0, 1fr);
	gap: 20px;
	width: 90%;
	max-width: 100%;
	min-height: 80vh;
	overflow: hidden;

	.text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		font-size: var(--font-size-large);
		line-height: 1.5;
		gap: 20px;
		min-width: 0;
	}

	img {
		width: 100%;
		height: auto;
		max-width: 100%;
		max-height: 400px;
		object-fit: contain;
	}
}

@media (max-width: 768px) {
	.presentation {
		grid-template-columns: 2fr 1fr;
		gap: 16px;

		img {
			max-width: 140px;
		}
	}
}

@media (max-width: 480px) {
	.presentation {
		grid-template-columns: 1fr;
		text-align: center;
		min-height: 60vh;

		img {
			max-width: 120px;
			margin: 0 auto;
		}
	}
}
</style>
