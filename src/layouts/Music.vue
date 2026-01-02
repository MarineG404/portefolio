<template>
	<article class="music-section">
		<h2>Musique</h2>
		<p>Bienvenue dans la section Musique. Ici, quelques informations sur mon parcours musical.</p>

		<div class="timeline_container">
			<Timeline />
		</div>
	</article>
</template>

<script setup>
import Timeline from "../components/music/Timeline.vue"


</script>

<style scoped>

.music-section {
	gap: 20px;
	display: flex;
	flex-direction: column;
	width: 100%;

	align-items: center;
	box-sizing: border-box;

	.timeline_container {
		width: 90%;

		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
}

</style>
