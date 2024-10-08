<script>
  import ColorItem from '../components/ColorItem.svelte';

  const colors = [
    { name: 'emgreen', hex: '#00BC7B', oklch: '0.7 0.16 160' },
    { name: 'dark emgreen', hex: '#008668', oklch: '0.55 0.11 170' },
    { name: 'light emgreen', hex: '#45F27F', oklch: '0.85 0.21 150' }
  ]
</script>

<section>
  <h2>Colors</h2>
  <div>
    { #each colors as color }
      <ColorItem { color } />
    { /each }
  </div>
</section>

<style>
  h2 {
    font-weight: var(--fw--bold);
    font-size: var(--fs-title);
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (width >= 768px) {
      display: grid;
      grid-template: auto / repeat(2, 1fr) ;
      gap: 1.5rem;
    }

    @media screen and (width >= 1280px) {
      grid-template: auto / repeat(3, 1fr);
    }
  }
</style>