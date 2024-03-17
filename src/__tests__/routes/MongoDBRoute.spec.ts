import MongoDBRoute from '../../routes/MongoDBRoute';

describe('[src/routes/MongoDBRoute]', () => {
  test('a. MongoDBRoute type should be a function.', (done) => {
    expect(typeof MongoDBRoute).toEqual('function');
    done();
  });
});
