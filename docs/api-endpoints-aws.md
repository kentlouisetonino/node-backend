### Description
#
> - Below samples are based on the Postman API Platform.

<br />
<br />



### File Upload
#

```plaintext
[REQUEST]
    Method: POST
    URL: http://localhost:11000/api/aws/s3/upload
    Form-Data:
        bucketName: Text
        bucketRegion: Text
        bucketAccessKeyId: Text
        bucketSecretAccessKey: Text
        file: File

[RESPONSE SUCCESS]
    statusCode: number
    key: string
    url: string

[RESPONSE FAILED]
    statusCode: number
    error: string
```

<br />
<br />



### File Delete
#

```plaintext
[REQUEST]
    Method: POST
    URL: http://localhost:11000/api/aws/s3/delete
    Form-Data:
        bucketName: Text
        bucketRegion: Text
        bucketAccessKeyId: Text
        bucketSecretAccessKey: Text
        key: Text

[RESPONSE SUCCESS]
    statusCode: number
    key: string
    message: string

[RESPONSE FAILED]
    statusCode: number
    error: string
```

<br />
<br />



### File URL
#

```plaintext
[REQUEST]
    Method: POST
    URL: http://localhost:11000/api/aws/s3/upload
    Form-Data:
        bucketName: Text
        bucketRegion: Text
        bucketAccessKeyId: Text
        bucketSecretAccessKey: Text
        key : Text

[RESPONSE SUCCESS]
    statusCode: number
    url: string

[RESPONSE FAILED]
    statusCode: number
    error: string
```
