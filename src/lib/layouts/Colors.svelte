<script>
  import ColorItem from '../components/ColorItem.svelte';

  const colors = [
    { name: 'emgreen', hex: '#14B874', hsl: '155°, 80%, 40%' },
    { name: 'dark emgreen', hex: '#0D7359', hsl: '165°, 80%, 25%' },
    { name: 'light emgreen', hex: '#30E87D', hsl: '145°, 80%, 55%' }
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
    font-size: calc(var(--fs-title) * 1rem);
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

    @media screen and (width >= 992px) {
      grid-template: auto / repeat(3, 1fr);
    }
  }
</style>