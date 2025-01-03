import { fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    if (!data.get('cf-turnstile-response')) {
      return fail(401, {
        error: true,
        type: 'human',
        details: {
          status: 401,
          message: 'are you human?'
        }
      });
    }

    // TURNSTILE CHECK START
    const SECRET_KEY = '0x4AAAAAAA1getBuVocEaWFdd8q4_X2Rv4c';

    const token = data.get('cf-turnstile-response');
    const ip = request.headers.get('CF-Connecting-IP');

    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const result = await fetch(url, {
      body: JSON.stringify({
        secret: SECRET_KEY,
        response: token,
        remoteip: ip
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const outcome = await result.json();
    if (outcome.success) {
      // TUNRSTILE CHECK END

      const intent = `## Intent\n${data.get('play') ? 'play ' : ''}${data.get('romance') ? 'romance ' : ''}${data.get('irl') ? 'irl ' : ''}${data.get('online') ? 'online' : ''}`;

      const details = `## Details\n- Name: ${data.get('name')}\n- Identity: ${data.get('identity')}\n- Age: ${data.get('age')}\n- Country: ${data.get('country')}`;

      const desires = `## Desires\n- Asexual? ${data.get('asexual')}\n- Kinky? ${data.get('kinkiness')}\n- Role? ${data.get('role')}`;

      const miscellaneous = `## Miscellaneous\n- Likes cats? ${data.get('cats')}\n- Scared of bugs? ${data.get('bugs')}\n- Pets: ${data.get('pets')}\n - Music taste: ${data.get('music')}\n- Alcohol? ${data.get('alcohol')}\n- Smoker? ${data.get('smoker')}\n- Recreational drugs? ${data.get('drugs')}\n- Political ideology: ${data.get('politics')}\n- Politically active? ${data.get('activist')}\n- Israel/Palestine: ${data.get('genocide')}`;

      const contact = `## Contact\nUsername: ${data.get('contact')}\n### Message\n${data.get('message')}`;

      let content = `# New Date!\n${intent}\n${details}\n${desires}\n${miscellaneous}\n${contact}`;

      const deleteRequest = data.get('message').toUpperCase() === 'DELETE' ? true : false;
      if ( deleteRequest ) {
        content = `# Delete Request\n${data.get('contact')}`;
      }

      const body = {
        username: 'Date',
        content
      };

      const options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      };

      try {
        const response = await fetch('https://discord.com/api/webhooks/1314008671709171732/t7ZkIHwoJp5qcWeRkpJZ-pH5V9Vd3VrHQ9Ejo3fVqWr9JYvMn7MPAErMdGs-SDoNIYY4', options);
    
        if (!response.ok) {
          return fail(500, {
            error: true,
            type: 'discord',
            details: {
              status: response.status,
              message: response.statusText,
            },
          });
        }

        if (deleteRequest) return { success: true, type: 'delete' };
        return { success: true, type: 'submission' };

      } catch (error) {
        return fail(500, {
          error: true,
          type: 'server',
          details: error
        });
      }

    } else {
      return fail(401, {
        error: true,
        type: 'bot',
        details: {
          status: 401,
          message: 'bot detected'
        }
      });
    }
  }
}