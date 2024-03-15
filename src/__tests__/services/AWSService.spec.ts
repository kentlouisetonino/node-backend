require('aws-sdk/lib/maintenance_mode_message').suppress = true;
import AWSService from '../../services/AWSService';

describe('[src/Services/AWSService]', () => {
  test('a. AWSService type should be a function.', (done) => {
    expect(typeof AWSService).toEqual('function');
    done();
  });

  test('b. AWSService.s3UploadFile type should be a function.', (done) => {
    expect(typeof AWSService.s3UploadFile).toEqual('function');
    done();
  });

  test('c. AWSService.s3DeleteFile type should be a function.', (done) => {
    expect(typeof AWSService.s3DeleteFile).toEqual('function');
    done();
  });

  test('d. AWSService.s3GetSignedURL type should be a function ', (done) => {
    expect(typeof AWSService.s3GetSignedURL).toEqual('function');
    done();
  });
});
