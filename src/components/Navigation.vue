<template>
  <header>
    <nav>
      <router-link to="../"
        ><img src="@/assets/logo.svg" class="logo" width="23" height="24"
      /></router-link>
    </nav>
    <nav class="nav right">
      <router-link to="/design">Design</router-link>
      <router-link to="/photo">Photo</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  z-index: 99;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}

/* slightly transparent fallback */
header {
  background-color: rgba(255, 255, 255, 0.9);
}

/* if backdrop support: very transparent and blurred */
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  header {
    background: rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(14.5px);
    backdrop-filter: blur(14.5px);
  }
}

.logo {
  height: 1.5em;
  margin-top: 4px;
}

nav > * {
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  margin-right: 0.4rem;
  padding: 8px 12px;
  background: transparent;
  border-radius: 8px;
  transition: background 0.5s;
}

nav > *:last-of-type {
  margin: 0;
}

nav + .right > a:hover {
  background: var(--color-contrast-2);
  border-radius: 8px;
}

nav + .right > .active {
  color: inherit;
  background: var(--color-contrast-2);
  border-radius: 8px;
}
</style>
