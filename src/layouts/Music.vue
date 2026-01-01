<template>
	<article class="music-section">
		<h2>Musique</h2>
		<p>Bienvenue dans la section Musique. Ici, quelques informations sur mon parcours musical.</p>

		<Timeline :items="items" />
	</article>
</template>

<script setup>
import Timeline from "../components/music/Timeline.vue"

const items = [
	{ date: '09-2007 - 06-2010', title: 'Éveil musical — Immal de Lyon', desc: '', type: 'solfege' },
	{ date: '09-2010 - 06-2015', title: 'Formation Musicale — Immal de Lyon', desc: '', type: 'solfege' },
	{ date: '09-2011 - 06-2015', title: 'Apprentissage de la flûte traversière — Valérie Wojciechowski', desc: '', type: 'instrument' },
	{ date: '09-2015 - 06-2017', title: 'Formation Musicale — ENM de Villeurbanne', desc: '', type: 'solfege' },
	{ date: '09-2015 - 06-2020', title: 'Orchestre (EMI) — ENM de Villeurbanne', desc: '', type: 'groupe' },
	{ date: '09-2016 - 09-2019', title: 'Candell Harmonie — Lyon 8', desc: '', type: 'groupe' },
	{ date: '09-2015 - 01-2026', title: 'Apprentissage flûte traversière — ENM de Villeurbanne', desc: '', type: 'instrument' },
	{ date: '09-2019 - 01-2026', title: 'Harmonie de Brignais — Brignais', desc: '', type: 'groupe' },
	{ date: '09-2020 - 03-2021', title: 'Harmonie ENM — ENM de Villeurbanne', desc: '', type: 'groupe' },
]

</script>

<style scoped>

.music-section {
	gap: 20px;
	display: flex;
	flex-direction: column;
	padding: 12px 20px 40px;
}

</style>
