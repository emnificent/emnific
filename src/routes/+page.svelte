<script>
  import About from '../layouts/About.svelte';
  import Colors from '../layouts/Colors.svelte';
  import Hero from '../components/Hero.svelte';
  import Discord from '../components/Discord.svelte';
  import Domains from '../components/Domains.svelte';
</script>

<main>
  <Hero />

  <About />

  <Colors />

  <div class="desktop-two-one-layout">
    <Discord />
  
    <Domains />
  </div>
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

  .desktop-two-one-layout {
    display: contents;

    @media screen and (width >= 992px) {
      display: grid;
      grid-template: auto / repeat(3, 1fr);
      grid-template-areas: "discord discord domains";
      gap: 1.5rem;
    }
  }
</style>