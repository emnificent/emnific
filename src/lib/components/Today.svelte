<script>
	import { onMount } from "svelte";

  let today;
  onMount(async () => {
    const offset = new Date().getTimezoneOffset();
    const response = await fetch(`https://lenorian.com/api/convert?offset=${offset}`);
    today = await response.json();

    // ! development: prevent API spamming, don't forget to comment before shipping
    // TODO replace onMount API call with a store: no longer need the API bypass
    // today = { body: { shortDate: "0000-09-22", fullDate: "Secundi 22 Treter 0", holiday: "Universal Declaration of Human Rights Day" } }
  });
</script>

<article>
  <div>
    { #if today }
      { #if today.body }
        <div class="today__header">
          <p>🗓️ today is...</p>
          <p>{today.body.shortDate}</p>
        </div>
        <h2 class="today">
          <span class="today__day">{today.body.fullDate.split(' ')[0]}<br/></span>
          {today.body.fullDate.split(' ').filter((e, i) => i > 0).join(' ')}
        </h2>

        <!-- { #if today.body.holiday }
          <p>🎉 {today.body.holiday}</p>
        { /if } -->
      { :else }
        <p>🗓️ today is...</p>
        <p>there was an error</p>
      { /if }
    { :else }
      <p>🗓️ today is...</p>
      <p>loading...</p>
    { /if }
    <p class="source">⚡️ powered by the <a href="https://lenorian.com" target="_blank">Lenorian calendar</a></p>
  </div>
</article>

<style lang="scss">
  article {
    @media screen and (width >= 768px) {
      display: flex;
      justify-content: center;
    }

    & .today__header {
      display: flex;
      justify-content: space-between;
    }

    & .today {
      font-weight: var(--fw--bold);
      font-size: var(--fs-title);
      
      @media screen and (width < 768px) {
        line-height: 1.2;
        margin-bottom: 0.25rem;
      
        & .today__day {
          font-size: var(--fs-text);
        }
      }

      @media screen and (width >= 768px) {
        & br {
          display: none;
        }
      }
    }

    & .source {
      font-size: var(--fs-text--small);
      opacity: 0.5;

      &:hover,
      &:focus-visible {
        opacity: 1;
      }
    }
  }
</style>