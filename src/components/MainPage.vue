<template>
	<div class="page-container">

		<Presentation />

		<ProjectsSection />

		<AboutSection />

		<ContactSection />
	</div>
</template>

<script setup>
import Presentation from './Presentation.vue'
import ProjectsSection from './ProjectsSection.vue'
import AboutSection from './AboutSection.vue'
import ContactSection from './ContactSection.vue'
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
}
</style>
