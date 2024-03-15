require('aws-sdk/lib/maintenance_mode_message').suppress = true;
import AWSService from '../../services/AWSService';

describe('[ src/Services/AWSService ]', () => {
  test('a. AWSService type should be a function.', (done) => {
    expect(typeof AWSService).toEqual('function');
    done();
  });

  test('b. s3UploadFile method type should be a function.', (done) => {
    expect(typeof AWSService.s3UploadFile).toEqual('function');
    done();
  });

  test('c. s3DeleteFile method type should be a function.', (done) => {
    expect(typeof AWSService.s3DeleteFile).toEqual('function');
    done();
  });

  test('d. s3GetSignedURL method type should be a function ', (done) => {
    expect(typeof AWSService.s3GetSignedURL).toEqual('function');
    done();
  });
});
