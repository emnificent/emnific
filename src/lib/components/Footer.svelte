<script>
  const year = new Date().getFullYear();
</script>

<footer> 
  <p> © {year} <a href="https://dev.emnificent.com" target="_blank">emnificent</a></p>
</footer>

<style lang="scss">
  p {
    font-size: calc(var(--fs-text--small) * 1rem);
    line-height: 1;
    text-align: center;
    opacity: 0.5;
  }

  a {
    text-decoration: none;

    &:hover,
    &:focus {
      color: var(--c-light);
    }
  }

  footer {
    padding-block: 2rem 0.5rem;

    /* everything below puts the footer where it belongs */
    margin-top: auto;
  }

  :global(body) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>