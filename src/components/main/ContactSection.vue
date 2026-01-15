<template>
  <section id="contact" class="contact">
    <h2>Contactez-moi</h2>
    <p>Vous pouvez me contacter via les réseaux sociaux ou par email :</p>
    <div class="contact-links">
      <a
        href="https://github.com/marineG404"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="ri-github-line"
      /></a>
      <a
        href="https://www.linkedin.com/in/marine-gonnord-7a1517234/"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="ri-linkedin-line"
      /></a>
      <a
        href="mailto:marine.gonnord.pro@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="ri-mail-line"
      /></a>
    </div>
  </section>
</template>

<script setup>
// contact links
</script>

<style scoped>
.contact {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .contact-links {
    display: flex;
    flex-direction: row;
    gap: 15px;
    font-size: 1.3rem;

    a {
      color: var(--text-main);

      &:hover {
        color: var(--accent);
        transform: translateY(-5px);
        transition:
          color 0.3s,
          transform 0.3s;
      }
    }
  }
}
</style>
