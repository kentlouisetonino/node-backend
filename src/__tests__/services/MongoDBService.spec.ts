import MongoDBService from '../../services/MongoDBService';

describe('[src/services/MongoDBService]', () => {
  test('a. MongoDBService type should be a function.', (done) => {
    expect(typeof MongoDBService).toEqual('function');
    done();
  });

  test('b. MongoDBService.createCollection type should be a function.', (done) => {
    expect(typeof MongoDBService.createCollection).toEqual('function');
    done();
  });
});
