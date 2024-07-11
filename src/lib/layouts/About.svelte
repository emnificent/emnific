<script>
  import AboutList from '../components/AboutList.svelte';

  const identity = {
    title: 'identity',
    items: [
      { emoji: '⚧️', text: 'trans woman' },
      { emoji: '💘', text: '<abbr data-title="attracted to women/-aligned people" tabindex="0" aria-description="attracted to women and woman-aligned non-binary people">sapphic</abbr>' },
      { emoji: '🍑', text: 'domme' },
      { emoji: '🔒', text: 'taken' },
      // { emoji: '🔓', text: 'available, <a href="/date">date me?</a>' },
      { emoji: '🧠', text: 'adhd' },
      { emoji: '🥖', text: 'french' },
    ]
  };

  const activity = {
    title: 'activity',
    items: [
      { emoji: '💡', text: 'entrepreneur' },
      // -> founder.emnificent: symfairy, lustuptoys
      { emoji: '💻', text: 'web app developer' },
      // -> dev.emnificent: breadfight, lenorian, lustpad, discord bots
      { emoji: '🎧', text: 'music producer' },
      // -> music.emnificent: musiquefatale
      { emoji: '🐈‍⬛', text: 'cats caretaker' },
      { emoji: '🌐', text: '<a href="https://domains.emnificent.com" target="_blank">domains for sale</a>' },
    ]
  };

  const politics = {
    title: 'politics',
    items: [
      { emoji: '✊🏼', text: 'social anarchist' },
      { emoji: '💢', text: 'antifascist' },
      { emoji: '💪🏼', text: 'feminist' },
      { emoji: '🌳', text: 'ecologist' },
      // { emoji: '🗞️', text: '<a href="/blog">read my blog</a>' },
      // { emoji: '🗨️', text: '<a href="/quotes">quotes I like</a>' },
    ]
  };

  const about = [
    identity,
    activity,
    politics
  ];
</script>

<div>
  { #each about as section }
    <AboutList { section } />
  { /each }
</div>

<style>
  div {
    display: contents;

    @media screen and (width >= 768px) {
      display: grid;
      grid-template: auto / repeat(2, 1fr);
      gap: 2rem 1.5rem;
    }

    @media screen and (width >= 992px) {
      grid-template: auto / repeat(3, 1fr);
    }
  }
</style>