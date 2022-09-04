<template>
  <footer class="footer">
    <div id="app">
      <footer>
        <div>Copyright ©{{ new Date().getFullYear() }} Peter Staniszewski</div>
      </footer>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: var(--color-contrast-1);
  text-align: center;
  font-size: 0.8rem;
  margin-top: calc(var(--m-lg) + 3vh);
  margin-bottom: var(--m-sm);
}
</style>
