import fetch from 'node-fetch';

interface MessageProps {
  role: string;
  content: string;
}

interface ChatProps {
  model: string;
  messages: MessageProps[];
  openAIKey: string;
  temperature: number;
}

export default class OpenAIService {
  static async chat({ model, messages, openAIKey, temperature }: ChatProps) {
    try {
      const openAIResponse = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'post',
          body: JSON.stringify({
            model: model,
            messages: messages,
            temperature: temperature,
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openAIKey}`,
          },
        }
      );

      return await openAIResponse.json();
    } catch (error: unknown) {
      if (error instanceof Error) {
        return error;
      }
    }
  }
}
