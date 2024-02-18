<script>
  import logo from '$lib/images/logo.svg';
</script>

<header>
  <a href="/">
    <img src={logo} alt="butterfly">
  </a>
  <p>hey!</p>
</header>

<style lang="scss">
  header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;

    & img {
      height: 3rem;
    }

    & p {
      font-size: 3rem;
      line-height: 1;
    }
  }
</style>