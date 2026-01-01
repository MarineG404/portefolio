<template>
	<nav>
		<div class="nav-container">
			<div class="main">
				<a href="#"><h1>Marine Gonnord</h1></a>
			</div>

			<div class="item">
				<router-link :to="{ path: '/', hash: '#projects' }">Projets</router-link>
				<router-link :to="{ path: '/music' }">Musique</router-link>
				<router-link :to="{ path: '/', hash: '#about' }">À propos</router-link>
				<router-link :to="{ path: '/', hash: '#contact' }">Contact</router-link>
				<button class="theme-toggle" id="theme-toggle" aria-label="Changer de thème" @click="toggleTheme">
					<i :class="isLight ? 'ri-moon-line' : 'ri-sun-line'"></i>
				</button>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import router from '../../router'

const isLight = ref(false)

onMounted(() => {
	isLight.value = localStorage.getItem('theme') === 'light'
	if (isLight.value) {
		document.documentElement.setAttribute('data-theme', 'light')
	} else {
		document.documentElement.removeAttribute('data-theme')
	}
})

function toggleTheme() {
	isLight.value = !isLight.value
	if (isLight.value) {
		document.documentElement.setAttribute('data-theme', 'light')
		localStorage.setItem('theme', 'light')
	} else {
		document.documentElement.removeAttribute('data-theme')
		localStorage.setItem('theme', 'dark')
	}
}
</script>

<style scoped>
nav {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 2px solid var(--text-secondary);
	background-color: var(--bg-nav);
	backdrop-filter: blur(10px);

	.nav-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 80%;
		padding: 20px;
	}

	.main {
		display: flex;
		flex-direction: column;
		gap: 5px;
		color: var(--accent);
	}

	.item {
		display: flex;
		gap: 25px;
		align-items: center;

		a:hover {
			color: var(--accent-hover);
		}

		.theme-toggle {
			background: none;
			border: 2px solid var(--text-secondary);
			padding: 8px 12px;
			border-radius: 8px;
			cursor: pointer;
			color: var(--text-main);
			font-size: 1.2rem;
			transition: all 0.3s;
			width: auto;

			&:hover {
				border-color: var(--accent);
				background-color: var(--accent);
				color: var(--text-button);
			}

			i {
				margin: 0;
			}
		}
	}
}
</style>
