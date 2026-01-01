<template>
  <section id="projects" class="projects">
    <h2>Projets</h2>
    <p>Voici quelques-uns de mes projets récents</p>

    <Carousel />
  </section>
</template>

<script setup>
import Carousel from './Carousel.vue'
</script>

<style scoped>

.projects {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
}

</style>
