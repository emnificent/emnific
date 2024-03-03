<script>
  import About from '$lib/layouts/About.svelte';
  import Colors from '$lib/layouts/Colors.svelte';
  import Hero from '$lib/components/Hero.svelte';
  // import Discord from '$lib/components/Discord.svelte';
  import Domains from '$lib/components/Domains.svelte';
	import Today from '../lib/components/Today.svelte';
	import Tickertape from '../lib/components/Tickertape.svelte';
</script>

<main>
  <Hero />
  <About />
  <Tickertape />
  <Today />
  <Colors />
  
  <!-- <div class="desktop-two-one-layout">
    <Discord />
    <Domains />
  </div> -->

  <Domains />
</main>

<style lang="scss">
  main {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (width >= 992px) {
      gap: 3rem;
    }
  }

  /* .desktop-two-one-layout {
    display: contents;

    @media screen and (width >= 992px) {
      display: grid;
      grid-template: auto / repeat(3, 1fr);
      grid-template-areas: "discord domains domains";
      gap: 1.5rem;
    }
  } */
</style>