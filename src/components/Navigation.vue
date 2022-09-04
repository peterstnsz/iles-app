<template>
  <header class="header">
    <div class="container">
      <div class="logo">LOGO</div>
      <ul class="nav">
        <li><router-link to="/design">Design</router-link></li>
        <li><router-link to="/photo">Photo</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  height: 4rem;
  z-index: 10;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}

/* slightly transparent fallback */
.header {
  background-color: rgba(255, 255, 255, 0.9);
}

/* if backdrop support: very transparent and blurred */
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .header {
    background: rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(14.5px);
    backdrop-filter: blur(14.5px);
  }
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.header > .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.home-link {
  text-decoration: none;
  max-width: 100%;
}

.logo {
  height: 1.5em;
}

.nav {
  display: flex;
  gap: 24px;
}

/* nav > * {
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  margin-right: 1rem;
  padding: 8px 12px;
  background: transparent;
  border-radius: 8px;
  transition: background 0.5s;
}

nav > *:last-of-type {
  margin: 0;
}

nav > a:hover {
  background: var(--color-contrast-2);
  border-radius: 8px;
}

nav > .active {
  color: inherit;
  background: var(--color-contrast-2);
  border-radius: 8px;
} */
</style>
