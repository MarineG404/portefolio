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
	grid-template-columns: 3fr 1fr;
	gap: 20px;
	align-items: center;
	width: 90%;
	min-height: 80vh;

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
</style>
