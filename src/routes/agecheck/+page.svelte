<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  function goHome() {
    goto('/');
  }

  function goForward() {
    const target = $page.url.searchParams.get('target');
    goto(`/${target}`);
  }
</script>

<main>
  <p>are you at least 18 years of age?</p>
  <div>
    <button on:click={goHome}>I am under 18</button>
    <button on:click={goForward}>I am 18 or older</button>
  </div>
</main>

<style lang="scss">
  main {
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    margin-top: auto;
    @media screen and (width >= 1280px) {
      margin-block: 3rem;
    }

    @media screen and (width >= 768px) {
      gap: 2rem;
    }
  }
  
  p {
    text-align: center;
    font-weight: var(--fw--bold);
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    
    @media screen and (width >= 768px) {
      gap: 2rem;
    }
  }

  button {
    padding: 1.5rem;
    border-radius: 0.5rem;
    border: transparent;
    font-weight: var(--fw--bold);

    &:first-child {
      background-color: oklch(from var(--c-background) calc(l + 0.1) c h);
      color: var(--c-text);
      transition: color 0.3s, background-color 0.3s;

      &:hover,
      &:focus-visible {
        background-color: oklch(from var(--c-background) calc(l + 0.4) c h);
        color: var(--c-background);
      }
    }

    &:last-child {
      background-color: var(--c-primary--darker);
      color: var(--c-text);
      transition: color 0.3s, background-color 0.3s;

      &:hover,
      &:focus-visible {
        background-color: var(--c-primary--lighter);
        color: var(--c-background);
      }
    }
  }
</style>