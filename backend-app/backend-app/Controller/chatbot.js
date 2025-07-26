const express = require('express');
const axios = require('axios');

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

const ChatBot = async (req, res) => {
  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ error: 'Topic is required' });
  }

  const prompt = `
You are an intelligent assistant that answers only in valid JSON format.

🔹 Behavior:
- Detect if the input is a question or a topic.
- Respond clearly, accurately, and concisely.

🔹 Rules:
- You must return a response in this exact format:
{
  "response": "your complete answer here"
}
- Never add triple backticks ( \`\`\` ), markdown, or extra explanation outside JSON.
- The value inside "response" must be a plain string answer only.

Now reply to:
"${topic}"
`.trim();

  try {
    const apiResponse = await axios.post(GEMINI_API_URL, {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    });

    let rawText = apiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    rawText = rawText.replace(/```json|```/g, '').trim();

    let parsedResponse;
    try {
      parsedResponse = JSON.parse(rawText);
    } catch (err) {
      return res.status(500).json({
        error: 'Invalid JSON response from Gemini',
        raw: rawText
      });
    }

    return res.status(200).json(parsedResponse);
  } catch (error) {
    console.error('Gemini API Error:', error?.response?.data || error.message);
    return res.status(500).json({ error: 'Failed to generate response from Gemini API' });
  }
};

module.exports = { ChatBot };
