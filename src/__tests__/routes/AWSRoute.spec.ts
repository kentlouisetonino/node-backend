import AWSRoute from '../../routes/AWSRoute';

describe('[src/routes/AWSRoute]', () => {
  test('a. AWSRoute type should be a function.', (done) => {
    expect(typeof AWSRoute).toEqual('function');
    done();
  });
});
