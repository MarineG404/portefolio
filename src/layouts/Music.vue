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

    <div class="articles-list">
      <div
        v-for="item in items"
        :id="'article-' + item.id"
        :key="item.id"
        class="article-section"
      >
        <div class="article-header">
          <h3>{{ item.title }}</h3>
          <p class="period">
            {{ formatPeriod(item.start, item.end) }}
          </p>
        </div>

        <div class="article-content">
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import Timeline from "../components/music/Timeline.vue";
import itemsData from "../assets/timeline-items.json";

const items = itemsData;

const formatPeriod = (start, end) => {
  const startDate = new Date(start).toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });
  const endDate =
    end === "now"
      ? "Aujourd'hui"
      : new Date(end).toLocaleDateString("fr-FR", {
          month: "long",
          year: "numeric",
        });
  return `${startDate} - ${endDate}`;
};

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

  .articles-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    align-items: center;

    .article-section {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 1.5rem;
      background: var(--bg-card);
      border-radius: 16px;
      position: relative;
      animation: slideIn 0.5s ease;
      width: 90%;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-left: 2px solid var(--card-border);
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

      .article-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

        h3 {
          color: var(--text-card-title);
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .period {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-style: italic;
        }
      }

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
      }
    }
  }
}

@media (max-width: 600px) {
  .articles-list .article-section {
    width: 100%;
    padding: 1rem;

    .article-header {
      flex-direction: column;
      align-items: flex-start;

      h3 {
        font-size: 1.25rem;
      }
    }
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
