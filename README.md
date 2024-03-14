### DESCRIPTION
#

![node-backend-system-design](https://github.com/kentlouisetonino/node-backend/assets/69438999/4b08b84c-363b-4271-82b4-04c3cf29dddc)

<br />

> - A backend server that integrates with different technologies.

> - This will serves as my playground in `Node.js` backend development.

> - Check the project [docs](https://github.com/kentlouisetonino/node-backend/tree/develop/docs) for further guides.

> - Below are the current supported routes.

```bash
# URL of the backend server.
http://localhost:11000

# This includes the integration of AWS S3 service.
/api/aws/s3/upload
/api/aws/s3/delete
/api/aws/s3/url

# This includes the integration OpenAI Chat GPT.
/api/openai/chat
```

<br />
<br />



### LOCAL DEVELOPMENT
#
> - This works well with `Node.js version >= 18`.

> - Run the following commands.

```bash
# Development
yarn install
yarn build
yarn dev

# Unit Test
yarn test:all
```
