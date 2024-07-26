<script>
  const cypherText = 'OAIQKTXOXUHAVLCUALKCMIEYZMWALZSXLCFFWCEFMOOWGXEVQQWSGSYEUTTIMVIROEEERJSXVWCSCETAXIWHHDXAHNMEOHBNECKJRFDKIJALLHQHRXNLJVZXLEERJKLVMCNHFQCPODZLSXVHHDVDEHPGDRCSZJIPJVXACDSZLQJDZQUSFUPBPVSNUHAEGEHLWRFTOFHRJHHXPRAOPDMHVWVXVORQRWDSRXFXCBCNUHSZWILENOBOVGGIZKPOOYMBYGMQPXUSNYZYIIKFTDBZWDSHJBEDQPUUQFYLVRCWVGJJPBWPKAYVPHJYYQYLLQRCTIKOIKEXABPCUSRCLYJZTGPMPMSEOZKGDHNCUDCUOIFWAAUXAWWUVSFOCVFANRIUQWRRZKQCKNAJVSTKGXUZEYSEEZNTLLYNECYBSTAKPFTAGOTYGQYLZPRSXYNAWFNLCOXKDDKVALNERLNTHWFDNMERUMSOAUQXAPNPWJEBZYIOWEFOPYQUWTHBHFVYIGZKWPCXHURPPUZWAYBVXQLFHAAFGHWPVBUGBMBLFBPMZBWULEZZCEWNGBXYJSQESCZROBYBLZWNFKPEJABPPBBLILUQSLZVPCKZBZQQHGDMSLWXTBEMRTAWIICAUAHVCBFDFLPCMGQEYPLJPRXMLYFBINAATKWYHAEDPMLM';
  const alphabet = 'ILOVEUABCDFGHJKMNPQRSTWXYZ';
  const messagesIndexStart = [0, 41, 334];

  // NOTICE
  // 26 is more than a magic number, it's the length of a row

  // cut the cypher text into a table
  let cypherTextArray = cypherText.split('');
  const cypherTable = [];
  while (cypherTextArray.length > 0) {
    cypherTable.push(cypherTextArray.splice(0, 26));
  }

  // generate the alphabet table
  const alphabetFirstRow = alphabet.charAt(0);
  const alphabetTable = {};
  for (let i = 0; i < 26; i += 1) {
    let alphabetArray = alphabet.split('');
    let alphabetTail = alphabetArray.splice(0, i);
    let row = alphabetArray.concat(alphabetTail);
    let key = alphabet.charAt(i);
    alphabetTable[key] = row;
  }

  let timeoutIds = [];
  let isDecrypting = false;

  async function decrypt(message) {
    if (document.getElementById(`key${message}`).value === '') return;
    document.getElementById(`button${message}`).setAttribute('disabled', true);
    
    if (isDecrypting) await waitForDecryption();
    
    try {
      isDecrypting = true;
      const key = document.getElementById(`key${message}`).value.toUpperCase().replace(/[^A-Z]/g, '');

      await new Promise(resolve => {
        let keyIndex = 0;
    
        for (let i = messagesIndexStart[message]; i < cypherText.length; i += 1) {
          
          let cypherRow = Math.floor(i / 26);
          let alphabetRow = key.charAt(keyIndex % key.length);
          let encodedCharacter = cypherTable[cypherRow][i % 26];
          if (encodedCharacter === ' ') encodedCharacter = 'Z';
          let encodedCharacterIndex = alphabetTable[alphabetRow].indexOf(encodedCharacter);
          let decodedCharacter = alphabetTable[alphabetFirstRow][encodedCharacterIndex];
          
          // Z being the least used letter in English it's used to represent a space
          if (decodedCharacter === 'Z') decodedCharacter = ' ';
          
          let id = setTimeout(() => {
            cypherTable[cypherRow][i % 26] = decodedCharacter;
          }, keyIndex * 5);
    
          timeoutIds.push(id);
          keyIndex += 1;
        }

        let id = setTimeout(() => {
          resolve();
        }, (cypherText.length - messagesIndexStart[message]) * 5);
        timeoutIds.push(id);
      });
    } finally {
      isDecrypting = false;
    }
  }

  async function waitForDecryption() {
    return new Promise(resolve => {
      const intervalId = setInterval(() => {
        if (!isDecrypting) {
          clearInterval(intervalId);
          resolve();
        }
      }, 100);
    });
  }

  function reset() {
    for (let id of timeoutIds) {
      clearTimeout(id)
    };
    timeoutIds.length = 0;

    document.getElementById('key0').value = '';
    document.getElementById('key1').value = '';
    document.getElementById('key2').value = '';

    document.getElementById('button0').removeAttribute('disabled');
    document.getElementById('button1').removeAttribute('disabled');
    document.getElementById('button2').removeAttribute('disabled');

    cypherTable.length = 0;
    cypherTextArray = cypherText.split('');
    while (cypherTextArray.length > 0) {
      cypherTable.push(cypherTextArray.splice(0, 26));
    }
  }

  function isEnterPressed(event, message) {
    if (event.key !== 'Enter') return;
    decrypt(message);
  }
