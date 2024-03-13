### DESCRIPTION
#
> - Below samples are based on  the Postman API Platform.

<br />
<br />



### FILE UPLOAD
#

```plaintext
[REQUEST]
    Method: POST
    URL: http://localhost:11000/api/openai/chat
    Raw-JSON:
        "apiKey": "{{OPENAI_API_KEY}}",
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Say this is a test!"}],
        "temperature": 0.7
```
