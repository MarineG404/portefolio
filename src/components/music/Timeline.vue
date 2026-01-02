<template>
	<div class="timeline-music-wrapper">
		<div ref="timelineRef" style="width: 100%"></div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Timeline } from 'vis-timeline/standalone'
import 'vis-timeline/styles/vis-timeline-graph2d.min.css'

const groups = [
	{id : 1, content: 'Solfège'},
	{id : 2, content: 'Instruments'},
	{id : 3, content: 'Ensembles'},
]

const items = [
	{id : 1, group : 1, content: 'Éveil musical — Immal de Lyon', start : '2007-09-01', end : '2010-06-30', className: 'group-1', title: 'Éveil musical — Immal de Lyon'},
	{id : 2, group : 1, content: 'Formation Musicale — Immal de Lyon', start : '2010-09-01', end : '2015-06-30', className: 'group-1', title: 'Formation Musicale — Immal de Lyon'},
	{id : 3, group : 2, content: 'Apprentissage de la flûte traversière — Valérie Wojciechowski', start : '2011-09-01', end : '2015-06-30', className: 'group-2', title: 'Apprentissage de la flûte traversière — Valérie Wojciechowski'},
	{id : 4, group : 1, content: 'Formation Musicale — ENM de Villeurbanne', start : '2015-09-01', end : '2017-06-30', className: 'group-1', title: 'Formation Musicale — ENM de Villeurbanne'},
	{id : 5, group : 3, content: 'Orchestre (EMI) — ENM de Villeurbanne', start : '2015-09-01', end : '2020-06-30', className: 'group-3', title: 'Orchestre (EMI) — ENM de Villeurbanne'},
	{id : 6, group : 3, content: 'Candell Harmonie — Lyon 8', start : '2016-09-01', end : '2019-09-30', className: 'group-3', title: 'Candell Harmonie — Lyon 8'},
	{id : 7, group : 2, content: 'Apprentissage flûte traversière — ENM de Villeurbanne', start : '2015-09-01', end: new Date(), className: 'group-2', title: 'Apprentissage flûte traversière — ENM de Villeurbanne'},
	{id : 8, group : 3, content: 'Harmonie de Brignais — Brignais', start : '2019-09-01', end: new Date(), className: 'group-3', title: 'Harmonie de Brignais — Brignais'},
	{id : 9, group : 3, content: 'Harmonie ENM — ENM de Villeurbanne', start : '2020-09-01', end : '2021-03-31', className: 'group-3', title: 'Harmonie ENM — ENM de Villeurbanne'},
	{id : 10, group : 3, content: 'Binioufous', start : '2020-09-01', end: new Date(), className: 'group-3', title: 'Binioufous'},
]

const timelineRef = ref(null)

onMounted(() => {
	const container = timelineRef.value
	const options = {
		start: new Date('2006-05-01'),
		end: new Date(new Date().setFullYear(new Date().getFullYear() + 2)),
		stack: true,
		editable: false,
		orientation: 'top',
		margin: {
			item: 10,
			axis: 5,
		},
		tooltip: {
			followMouse: true,
			overflowMethod: 'cap'
		}
	}
	new Timeline(container, items, groups, options)
})
</script>

<style scoped>
	.timeline-music-wrapper {
		width: 100%;
	}
</style>

<style>

.timeline-music-wrapper {

	/* Left labels */
	.vis-labelset .vis-label {
		color: var(--text-main);
		font-weight: 600;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #ffffff3f !important;

	}

	.vis-time-axis .vis-text {
		color: var(--text-main);
		font-weight: 600;
		margin-left: 10px;
	}

	/* Remove container borders */
	.vis-timeline,
	.vis-panel,
	.vis-content,
	.vis-itemset {
		border: none !important;
		border-width: 0 !important;
	}

	.vis-foreground .vis-group {
		border-bottom: 1px solid #ffffff3f !important;
		box-sizing: border-box;
	}

	.vis-grid {
		&.vis-vertical {
			border-color: #ffffff3f !important;
		}
	}

	.vis-item {
		border-radius: 12px;
		border: none !important;
		transition: all 0.2s ease;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

		&.vis-point,
		&.vis-range {
			border-radius: 12px;
			border: none !important;
		}

		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		}

		.vis-item-content {
			padding: 10px 16px;
			font-weight: 500;
		}
	}

	.group-1 {
		background-color: var(--color-group-1);
		color: var(--color-group-1-text);

		&:hover {
			background-color: var(--color-group-1-hover);
		}
	}

	.group-2 {
		background-color: var(--color-group-2);
		color: var(--color-group-2-text);

		&:hover {
			background-color: var(--color-group-2-hover);
		}
	}

	.group-3 {
		background-color: var(--color-group-3);
		color: var(--color-group-3-text);

		&:hover {
			background-color: var(--color-group-3-hover);
		}
	}
}
</style>
