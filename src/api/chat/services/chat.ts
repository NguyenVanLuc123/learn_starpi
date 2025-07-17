// src/api/chat/services/chat.ts
import axios, { AxiosError } from 'axios';

interface MessageInput {
  author: string;
  content: string;
}

export async function generateMessage(message: string): Promise<string> {
  const contents = [
    {
      role: 'user',
      parts: [{ text: message }],
    },
  ];

  const apiKey = process.env.apiKey || 'your-default-api-key';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  try {
    const response = await axios.post(
      url,
      {
        contents,
        generationConfig: {
          maxOutputTokens: 8192,
          temperature: 0.7,
          topP: 1,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 90000,
      }
    );

    const parts = response.data?.candidates?.[0]?.content?.parts;
    const text = parts?.[0]?.text || '';

    return text.trim();
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    console.error('Gemini API Error:', axiosError.response?.data || axiosError.message);
    throw new Error('Lỗi khi gọi Gemini API');
  }
}
