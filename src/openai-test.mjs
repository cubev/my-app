import 'dotenv/config';
import OpenAI from 'openai';

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
  const resp = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: 'Sag kurz Hallo und nenne die aktuelle Wochentagsnummer (ohne Datum).' }],
  });

  console.log(resp.choices[0].message.content);
}

main().catch(console.error);
