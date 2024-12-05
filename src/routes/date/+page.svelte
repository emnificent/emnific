<script>
  let deleteTag = false;
  function count(event) {
    const message = event.target.value;
    const characters = message.length;
    const counter = document.getElementById('message-counter');
    counter.textContent = 500 - characters;

    // also updates the submit button
    const button = document.getElementById('submit-button');
    if (message.toUpperCase() === 'DELETE') {
      const username = document.getElementById('contact').value;
      button.textContent = `delete ${username} data`.toUpperCase();
      button.classList.add('delete');
      deleteTag = true;
    }
    if (deleteTag & characters !== 6) {
      button.textContent = `let's date!`;
      button.classList.remove('delete');
      deleteTag = false;
    }
  }

  let age = new Date(Date.now() - Date.parse('1996-08-23')).getFullYear() - 1970;

  export let form;
  if (form?.error) {
    console.error(form.details);
  }
</script>

<svelte:head>
  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<main>
  { #if form?.success }
    <p class="form-submitted-message">your lustful submission is in my hands now...<br/>let's see if you have what it takes to catch my attention! 💋</p>
  { :else if form?.deleteRequest }
    <p class="form-submitted-message error">your data will be deleted shortly.</p>
  { :else if form?.error }
    <p class="form-submitted-message error">sorry, there was an error, try again later.</p>
  { /if }
  
  <form method="POST">
    <fieldset class="intent">
      <legend>Intent</legend>
  
      <p>what are you looking for?</p>
      <div>
        <label><span class="checkbox"><input type="checkbox" name="play" /></span>play</label>
        <label><span class="checkbox"><input type="checkbox" name="romance" /></span>romance</label>
      </div>
      <div>
        <label><span class="checkbox"><input type="checkbox" name="irl" /></span>in person</label>
        <label><span class="checkbox"><input type="checkbox" name="online" /></span>online</label>
      </div>
    </fieldset>
  
    <fieldset>
      <legend>Personal Details</legend>
  
      <div>
        <label for="name">what's your name?</label>
        <input type="text" id="name" name="name" />
      </div>
  
      <div>
        <label for="identity">how do you identify?</label>
        <input type="text" id="identity" name="identity" />
        <p class="comment">example: trans woman, she/her</p>
      </div>
  
      <div>
        <label for="age">how old are you?</label>
        <input type="number" id="age" name="age" />
        <p class="comment">me? {age}</p>
      </div>
  
      <div>
        <label for="country">what's your home country?</label>
        <input type="text" id="country" name="country" />
        <p class="comment">just to get an idea of the time difference</p>
      </div>
    </fieldset>
  
    <fieldset>
      <legend>Desires</legend>
  
      <div>
        <label for="asexual">are you asexual?</label>
        <select name="asexual" id="asexual">
          <option value=""></option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </div>
  
      <div>
        <label for="kinkiness">how kinky are you?</label>
        <select name="kinkiness" id="kinkiness">
          <option value=""></option>
          <option value="vanilla">vanilla</option>
          <option value="curious">open to explore</option>
          <option value="casually">casually kinky</option>
          <option value="moderately">moderately kinky</option>
          <option value="very">very kinky; it's essential</option>
        </select>
      </div>
  
      <div>
        <label for="role">what's your role?</label>
        <select name="role" id="role">
          <option value=""></option>
          <option value="submissive">submissive</option>
          <option value="switch">switch</option>
          <option value="dominant">dominant</option>
          <option value="unknown">I don't know</option>
        </select>
      </div>
    </fieldset>
    
    <fieldset>
      <legend>Miscellaneous</legend>
  
      <div>
        <label for="cats">do you like cats?</label>
        <select name="cats" id="cats">
          <option value=""></option>
          <option value="yes">yes</option>
          <option value="allergic">I'm allergic</option>
          <option value="no">no</option>
        </select>
      </div>
  
      <div>
        <label for="bugs">are you scared of (some) bugs?</label>
        <select name="bugs" id="bugs">
          <option value=""></option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
      </div>
  
      <div>
        <label for="pets">what pets do you care for?</label>
        <input type="text" id="pets" name="pets" />
        <p class="comment">if any; otherwise leave blank</p>
      </div>
  
      <div>
        <label for="music">what music genres are you into?</label>
        <input type="text" id="music" name="music" />
      </div>
  
      <div>
        <label for="alcohol">how often do you drink alcohol?</label>
        <select name="alcohol" id="alcohol">
          <option value=""></option>
          <option value="never">never</option>
          <option value="rarely">rarely</option>
          <option value="socially">socially</option>
          <option value="monthly">once or twice a month</option>
          <option value="weekly">once a week</option>
          <option value="daily">more than once a week</option>
        </select>
      </div>
  
      <div>
        <label for="smoker">are you a smoker?</label>
        <select name="smoker" id="smoker">
          <option value=""></option>
          <option value="no">no</option>
          <option value="occasionally">(sometimes) when partying</option>
          <option value="tobacco">yes, tobacco</option>
          <option value="weed">yes, weed</option>
          <option value="tobacco, weed">yes, tobacco and weed</option>
        </select>
      </div>
  
      <div>
        <label for="drugs">do you take recreational drugs?</label>
        <select name="drugs" id="drugs">
          <option value=""></option>
          <option value="no">no</option>
          <option value="occasionally">(sometimes) when partying</option>
          <option value="yes">regularly</option>
        </select>
        <p class="comment">excluding weed, see previous question</p>
      </div>
  
      <div>
        <label for="politics">what's your political ideology?</label>
        <select name="politics" id="politics">
          <option value=""></option>
          <option value="anarchist">anarchist</option>
          <option value="communist">communist</option>
          <option value="socialist">socialist</option>
          <option value="green">green</option>
          <option value="liberal">liberal</option>
          <option value="centrist">centrist / moderate</option>
          <option value="libertarian">libertarian / anarcho-capitalist</option>
          <option value="conservative">conservative</option>
          <option value="nationalist">nationalist</option>
          <option value="apolitical">apolitical</option>
          <option value="other">other</option>
        </select>
      </div>
  
      <div>
        <label for="activist">are you politically active?</label>
        <select name="activist" id="activist">
          <option value=""></option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
        <p class="comment">do you protest, campaign, vote? etc.</p>
      </div>
  
      <div>
        <label for="genocide">who do you support?</label>
        <select name="genocide" id="genocide">
          <option value=""></option>
          <option value="Israel">Israel</option>
          <option value="Palestine">Palestine</option>
        </select>
      </div>
    </fieldset>
  
    <fieldset>
      <legend>Contact</legend>
      
      <div>
        <label for="contact">how should I reach out?</label>
        <input type="text" id="contact" name="contact" />
        <p class="comment">example: Discord @username</p>
      </div>
  
      <div class="message">
        <label for="message">do you wish to add a message?</label>
        <textarea name="message" id="message" rows="3" maxlength="500" on:input={count}></textarea>
        <p class="message__counter" id="message-counter">500</p>
      </div>
    </fieldset>
  
    <div class="cf-turnstile" data-sitekey="0x4AAAAAAA1geiX4oWDPat5J" data-size="flexible" data-theme="dark"></div>
  
    <button id="submit-button">let's date!</button>
  
    <div class="gdpr">
      <h2>GDPR Notice</h2>
      <p>As per the GDPR law, you can request your data to be deleted at any time.</p>
      <p>To delete your data, in the Contact section above:</p>
      <ol>
        <li>type your username in the first field,</li>
        <li>type DELETE in the message box,</li>
        <li>the button will update and say:<br/>DELETE &lt;USERNAME&gt; DATA</li>
        <li>submit the form.</li>
      </ol>
    </div>
  </form>
</main>

<style lang="scss">
  form {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (width >= 1280px) {
      gap: 3rem;
    }
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & legend {
      font-weight: var(--fw--bold);
      font-size: var(--fs-title);
      text-transform: capitalize;
      margin-bottom: 0.25rem;
    }

    & div {
      display: flex;
      flex-direction: column;
    }
  }

  .comment {
    font-size: var(--fs-text--small);
    opacity: 0.5;
  }

  .message {
    position: relative;
    
    & .message__counter {
      position: absolute;
      bottom: 4px;
      right: 0;
      opacity: 1;
      padding: 0.125rem 0.25rem 0 0.375rem;
      pointer-events: none;
      opacity: 0.5;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--c-background);
        border-radius: 0.5rem 0 0.5rem 0;
        mix-blend-mode: difference;
      }
    }
  }

  input,
  select,
  textarea {
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    margin-block: 0.25rem;
	  background-color: oklch(from var(--c-background) calc(l + 0.1) c h);
    border: transparent;
    resize: vertical;
  }

  button {
    padding: 1.25rem 0.25rem;
    border: transparent;
    border-radius: 0.5rem;
    font-weight: var(--fw--bold);
    background-color: var(--c-primary--darker);
    transition: color 0.3s, background-color 0.3s, border-radius 0.3s;
    
    &:hover,
    &:focus-visible {
      background-color: var(--c-primary--lighter);
      color: var(--c-background);
      border-radius: 2.5rem;
    }

    &.delete {
      background-color: hsl(from var(--c-primary--darker) calc(h + 180) s l);

      &:hover,
      &:focus-visible {
        background-color: hsl(from var(--c-primary--lighter) calc(h + 180) s l);
      }
    }
  }

  .intent {
    gap: 0.25rem;

    & div {
      flex-direction: row;
      gap: 2rem;
    }
    & label {
      display: flex;
      gap: 0.5rem;
    }
  }

  .checkbox {
    position: relative;

    & input {
      width: 1.5rem;
      aspect-ratio: 1/1;
      opacity: 0;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 1.5rem;
      aspect-ratio: 1/1;
      border-radius: 0.25rem;
      background-color: oklch(from var(--c-background) calc(l + 0.1) c h);
      border: 2px solid transparent;
      z-index: 99;
    }

    &:hover,
    &:focus-within {
      &::after {
        background-color: oklch(from var(--c-background) calc(l + 0.2) c h);
        border-color: var(--c-primary);
      }
    }

    &:has(input:checked) {
      &::after {
        background-color: var(--c-primary--darker);
      }

      &::before {
        content: '';
        position: absolute;
        top: 0.25rem;
        left: 0.25rem;
        height: 1rem;
        aspect-ratio: 1/1;
        border-radius: 0.125rem;
        background: var(--c-primary--lighter);
        z-index: 999;
      }
    }
  }

  .gdpr {
    opacity: 0.5;
    font-size: var(--fs-text--small);

    & h2 {
      font-weight: var(--fw--bold);
      font-size: var(--fs-text);
    }

    & ol {
      position: relative;
      left: 1.125rem;
    }
  }

  .form-submitted-message {
    margin-top: 3rem;
    text-align: center;
    background-color: oklch(from var(--c-primary) l c h / 0.25);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    &.error {
      background-color: hsl(from var(--c-primary) calc(h + 180) s l / 0.25);
    }
  }
</style>