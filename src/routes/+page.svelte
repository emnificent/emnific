<script>
  import About from '$lib/layouts/About.svelte';
  import Colors from '$lib/layouts/Colors.svelte';
  import Hero from '$lib/components/Hero.svelte';
	import Today from '../lib/components/Today.svelte';
	import Tickertape from '../lib/components/Tickertape.svelte';
</script>

<main>
  <Hero />
  <About />
  <Tickertape />
  <Today />
  <Colors />
</main>

<style lang="scss">
  main {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (width >= 1280px) {
      gap: 3rem;
    }
  }
</style>