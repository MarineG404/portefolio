<template>
	<div ref="timelineRef" style="width: 100%"></div>
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
		start: new Date('2007-08-01'),
		end: new Date(),
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
	/* Left text */
	:deep(.vis-labelset .vis-label) {
		color: var(--text-main);
		text-align: center;
		border: none !important;
		border-top: none !important;
		border-bottom: none !important;
		border-left: none !important;
		border-right: none !important;
	}

	/* Axis text */
	:deep(.vis-time-axis .vis-text) {
		color: var(--text-main);
	}

	/* Timeline background */
	:deep(.vis-panel.vis-background) {
		background-color: transparent;
	}

	:deep(.vis-panel.vis-center) {
		background-color: transparent;
	}

	/* Remove ALL grids and borders */
	:deep(.vis-grid),
	:deep(.vis-grid.vis-vertical),
	:deep(.vis-grid.vis-horizontal),
	:deep(.vis-grid.vis-minor),
	:deep(.vis-grid.vis-major) {
		border: none !important;
		border-width: 0 !important;
	}

	/* Remove all container borders */
	:deep(.vis-timeline),
	:deep(.vis-panel),
	:deep(.vis-panel.vis-left),
	:deep(.vis-panel.vis-right),
	:deep(.vis-panel.vis-top),
	:deep(.vis-panel.vis-bottom),
	:deep(.vis-labelset),
	:deep(.vis-foreground),
	:deep(.vis-content),
	:deep(.vis-itemset) {
		border: none !important;
		border-width: 0 !important;
	}

	/* Remove borders between groups */
	:deep(.vis-label),
	:deep(.vis-inner) {
		border: none !important;
		border-top: none !important;
		border-bottom: none !important;
	}

	/* Remove group borders in foreground */
	:deep(.vis-foreground .vis-group) {
		border: none !important;
		border-bottom: none !important;
		border-top: none !important;
		box-sizing: border-box;
	}

	/* Items - rounded borders without border */
	:deep(.vis-item),
	:deep(.vis-item.vis-point),
	:deep(.vis-item.vis-range) {
		border-radius: 12px;
		border: none !important;
		transition: all 0.2s ease;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	}

	:deep(.vis-item:hover) {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	}

	:deep(.vis-item .vis-item-content) {
		padding: 10px 16px;
		font-weight: 500;
	}

	/* Colors - softer and saturated tones */
	:deep(.group-1) {
		background-color: var(--color-group-1);
		color: var(--color-group-1-text);
	}

	:deep(.group-1:hover) {
		background-color: var(--color-group-1-hover);
	}

	:deep(.group-2) {
		background-color: var(--color-group-2);
		color: var(--color-group-2-text);
	}

	:deep(.group-2:hover) {
		background-color: var(--color-group-2-hover);
	}

	:deep(.group-3) {
		background-color: var(--color-group-3);
		color: var(--color-group-3-text);
	}

	:deep(.group-3:hover) {
		background-color: var(--color-group-3-hover);
	}
</style>
