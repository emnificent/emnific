<script>
  const causes = [
    '💲 eat the rich 💲',
    '🚓 learn your acab 🚓',
    '🇵🇸 free Palestine 🇵🇸',
    '✊🏿 black lives matter ✊🏿',
    '⚧️ trans rights are human rights ⚧️',
    '🍑 sex work is real work 🍑',
    '⚕️ abortion is healthcare ⚕️',
  ]

  // Fisher-Yates x Durstenfeld
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(causes);
</script>

<section class="container">
  { #each Array(2) as _ }
    <div class="tickertape">
      { #each causes as cause }
        <h2>{ cause }</h2>
      { /each }
    </div>
  { /each }
</section>

<style lang="scss">
  .container {
    overflow: hidden;
    display: flex;
    flex-flow: row nowrap;

    @media (prefers-reduced-motion: reduce) {
      overflow: auto;
    }
  }

  .tickertape {
    display: flex;
    flex-flow: row nowrap;

    animation: 30s linear infinite tickslide;
  }

  @keyframes tickslide {
    from {
      translate: 0%;
    }
    to {
      translate: -100%;
    }
  }

  h2 {
    white-space: nowrap;
    margin-left: 2.5rem;
  }
</style>