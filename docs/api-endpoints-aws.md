### API Testing
#

> - Endpoint for uploading an object.

```bash
METHOD: POST
URL: http://localhost:11000/api/aws/s3/upload
PAYLOAD: Form-Data
    bucketName: Text
    bucketRegion: Text
    bucketAccessKeyId: Text
    bucketSecretAccessKey: Text
    file: File
```

> - Endpoint for deleting an object.

```bash
METHOD: POST
URL: http://localhost:11000/api/aws/s3/delete
PAYLOAD: Form-Data
    bucketName: Text
    bucketRegion: Text
    bucketAccessKeyId: Text
    bucketSecretAccessKey: Text
    key: Text
```

> - Endpoint for getting the url of object.

```plaintext
METHOD: POST
URL: http://localhost:11000/api/aws/s3/upload
PAYLOAD: Form-Data
    bucketName: Text
    bucketRegion: Text
    bucketAccessKeyId: Text
    bucketSecretAccessKey: Text
    key : Text
```
