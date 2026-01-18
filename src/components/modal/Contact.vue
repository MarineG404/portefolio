<template>
  <Modal
    :is-open="isOpen"
    title="Contactez-moi"
    modal-class="contact-modal"
    @close="close"
  >
    <div class="contact-content">
      <div class="personal-info">
        <div class="banner">
          <div class="banner-bg"></div>
          <div class="avatar-wrapper">
            <img src="@/assets/avatar.svg" alt="Avatar" class="avatar" />
          </div>
        </div>

        <div class="main-info">
          <h2>Marine Gonnord</h2>

          <p>Marine Gonnord • She/Her</p>

          <div class="actions">
            <a
              href="mailto:marine.gonnord.pro@gmail.com"
              class="send-message-btn"
              title="Envoyer un email à marine.gonnord.pro@gmail.com"
            >
              <i class="ri-chat-3-fill"></i>Envoyer un message
            </a>
            <a
              href="https://www.linkedin.com/in/marine-gonnord-7a1517234/"
              target="_blank"
              class="icon-btn"
              title="Me suivre sur LinkedIn"
            >
              <i class="ri-user-add-line"></i>
            </a>
          </div>

          <div class="item">
            <p>Membre depuis</p>
            <p>
              <i class="ri-calendar-fill"></i> 2022 •
              <i class="ri-music-2-line"></i> 2007
            </p>
          </div>

          <div class="item">
            <p>Localisation</p>
            <p><i class="ri-map-pin-fill"></i> France</p>
          </div>

          <div class="item">
            <p>Connexion</p>
            <div class="connections">
              <a
                href="https://www.linkedin.com/in/marine-gonnord-7a1517234/"
                target="_blank"
                class="connection-link"
              >
                <i class="ri-linkedin-box-fill"></i>
                <span>LinkedIn</span>
                <i class="ri-external-link-line"></i>
              </a>
              <a
                href="https://github.com/MarineG404"
                target="_blank"
                class="connection-link"
              >
                <i class="ri-github-fill"></i>
                <span>GitHub</span>
                <i class="ri-external-link-line"></i>
              </a>
              <a
                href="https://qrcode.marinegonnord.fr"
                target="_blank"
                class="connection-link"
              >
                <i class="ri-qr-code-line"></i>
                <span>qrcode.marinegonnord.fr</span>
                <i class="ri-external-link-line"></i>
              </a>
              <a
                href="https://bingo.marinegonnord.fr/"
                target="_blank"
                class="connection-link"
              >
                <i class="ri-grid-fill"></i>
                <span>bingo.marinegonnord.fr</span>
                <i class="ri-external-link-line"></i>
              </a>
              <a
                href="https://cv.marinegonnord.fr/"
                target="_blank"
                class="connection-link"
              >
                <i class="ri-file-text-line"></i>
                <span>cv.marinegonnord.fr</span>
                <i class="ri-external-link-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="activities">
        <h3>Activité en cours</h3>

        <div class="card">
          <p>Joue à</p>
          <div class="item">
            <img src="/img/vs-code.png" alt="Travail en cours" />
            <div class="txt">
              <p><strong>Visual Studio Code</strong></p>
              <p>Édition de src/components/modal/Contact.vue</p>
              <p class="game"><i class="ri-gamepad-line"></i> 21:03:04</p>
            </div>
          </div>
        </div>

        <div class="card">
          <p>Écoute Deezer <i class="ri-headphone-line"></i></p>
          <div class="item">
            <img src="/img/deezer.jpg" alt="Musique récente" />
            <div class="txt">
              <p><strong>Écoute de Mr/Mme</strong></p>
              <p>Loïc Nottet</p>
              <p class="game"><i class="ri-music-2-line"></i> 03:45</p>
            </div>
          </div>
        </div>

        <h3>Activité récente</h3>

        <a
          href="https://github.com/MarineG404"
          target="_blank"
          class="card-link"
        >
          <div class="card">
            <p>Dernière activité GitHub <i class="ri-github-fill"></i></p>
            <div class="item">
              <img src="/img/github.png" alt="GitHub recent activity" />
              <div class="txt">
                <p><strong>MarineG404</strong> a créé une nouvelle branche</p>
                <p>Repository: portefolio_vuejs</p>
                <p class="game">
                  <i class="ri-git-branch-line"></i> 2 heures ago
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- footer -->
    <template #footer>
      <div>
        <p>Design inspiré de Discord - Réalisé par Marine Gonnord</p>
      </div>
    </template>
  </Modal>
