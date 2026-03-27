<template>
  <nav>
    <div class="nav-container">
      <div class="main">
        <router-link to="/">
          <h1>Marine Gonnord</h1>
        </router-link>
      </div>

      <div class="nav-right">
        <button
          id="theme-toggle"
          class="theme-toggle"
          aria-label="Changer de thème"
          @click="toggleTheme"
        >
          <i :class="isLight ? 'ri-moon-line' : 'ri-sun-line'" />
        </button>

        <button
          class="theme-toggle burger"
          aria-label="Ouvrir le menu de navigation"
          :aria-expanded="isOpen"
          @click="isOpen = !isOpen"
        >
          <i :class="isOpen ? 'ri-close-line' : 'ri-menu-line'" />
        </button>
      </div>

      <!-- Menu desktop -->
      <div class="item desktop-menu">
        <a href="https://cv.marinegonnord.fr/" target="_blank" rel="noopener">
          <i class="ri-external-link-line"></i> CV en ligne
        </a>
        <router-link :to="{ path: '/', hash: '#projects' }">
          <i class="ri-briefcase-line"></i> Projets
        </router-link>
        <router-link :to="{ path: '/music' }">
          <i class="ri-music-line"></i> Musique
        </router-link>
        <button
          class="theme-toggle"
          aria-label="Changer de thème"
          @click="toggleTheme"
        >
          <i :class="isLight ? 'ri-moon-line' : 'ri-sun-line'" />
        </button>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="isOpen" class="overlay" @click="isOpen = false" />
    </Transition>

    <Transition name="slide">
      <div v-if="isOpen" class="sidebar">
        <a
          href="https://cv.marinegonnord.fr/"
          target="_blank"
          rel="noopener"
          @click="isOpen = false"
        >
          <i class="ri-external-link-line"></i> CV en ligne
        </a>
        <router-link
          :to="{ path: '/', hash: '#projects' }"
          @click="isOpen = false"
        >
          <i class="ri-briefcase-line"></i> Projets
        </router-link>
        <router-link :to="{ path: '/music' }" @click="isOpen = false">
          <i class="ri-music-line"></i> Musique
        </router-link>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const isLight = ref(false);
const isOpen = ref(false);
const route = useRoute();

watch(route, () => {
  isOpen.value = false;
});

onMounted(() => {
  isLight.value = localStorage.getItem("theme") === "light";
  if (isLight.value) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
});

function toggleTheme() {
  isLight.value = !isLight.value;
  if (isLight.value) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
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
  transition:
    background-color 0.3s,
    border-bottom-color 0.3s;

  .nav-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    max-width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }

  .main {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: var(--accent);

    h1 {
      line-height: 1.2;
      white-space: normal;
    }
  }

  .nav-right {
    display: none;
    align-items: center;
    gap: 12px;
  }

  .item {
    display: flex;
    gap: 25px;
    align-items: center;

    a {
      font-size: 1.1rem;
    }

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

/* Overlay */
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  width: 260px;
  background-color: var(--bg-nav);
  border-left: 2px solid var(--text-secondary);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 6rem 2rem 2rem;
  box-sizing: border-box;

  a {
    font-size: 1.1rem;
    color: var(--text-main);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      color: var(--accent-hover);
    }
  }
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.nav-right .theme-toggle {
  background: none;
  border: 2px solid var(--text-secondary);
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  color: var(--text-main);
  font-size: 1.2rem;
  transition: all 0.3s;

  &:hover {
    border-color: var(--accent);
    background-color: var(--accent);
    color: var(--text-button);
  }

  i {
    margin: 0;
  }
}

@media (max-width: 850px) {
  nav .nav-container {
    width: 94%;
    padding: 14px 10px;
  }

  nav .desktop-menu {
    display: none;
  }

  nav .nav-right {
    display: flex;
  }
}

@media (max-width: 900px) and (min-width: 769px) {
  nav .nav-container {
    width: 90%;
    padding: 16px 12px;
  }

  nav .item {
    gap: 18px;
  }

  nav .item a {
    font-size: 1rem;
  }
}
</style>
