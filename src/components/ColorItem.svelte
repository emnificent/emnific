<script>
  export let color;

  let reveal = false;

  const colorCopyKeyboard = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    colorCopy(event);
  }

  const colorCopy = (event) => {
    let target = event.target;
    while (target.tagName !== 'ARTICLE') {
      target = target.parentNode;
    }

    let data = !event.shiftKey ? target.querySelector('.hex') : target.querySelector('.hsl');
    data = data.textContent.replace('°', '');
    if (data.includes('HSL')) data = data.replace(' ', '(').toLowerCase() + ')';
    
    navigator.clipboard.writeText(data);
    target.blur();

    reveal = true;
    setTimeout(() => { reveal = false; }, 1000);
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article class="{ color.name }" tabindex="0" on:click={colorCopy} on:keydown={colorCopyKeyboard}>
  <div class="blurry-background { color.name }"></div>
  <h3>{ color.name }</h3>
  <div>
    <p class="hex">{ color.hex }</p>
    <p class="hsl">HSL { color.hsl }</p>
  </div>
  <div class="copied-marker" class:reveal={reveal}><p>copied!</p></div>
</article>

<style lang="scss">
  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--c-dark);
    height: 8rem;
    padding: 1rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;

    &.dark {
      color: var(--c-light);
    }

    &:hover,
    &:focus {
      outline: transparent;
      background-color: var(--c-dark);

      /* not sure why it wouldn't transition slowly otherwise */
      & p, h3 {
        transition: all 0.3s;
      }

      & p {
        color: var(--c-light);
      }

      &.emgreen {
        box-shadow: inset 0.125rem 0.125rem 0.25rem var(--c-primary),
                    inset -0.125rem -0.125rem 0.25rem var(--c-primary);
        
        & h3 {
          color: var(--c-primary);
        }
        
        &.dark {
          box-shadow: inset 0.125rem 0.125rem 0.25rem var(--c-primary--darker),
                      inset -0.125rem -0.125rem 0.25rem var(--c-primary--darker);
          
          & h3 {
            color: var(--c-primary--darker);
          }
        }

        &.light {
          box-shadow: inset 0.125rem 0.125rem 0.25rem var(--c-primary--lighter),
                      inset -0.125rem -0.125rem 0.25rem var(--c-primary--lighter);

          & h3 {
            color: var(--c-primary--lighter);
          }
        }
      }
    }
  }

  .blurry-background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    filter: blur(1.5rem);
    z-index: -1;

    &.emgreen {
      background-color: var(--c-primary);

      &.dark {
        background-color: var(--c-primary--darker);
      }

      &.light {
        background-color: var(--c-primary--lighter);
      }
    }
  }

  h3 {
    font-weight: var(--fw--bold);
    font-size: calc(var(--fs-title--small) * 1rem);
    text-transform: capitalize;
  }

  p {
    font-weight: var(--fw--light);
  }

  .copied-marker {
    position: absolute;
    background-color: var(--c-dark--deeper);
    color: var(--c-light);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.25s;
    
    &.reveal {
      opacity: 1;
    }

    & p {
      font-weight: var(--fw--bold);
    }
  }
</style>