<script setup lang="ts">
useHead({
  script: [
    {
      async: true,
      children:
        'console.log("Powered by îles 🏝", "https://iles-docs.netlify.app")',
    },
  ],
});
</script>

<template>
  <Navigation />
  <MetaTags />
  <div class="antialiased">
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <slot />
    </main>
  </div>
  <Footer />
</template>

<style>
/* @import "~/assets/style.css"; */

#app {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2rem;
}

.project-hero {
  margin: 4rem 0 0 0;
  text-align: center;
  color: var(--color-base-1);
}

@media (min-width: 860px) {
  #app {
    padding: 0 6rem;
  }
}

@media (max-width: 500px) {
  #app {
    padding: 0 1.2rem;
  }
}

.label {
  display: block;
  font-weight: 700;
}
table {
  border-collapse: collapse;
}

table,
th,
td {
  border: 0px solid black;
  padding: 0 1.5rem 0 0;
}
</style>
