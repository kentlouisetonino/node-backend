export interface ChatInput {
  model: string;
  messages: { role: string; content: string }[];
  openAIKey: string;
  temperature: number;
}

export interface ChatOutput {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: {
      role: string;
      content: string;
    };
    logprobs: null;
    finish_reason: string;
  }[];
  usage: {
    promp_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  system_fingerprint: string;
}
