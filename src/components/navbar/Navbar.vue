<template>
  <nav>
    <div class="nav-container">
      <div class="main">
        <router-link to="/">
          <h1>Marine Gonnord</h1>
        </router-link>
      </div>

      <div class="item">
        <router-link :to="{ path: '/', hash: '#projects' }">
          Projets
        </router-link>
        <router-link :to="{ path: '/music' }"> Musique </router-link>
        <button
          id="theme-toggle"
          class="theme-toggle"
          aria-label="Changer de thème"
          @click="toggleTheme"
        >
          <i :class="isLight ? 'ri-moon-line' : 'ri-sun-line'" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isLight = ref(false);

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

@media (max-width: 900px) {
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

@media (max-width: 600px) {
  nav .nav-container {
    width: 94%;
    padding: 14px 10px;
  }

  nav .item {
    gap: 14px;
  }

  nav .item a {
    font-size: 0.95rem;
  }

  nav .item .theme-toggle {
    padding: 7px 11px;
    font-size: 1.1rem;
  }
}

@media (max-width: 420px) {
  nav .nav-container {
    width: 96%;
    padding: 12px 8px;
    flex-wrap: nowrap;
  }

  nav .item {
    gap: 10px;
  }

  nav .item a {
    font-size: 0.9rem;
  }

  nav .item .theme-toggle {
    padding: 6px 9px;
    font-size: 1rem;
  }
}
</style>
