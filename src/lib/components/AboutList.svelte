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

<style>
  h2 {
    font-weight: var(--fw--bold);
    font-size: calc(var(--fs-title) * 1rem);
    text-transform: capitalize;
    margin-bottom: 0.25rem;
  }

  ul {
    list-style: none;
  }
</style>