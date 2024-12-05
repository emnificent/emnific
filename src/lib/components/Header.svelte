<script>
  import logo from '$lib/images/logo.svg';
  import { page } from '$app/stores';
</script>

<header>
  <a href="/">
    <img src={logo} alt="butterfly">
  </a>

  { #if $page.url.pathname === '/date' }
    <p>a date?</p>
  { :else }
    <p>hey!</p>
  { /if }
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