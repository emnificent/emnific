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
    <p>🗓️ today is...</p>
    { #if today }
      { #if today.body }
        <h2>{today.body.fullDate}</h2>
        <p>{today.body.shortDate}</p>

        { #if today.body.holiday }
          <p>🎉 {today.body.holiday}</p>
        { /if }
      { :else }
        <p>there was an error</p>
      { /if }
    { :else }
      <p>loading...</p>
    { /if }
    <p class="source">source: <a href="https://lenorian.com" target="_blank">Lenorian calendar</a></p>
  </div>
</article>

<style lang="scss">
  article {
    @media screen and (width >= 992px) {
      display: flex;
      justify-content: center;
    }

    & h2 {
      font-weight: var(--fw--bold);
      font-size: calc(var(--fs-title) * 1rem);
    }

    & .source {
      margin-top: 0.25rem;
    }
  }
</style>