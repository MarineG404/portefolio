import { createRouter, createWebHistory } from 'vue-router'
import Home from '../layouts/MainPage.vue'
import Music from '../layouts/Music.vue'

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/music', name: 'Music', component: Music },
]

export default createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
			}
		}
		if (savedPosition) {
			return savedPosition
		}
		return { top: 0 }
	}
})
