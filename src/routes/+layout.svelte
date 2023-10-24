<script>
  import '$lib/styles/reset.scss';
  import '$lib/styles/global.scss';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />

<slot />

<Footer />