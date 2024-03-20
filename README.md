### DESCRIPTION
#

![Screenshot from 2024-03-19 20-01-58](https://github.com/kentlouisetonino/node-backend/assets/69438999/55747c89-94e4-4098-b04b-b4c7986cd24b)


<br />

> - A backend server that integrates with different technologies.

> - This will serves as my playground in `Node.js` backend development.

> - Check the project [docs](https://github.com/kentlouisetonino/node-backend/tree/develop/docs) for further guides.

> - Below are the current supported routes.

```bash
# Root URL of the backend server.
http://localhost:11000/api

# This includes the integration of AWS S3 service.
/aws/s3/upload
/aws/s3/delete
/aws/s3/url

# This includes the integration OpenAI Chat GPT.
/openai/chat

# This includes the integration of MongoDB.
/mongodb/create/collection
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
