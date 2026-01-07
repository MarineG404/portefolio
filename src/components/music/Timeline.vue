<template>
	<div class="timeline-music-wrapper">
		<div ref="timelineRef" style="width: 100%"></div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Timeline } from 'vis-timeline/standalone'
import 'vis-timeline/styles/vis-timeline-graph2d.min.css'
import itemsData from '../../assets/timeline-items.json'

const groups = [
	{id : 1, content: 'Solfège'},
	{id : 2, content: 'Instruments'},
	{id : 3, content: 'Ensembles'},
]

const items = itemsData.map((it) => {
	const item = { ...it }
	if (item.end === 'now') item.end = new Date()
	return item
})

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
