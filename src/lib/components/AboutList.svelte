<script>
  export let section;
</script>

<article>
  <h2>{ section.title }</h2>
  <ul>
    { #each section.items as item }
    <li>
      <p>{ item.emoji } { @html item.text }</p>
    </li>
    { /each }
  </ul>
</article>

<style lang="scss">
  h2 {
    font-weight: var(--fw--bold);
    font-size: var(--fs-title);
    text-transform: capitalize;
    margin-bottom: 0.25rem;
  }

  ul {
    list-style: none;
  }

  :global(.small-text) {
    font-size: var(--fs-text--small);
    opacity: 0.5;
    
    &:has(a:hover),
    &:has(a:focus-visible) {
      opacity: 1;
    }
  }
</style>