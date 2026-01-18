<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-overlay" @click.self="handleClose">
      <div class="modal-container" :class="modalClass">
        <!-- Header -->
        <div v-if="$slots.header || title" class="modal-header">
          <slot name="header">
            <h3>{{ title }}</h3>
          </slot>
          <button
            v-if="showCloseButton"
            class="modal-close"
            aria-label="Fermer"
            @click="handleClose"
          >
            ×
          </button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <slot></slot>
        </div>

        <!-- Footer -->
        <div v-if="$slots.footer" class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { watch } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  modalClass: {
    type: String,
    default: "",
  },
  showCloseButton: {
    type: Boolean,
    default: true,
  },
  closeOnOverlay: {
    type: Boolean,
    default: true,
  },
  closeOnEscape: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["close", "update:isOpen"]);

const handleClose = () => {
  if (props.closeOnOverlay) {
    emit("close");
    emit("update:isOpen", false);
  }
};

const handleEscape = (e) => {
  if (e.key === "Escape" && props.closeOnEscape && props.isOpen) {
    handleClose();
  }
};

// Escape key listener
watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    }
  },
);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(4px);

  .modal-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 12px;
    padding: 1rem 1.5rem;
    background-color: var(--bg-card-transparent);
    width: auto;
    max-width: 90vw;
    max-height: 90vh;

    @media (max-width: 900px) {
      max-width: 95vw;
      max-height: 95vh;
      overflow-y: auto;
    }

    @media (max-width: 480px) {
      max-width: 98vw;
      max-height: 98vh;
      padding: 0.75rem;
      gap: 0.75rem;
      overflow-y: auto;
    }

    .modal-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      button {
        background: none;
        margin: 0;
        padding: 0;
      }

      h3 {
        margin: 0;
        font-size: 1.5rem;
      }
    }

    .modal-body {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
}
</style>
