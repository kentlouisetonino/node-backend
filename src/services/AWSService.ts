import S3 from 'aws-sdk/clients/s3';

export default class AWSService {
  static s3UploadFile({
    bucketName,
    bucketRegion,
    bucketAccessKeyId,
    bucketSecretAccessKey,
    fileName,
    fileBuffer,
    fileEncoding,
    fileContentType,
  }: {
    bucketName: string;
    bucketRegion: string;
    bucketAccessKeyId: string;
    bucketSecretAccessKey: string;
    fileName: string;
    fileBuffer: Buffer;
    fileEncoding: string;
    fileContentType: string;
  }): Promise<S3.ManagedUpload.SendData> {
    const s3 = new S3({
      region: bucketRegion,
      accessKeyId: bucketAccessKeyId,
      secretAccessKey: bucketSecretAccessKey,
    });

    const params = {
      Bucket: bucketName,
      Body: fileBuffer,
      ContentEncoding: fileEncoding,
      ContentType: fileContentType,
      Key: fileName,
      ACL: 'public-read',
    };

    return s3.upload(params).promise();
  }

  static s3DeleteFile({
    bucketName,
    bucketRegion,
    bucketAccessKeyId,
    bucketSecretAccessKey,
    key,
  }: {
    bucketName: string;
    bucketRegion: string;
    bucketAccessKeyId: string;
    bucketSecretAccessKey: string;
    key: string;
  }) {
    const s3 = new S3({
      region: bucketRegion,
      accessKeyId: bucketAccessKeyId,
      secretAccessKey: bucketSecretAccessKey,
      signatureVersion: 'v4',
    });

    return s3
      .deleteObject({
        Bucket: bucketName,
        Key: key,
      })
      .promise();
  }

  static s3GetSignedURL({
    bucketName,
    bucketRegion,
    bucketAccessKeyId,
    bucketSecretAccessKey,
    key,
  }: {
    bucketName: string;
    bucketRegion: string;
    bucketAccessKeyId: string;
    bucketSecretAccessKey: string;
    key: string;
  }) {
    const s3 = new S3({
      region: bucketRegion,
      accessKeyId: bucketAccessKeyId,
      secretAccessKey: bucketSecretAccessKey,
    });

    return s3.getSignedUrl('getObject', {
      Bucket: bucketName,
      Key: key,
      Expires: 60 * 5,
    });
  }
}