</template>

<script setup>
import Modal from "@/components/common/Modal.vue";

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};
</script>

<style scoped>
.contact-content {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }

  .personal-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background: var(--bg-card);
    flex: 1 1 350px;
    min-width: 300px;
    border-radius: 8px;

    @media (max-width: 900px) {
      flex: 1;
      min-width: unset;
    }

    .banner {
      width: 100%;
      height: 120px;
      position: relative;
      margin-bottom: 50px;

      @media (max-width: 480px) {
        height: 90px;
        margin-bottom: 45px;
      }

      .banner-bg {
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #000000 0%, #700000 100%);
        border-radius: 8px 8px 0 0;
      }

      .avatar-wrapper {
        position: absolute;
        bottom: -50px;
        left: 16px;

        @media (max-width: 480px) {
          bottom: -45px;
        }

        .avatar {
          width: 92px;
          height: 92px;
          border-radius: 50%;
          border: 6px solid var(--bg-card);
          background: var(--bg-card);

          @media (max-width: 480px) {
            width: 80px;
            height: 80px;
          }
        }
      }
    }

    .main-info {
      display: flex;
      padding: 1rem 2rem;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      align-items: flex-start;

      @media (max-width: 480px) {
        padding: 0.75rem 1rem;
        gap: 0.75rem;
      }

      h2 {
        text-align: left;

        @media (max-width: 480px) {
          font-size: 1.3rem;
        }
      }

      p {
        text-align: left;

        @media (max-width: 480px) {
          font-size: 0.9rem;
        }
      }

      .actions {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;

        .send-message-btn {
          padding: 0.4rem 1rem;
          border-radius: 6px;
          border: none;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          flex: 0 0 auto;
          background: #5865f2;
          color: white;
          text-decoration: none;

          &:hover {
            background: #4752c4;
          }

          i {
            font-size: 16px;
          }
        }

        .icon-btn {
          background: #4e5058;
          color: #dbdee1;
          padding: 0.4rem;
          min-width: 32px;
          width: auto;
          border-radius: 6px;
          border: none;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;

          &:hover {
            background: #5c5e66;
          }

          i {
            margin: 0;
            font-size: 16px;
          }
        }
      }

      .item {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        > p:first-child {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          color: #b5bac1;
          margin: 0;
        }

        .connections {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          .connection-link {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-main);
            padding: 5px;
            transition: all 0.2s ease;

            &:hover {
              transform: translateY(-2px);
            }

            i:first-child {
              font-size: 20px;
              color: var(--card-border);
              min-width: 20px;
            }

            span {
              flex: 1;
              font-size: 14px;
              word-break: break-word;

              &:hover {
                text-decoration: underline;
              }
            }

            i:last-child {
              color: #888;
            }
          }
        }
      }
    }
  }

  .activities {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1 1 350px;
    min-width: 300px;
    border-radius: 8px;
    padding: 1rem;
    align-items: center;

    @media (max-width: 900px) {
      flex: 1;
      min-width: unset;
    }

    @media (max-width: 480px) {
      padding: 0.5rem;
    }

    h3 {
      margin: 0;
      text-align: left;
      width: 100%;

      @media (max-width: 480px) {
        font-size: 1.1rem;
      }
    }

    .card-link {
      text-decoration: none;
      color: inherit;
      width: 100%;

      .card {
        cursor: pointer;
      }
    }

    .card {
      border-radius: 8px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background: var(--bg-card);
      width: 100%;
      transition: all 0.3s ease;

      @media (max-width: 480px) {
        padding: 0.75rem;
        gap: 0.75rem;
      }

      &:hover {
        transform: translateY(-4px);
        background: var(--bg-card-hover);
      }

      p {
        text-align: left;

        @media (max-width: 480px) {
          font-size: 0.9rem;
        }
      }

      .item {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        align-items: center;

        @media (max-width: 480px) {
          gap: 1rem;
        }

        img {
          width: 100px;
          flex-shrink: 0;

          @media (max-width: 480px) {
            width: 70px;
          }
        }

        .txt {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          flex: 1;
          min-width: 0;

          p {
            word-break: break-word;
          }

          .game {
            color: #91bb96;
            font-size: 20px;
            font-family: "Fira Code", "JetBrains Mono", monospace;

            @media (max-width: 480px) {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
