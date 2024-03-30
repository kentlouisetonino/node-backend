import S3 from 'aws-sdk/clients/s3';

export interface S3UploadFileInput {
  bucketName: string;
  bucketRegion: string;
  bucketAccessKeyId: string;
  bucketSecretAccessKey: string;
  fileName: string;
  fileBuffer: Buffer;
  fileEncoding: string;
  fileContentType: string;
}

export type S3UploadFileOutput = S3.ManagedUpload.SendData;
