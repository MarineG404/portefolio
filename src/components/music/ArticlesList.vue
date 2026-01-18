<template>
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
        <img
          v-if="item.img_path"
          :src="getImagePath(item.img_path)"
          :alt="item.title"
          class="article-image"
        />
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});

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

const getImagePath = (path) => {
  return path.replace("@/assets", "/src/assets");
};
</script>

<style scoped>
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

    .article-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;

      .article-image {
        height: 150px;
        width: auto;
        max-width: 100%;
        border-radius: 12px;
      }

      p {
        line-height: 1.6;
        color: var(--text-secondary);
      }
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
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

    .article-content {
      flex-direction: column;
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
