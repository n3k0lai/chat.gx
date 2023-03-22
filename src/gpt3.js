const API_KEY = 'YOUR_API_KEY_HERE';

async function generateResponse(prompt) {
  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 150,
      n: 1,
      stop: ['\n']
    })
  });
  const data = await response.json();
  return data.choices[0].text.trim();
}