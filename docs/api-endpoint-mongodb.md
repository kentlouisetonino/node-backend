### API Testing
#

> - Endpoint for creating a collection.

```bash
URL: http://localhost:11000/api/mongodb/create/collection
METHOD: POST
PAYLOAD: JSON
    uri: <mongodb-connection-string>,
    database: <database-name>,
    collection: <collection-name>
```

> - Endpoint for creating a document.

```bash
URL: http://localhost:11000/api/mongodb/create/document
METHOD: POST
PAYLOAD: JSON
    uri: <mongodb-connection-string>,
    database: <database-name>,
    collection: <collection-name>.
    document: Object
        firstName: "firstName",
        lastName: "lastName",
        age: 27
```
