<script>
  let domainsList = [
    'anaranar.com',
    'antifamail.org',
    'antifapost.com',
    'blackcats.party',
    'bum.su',
    'emilie.fun',
    'emilie.pm',
    'lust.sx',
    'lustfulslut.com',
    'struggleunion.com',
    'testtube.work'
  ]

  // Fisher-Yates x Durstenfeld
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(domainsList);
</script>

<section>
  <h2>Expiring Domains</h2>
  <ul id="domains-list">
    { #each domainsList as domainName }
      <li><a href="https://{domainName}" target="_blank">{domainName}</a></li>
    { /each }
  </ul>
</section>

<style lang="scss">
  /* section {
    grid-area: domains;
  } */

  h2 {
    font-weight: var(--fw--bold);
    font-size: calc(var(--fs-title) * 1rem);
    margin-bottom: 0.25rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media screen and (width >= 768px) {
      display: grid;
      grid-template: auto / repeat(2, 1fr);
      gap: 0.5rem 1.5rem;
    }

    @media screen and (width >= 992px) {
      display: grid;
      grid-template: auto / repeat(3, 1fr);
    }
  }

  a {
    font-family: monospace;
  }
</style>