<template>
  <div class="carousel-container">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      :breakpoints="{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
      class="projects-swiper"
    >
      <swiper-slide v-for="project in projects" :key="project.id">
        <div class="project-card">
          <h3>{{ project.title }}</h3>
          <p class="description">
            {{ project.description }}
          </p>

          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>

          <div class="links">
            <a
              v-if="project.links.website"
              :href="project.links.website"
              target="_blank"
              class="link-btn"
            >
              <i class="ri-global-line" /> Site
            </a>
            <a
              v-if="project.links.repo"
              :href="project.links.repo"
              target="_blank"
              class="link-btn"
            >
              <i :class="repoIcon(project.links.repo)" />
              {{ repoLabel(project.links.repo) }}
            </a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import projectsData from "../../assets/projects.json";

const modules = [Navigation, Pagination];
const projects = ref([]);

onMounted(() => {
  projects.value = projectsData.projects;
});

function repoLabel(url) {
  return url.includes("framagit.org") ? "Framagit" : "GitHub";
}

function repoIcon(url) {
  return url.includes("framagit.org")
    ? "ri-git-repository-line"
    : "ri-github-line";
}
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px;

  .projects-swiper {
    width: 100%;
    padding: 40px 0 60px;

    .project-card {
      background: var(--bg-card);
      border-radius: 12px;
      border: 1px solid var(--overlay-light);
      padding: 32px;
      height: 100%;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px var(--overlay-light);
        border-color: var(--accent);
      }

      h3 {
        font-size: 22px;
        font-weight: 600;
        color: var(--text-main);
        margin-bottom: 16px;
        line-height: 1.3;
      }

      .description {
        font-size: 15px;
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 20px;
        flex-grow: 1;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 24px;

        .tag {
          background: var(--tag-bg);
          color: var(--tag-text);
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          transition: background 0.2s;

          &:hover {
            opacity: 0.8;
          }
        }
      }

      .links {
        display: flex;
        gap: 12px;

        .link-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          background: var(--accent);
          color: var(--text-button);
          text-decoration: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;

          i {
            font-size: 16px;
          }

          &:hover {
            background: var(--accent-hover);
            transform: translateY(-1px);
          }

          &:active {
            transform: translateY(0);
          }
        }
      }
    }
  }
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--text-button);
  background: var(--accent);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: auto;
  bottom: 0;
  font-family: "remixicon" !important;
  font-size: 28px;

  svg {
    display: none;
  }

  &:hover {
    background: var(--accent-hover);
  }
}

:deep(.swiper-button-prev) {
  left: 50%;
  transform: translateX(-70px);

  &::before {
    content: "\ea64";
  }
}

:deep(.swiper-button-next) {
  right: 50%;
  transform: translateX(70px);

  &::before {
    content: "\ea6e";
  }
}

:deep(.swiper-pagination) {
  display: none;
}

@media (max-width: 768px) {
  .carousel-container {
    padding: 40px 16px;

    .projects-swiper {
      .project-card {
        padding: 24px;

        h3 {
          font-size: 20px;
        }

        .description {
          font-size: 14px;
        }

        .links {
          flex-direction: column;
        }
      }
    }
  }
}
</style>
