import { Request, Response } from 'express';
import fetch from 'node-fetch';

export default class OpenAIController {
  static async chat(req: Request, res: Response) {
    // The secret key into your openAI account.
    const openAIKey = req.body?.apiKey;

    // The type of pre-trained model that you are going to use.
    // In this project, I will be using the gpt-3.5-turbo model.
    const model = req.body?.model;

    // The message that you want to chat with the AI.
    const messages = req.body?.messages;

    // Controls the randomness of the model's output.
    // A higher temperature, such as 0.7, makes the output more diverse and creative.
    // A lower temperature, such as 0.2, makes it more focused and deterministic.
    const temperature = req.body?.temperature;

    if (!openAIKey) {
      return res.send({
        error: 'API Key is required.',
      });
    } else if (!model) {
      return res.send({
        error: 'Model name is required.',
      });
    } else if (!messages) {
      return res.send({
        error: 'Message is required.',
      });
    } else if (!temperature) {
      return res.send({
        error: 'Temperature is required.',
      });
    } else {
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

        // Get the API response data.
        const data = await openAIResponse.json();

        return res.send({ statusCode: 200, data: data });
      } catch (error: any) {
        if (error instanceof Error) {
          return res.send({ statusCode: 500, message: error.message });
        }
      }
    }
  }
}