</script>

<main>
  <div class="table-wrapper">
    <table>
      { #each cypherTable as cypherTableRow }
        <tr>
          { #each cypherTableRow as cypherTableCell }
            <td>{cypherTableCell}</td>
          { /each }
        </tr>
      { /each }
    </table>
  </div>

  <div class="interactive">
    <div class="reset">
      <button on:click={reset}>(panic) reset</button>
    </div>
  
    <div class="questions-wrapper">
      <div class="question">
        <label for="key0">what's your name?</label>
        <input type="text" id="key0" on:keypress={(event) => isEnterPressed(event, 0)} />
        <button id="button0" on:click={() => decrypt(0)}>decrypt</button>
      </div>
    
      <div class="question">
        <label for="key1">I love you!</label>
        <input type="text" id="key1" on:keypress={(event) => isEnterPressed(event, 1)} />
        <button id="button1" on:click={() => decrypt(1)}>decrypt</button>
      </div>
    
      <div class="question">
        <label for="key2">what's my favorite drink?<br/>what are you for me? (noun)</label>
        <input type="text" id="key2" placeholder="write both answers here" on:keypress={(event) => isEnterPressed(event, 2)} />
        <button id="button2" on:click={() => decrypt(2)}>decrypt</button>
      </div>
    </div>
  </div>
</main>

<style lang="scss">
  main {
    margin-block: 2.5rem;
    display: block;
    
    @media screen and (width >= 768px) {
      margin-block: 5rem;
      margin-inline: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }

  .table-wrapper {
    overflow: auto;
    border-radius: 1rem;
  }

  table {
    background-color: var(--c-dark--deeper);
    padding: 1rem;
  }
  
  td {
    font-family: 'Cutive Mono', monospace;
    line-height: 1;
    height: 1.5rem;
    width: 1.5rem;
    text-align: center;
  }

  .interactive {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    @media screen and (width >= 768px) {
      margin-top: 0;
    }
  }
  
  .reset {
    & button {
      width: 100%;
      background-color: var(--c-dark--deeper);
      color: hsl(0, 100%, 41%);
      border: 2px solid hsl(0, 100%, 41%);
      font-weight: var(--fw--bold);
      text-transform: uppercase;
      padding: 1rem;
      border-radius: 1rem;
      transition: background-color 0.3s, color 0.3s;

      &:hover,
      &:focus-visible {
        background-color: hsl(0, 100%, 41%);
        color: var(--c-dark--deeper);
      }
    }
  }

  .questions-wrapper {
    display: contents;

    @media screen and (width >= 1280px) {
      display: grid;
      grid-template: auto / repeat(3, 1fr);
      gap: 2rem;
      align-items: end;
    }
  }

  .question {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media screen and (width >= 1280px) {
      max-width: 19rem;
    }

    & input {
      background-color: var(--c-dark--deeper);
      border: transparent;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
    }

    & button {
      background-color: var(--c-dark);
      color: var(--c-primary);
      border: 2px solid var(--c-primary);
      padding: 0.5rem;
      border-radius: 1rem;
      transition: background-color 0.3s, color 0.3s;

      &:hover,
      &:focus-visible {
        background-color: var(--c-primary);
        color: var(--c-white);
      }

      &:disabled {
        opacity: 0.5;
      }
    }
  }
</style>