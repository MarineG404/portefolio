<template>
<Navbar />
<MainPage />
</template>

<script>
	import Navbar from "./components/navbar/Navbar.vue"
	import MainPage from "./layouts/MainPage.vue"
	export default {
		components: {
			Navbar,
			MainPage
		}
	}
</script>
