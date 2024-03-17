export default class OpenAIService {
  static async chat({
    model,
    messages,
    openAIKey,
    temperature,
  }: {
    model: string;
    messages: { role: string; content: string }[];
    openAIKey: string;
    temperature: number;
  }) {
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
