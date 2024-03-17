import MongoDBController from '../../controllers/MongoDBController';

describe('src/controllers/MongoDBController', () => {
  test('a. MongoDBController type should be a function.', (done) => {
    expect(typeof MongoDBController).toEqual('function');
    done();
  });

  test('b. MongoDBController.createCollection type should be a function.', (done) => {
    expect(typeof MongoDBController.createCollection).toEqual('function');
    done();
  });
});
