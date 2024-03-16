require('aws-sdk/lib/maintenance_mode_message').suppress = true;
import AWSController from '../../controllers/AWSController';

describe('[src/controllers/AWSController]', () => {
  test('a. AWSController type should be a function.', (done) => {
    expect(typeof AWSController).toEqual('function');
    done();
  });

  test('b. AWSController.s3Upload type should be a function.', (done) => {
    expect(typeof AWSController.s3Upload).toEqual('function');
    done();
  });

  test('c. AWSController.s3Delete type should be a function.', (done) => {
    expect(typeof AWSController.s3Delete).toEqual('function');
    done();
  });

  test('d. AWSController.s3Url type should be a function.', (done) => {
    expect(typeof AWSController.s3Url).toEqual('function');
    done();
  });
});
