<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const canvas = document.getElementById('hero-canvas');

    for (let i = 0; i < 25; i++) {
      let bubble = document.createElement('span');
      // [-10; 90]
      const top = `top:${randomInt(100) - 10}%`;
      const left = `left:${randomInt(100) - 10}%`;
      // [5; 25]
      const width = `width:${randomInt(20) + 5}vw`;
      // [10; 20]
      const speed = `animation-duration:${randomInt(10) + 10}s`;
      const colors = ['emgreen', 'dark-emgreen', 'light-emgreen'];
      const animation = ['normal', 'reverse'];

      bubble.setAttribute('style', `${top}; ${left}; ${width}; ${speed}`);
      bubble.classList.add('bubble', 
        `bubble-${colors[Math.floor(Math.random() * colors.length)]}`,
        `bubble-${animation[Math.floor(Math.random() * animation.length)]}`
      );

      canvas.appendChild(bubble);
    }
  })

  // [0; seed]
  const randomInt = (seed) => Math.floor(Math.random() * (seed + 1));
</script>

<div class="hero">
  <p>my name is</p>
  <div class="hero-canvas__container">
    <h1>Emilie</h1>

    <div class="hero-canvas" id="hero-canvas"></div>

    <svg width="0" height="0">
      <clipPath id="hero-mask-mobile">
        <text x="-5.6" y="90" color="#fff">Emilie</text>
      </clipPath>
    </svg>

    <svg width="0" height="0">
      <clipPath id="hero-mask-tablet">
        <text x="-13.6" y="200" color="#fff">Emilie</text>
      </clipPath>
    </svg>

    <svg width="0" height="0">
      <clipPath id="hero-mask-desktop-small">
        <text x="-18.4" y="265" color="#fff">Emilie</text>
      </clipPath>
    </svg>

    <svg width="0" height="0">
      <clipPath id="hero-mask-desktop">
        <text x="-20" y="278" color="#fff">Emilie</text>
      </clipPath>
    </svg>
  </div>
</div>

<style lang="scss">
  .hero {
    position: relative;

    & h1,
    & text {
      font-weight: var(--fw--bold);
      font-size: 6.75rem;
      line-height: 1;
      margin-left: -0.35rem;

      @media screen and (width >= 768px) {
        font-size: 14.75rem;
        margin-left: -0.85rem;
      }

      @media screen and (width >= 992px) {
        font-size: 19.5rem;
        margin-left: -1.15rem;
      }

      @media screen and (width >= 1040px) {
        font-size: 20.5rem;
        margin-left: -1.25rem;
      }
    }

    & h1 {
      opacity: 0;
    }

    & p {
      line-height: 1;
      position: absolute;
      top: -0.125rem;
      z-index: 99;

      @media screen and (width >= 768px) {
        top: 1.05rem;
      }

      @media screen and (width >= 992px) {
        font-weight: var(--fw--bold);
        top: 1.8rem;
      }

      @media screen and (width >= 1040px) {
        top: 1.95rem;
      }
    }
  }

  .hero-canvas__container {
    position: relative;
    display: flex;
  }

  .hero-canvas {
    background-color: var(--c-primary);
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    clip-path: url(#hero-mask-mobile);

    @media screen and (width >= 768px) {
      clip-path: url(#hero-mask-tablet);
    }

    @media screen and (width >= 992px) {
      clip-path: url(#hero-mask-desktop-small);
    }

    @media screen and (width >= 1040px) {
      clip-path: url(#hero-mask-desktop);
    }
  }

  :global(.bubble) {
    position: absolute;
    aspect-ratio: 1/1;
    border-radius: 50%;
    filter: blur(1.25vw);
    animation: circular-motion 10s linear infinite;
  }

  :global(.bubble-emgreen) {
      background-color: var(--c-primary);
    }

  :global(.bubble-dark-emgreen) {
    background-color: var(--c-primary--darker);
  }

  :global(.bubble-light-emgreen) {
    background-color: var(--c-primary--lighter);
  }

  :global(.bubble-reverse) {
    animation-direction: reverse;
  }

  @keyframes circular-motion {
    from {
      transform: rotate(0deg) translate(3.25vw) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translate(3.25vw) rotate(-360deg);
    }
  }
</style>