### API Testing
#

```bash
METHOD: POST
URL: http://localhost:11000/api/openai/chat
PAYLOAD: JSON:
    apiKey: "{{OPENAI_API_KEY}}",
    model: "gpt-3.5-turbo",
    messages: [
        {"role": "user", "content": "Say this is a test!"}
    ],
    temperature: 0.7
```
