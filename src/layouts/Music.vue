<template>
  <article class="music-section">
    <h2>Musique</h2>
    <p>
      Bienvenue dans la section Musique. Ici, quelques informations sur mon
      parcours musical.
    </p>

    <div class="timeline_container">
      <Timeline @select-item="onSelectItem" />
    </div>

    <ArticlesList :items="items" />
  </article>
</template>

<script setup>
import Timeline from "../components/music/Timeline.vue";
import ArticlesList from "../components/music/ArticlesList.vue";
import itemsData from "../assets/timeline-items.json";

const items = itemsData;

const onSelectItem = (itemId) => {
  const el = document.getElementById("article-" + itemId);
  if (!el) return;

  const nav = document.querySelector("nav");
  const navHeight = nav ? nav.offsetHeight : 0;
  const extraGap = 12;
  const top =
    el.getBoundingClientRect().top + window.pageYOffset - navHeight - extraGap;
  window.scrollTo({ top, behavior: "smooth" });
};
</script>

<style scoped>
.music-section {
  gap: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  padding: 2rem 1rem;

  h2 {
    font-size: var(--font-size-large);
    color: var(--text-main);
    margin-bottom: 0.5rem;
  }

  > p {
    color: var(--text-secondary);
    text-align: center;
    max-width: 800px;
  }

  .timeline_container {
    width: 90%;
    max-width: 1400px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    margin: 2rem 0;
  }
}
</style>
