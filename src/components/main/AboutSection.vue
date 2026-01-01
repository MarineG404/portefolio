<template>
  <section id="about" class="about">
    <h2>À propos de moi</h2>
    <p>
      Languages et technologies que j'ai pu utiliser jusqu'à présent
    </p>

    <img
      src="https://urskill.erickpaoletti.fr?icons=javascript,typescript,npm,,,vscode,visualstudio,pycharm,,,linux,debian,ubuntu,html,bootstrap,css,,,github,gitlab,git,,,windows,arduino,raspberrypi,python,php,cs,cpp,,docker,mysql,postman,,,,,,symfony,django,angular,react,,,&max_per_row=13&background_color=2E2E2E" />
  </section>
</template>

<script setup>
// About section simple component
</script>

<style scoped>
.about {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;

	img {
		margin-top: 20px;
	}
}
</style>
