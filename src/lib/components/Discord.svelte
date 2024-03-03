<section class="discord">
  <h2>Discord servers</h2>
  <ul>
    <li>
      <a href="https://discord.gg/MnM3WNUn8K" target="_blank">
        <article>
          <div class="blurry-background"></div>
          <h3>The Circle</h3>
          <p>a safe space to experiment, brainstorm, get feedback, talk, share things you enjoy</p>
        </article>
      </a>
    </li>
    <li>
      <a href="https://discord.gg/kCkQajBWSd" target="_blank">
        <article>
          <div class="blurry-background"></div>
          <h3>Emotes Packs Hub</h3>
          <p>a hub where you can find my emotes servers: LGBT+, leftist, miscellaneous...</p>
        </article>
      </a>
    </li>
  </ul>
</section>

<style lang="scss">
  section {
    --discord-color: #5865F2;

    @media screen and (width >= 992px) {
      grid-area: discord;
    }
  }

  h2 {
    font-weight: var(--fw--bold);
    font-size: calc(var(--fs-title) * 1rem);
    margin-bottom: 0.5rem;
  }
  
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (width >= 768px) {
      display: grid;
      grid-template: auto / repeat(2, 1fr);
      gap: 1.5rem;
    }

    @media screen and (width >= 992px) {
      display: flex;
      flex-direction: column;
    }
  }

  li {
    display: flex;
  }

  a {
    text-decoration: none;
    display: flex;
    border-radius: 1rem;

    &:hover,
    &:focus {
      outline: transparent;
      color: var(--discord-color);

      & article {
        background-color: var(--c-dark);
        box-shadow: inset 0.125rem 0.125rem 0.25rem var(--discord-color),
                    inset -0.125rem -0.125rem 0.25rem var(--discord-color);
      }
    }
  }

  article {
    padding: 1rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
  }

  .blurry-background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--discord-color);
    filter: blur(1.5rem);
    z-index: -1;
  }

  h3 {
    font-weight: var(--fw--bold);
    font-size: calc(var(--fs-title--small) * 1rem);
    margin-bottom: 0.25rem;
  }
</style>