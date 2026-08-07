<template>
  <article class="presentation">
    <div class="text">
      <h2>Marine Gonnord</h2>
      <p>
        Je suis étudiante en mastère Développement Web (EADL) à l'ORT Lyon,
        actuellement en alternance chez la DGFIP jusqu'en 2028.
      </p>
      <button class="contact-button" @click="contactModal.open()">
        <i class="ri-mail-line" />Me contacter
      </button>
    </div>
    <img src="../../assets/avatar.svg" alt="Photo de Marine Gonnord" />

    <ContactModal
      :is-open="contactModal.isOpen.value"
      @close="contactModal.close()"
    />
  </article>
</template>

<script setup>
import { useModal } from "@/composables/useModal";
import ContactModal from "@/components/modal/Contact.vue";

const contactModal = useModal();
</script>

<style scoped>
.presentation {
  display: grid;
  grid-template-columns: 3fr minmax(0, 1fr);
  gap: 20px;
  width: 90%;
  max-width: 100%;
  min-height: 80vh;
  overflow: hidden;
  align-items: center;

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: var(--font-size-large);
    line-height: 1.5;
    gap: 20px;
    min-width: 0;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 400px;
    object-fit: contain;
  }
}

@media (max-width: 768px) {
  .presentation {
    grid-template-columns: 2fr 1fr;
    gap: 16px;

    img {
      max-width: 140px;
    }
  }
}

@media (max-width: 480px) {
  .presentation {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: 60vh;

    img {
      max-width: 120px;
      margin: 0 auto;
    }
  }
}
</style>
