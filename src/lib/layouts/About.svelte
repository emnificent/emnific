<script>
  import AboutList from '../components/AboutList.svelte';

  const identity = {
    title: 'identity',
    items: [
      { emoji: '⚧️', text: 'trans woman' },
      { emoji: '💘', text: '<abbr data-title="attracted to women/-aligned people" tabindex="0" aria-description="attracted to women and woman-aligned non-binary people">sapphic</abbr>' },
      { emoji: '🍑', text: 'domme' },
      { emoji: '🧠', text: 'adhd' }
    ]
  };

  const activity = {
    title: 'activity',
    items: [
      { emoji: '💻', text: 'web app developer' },
      { emoji: '🎧', text: 'music producer' },
      { emoji: '🐈‍⬛', text: 'cats caretaker' }
    ]
  };

  const politics = {
    title: 'politics',
    items: [
      { emoji: '✊🏼', text: 'social anarchist' },
      { emoji: '💢', text: 'anti-fascist' },
      { emoji: '🥖', text: 'french' }
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