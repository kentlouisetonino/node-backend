import RootController from '../../controllers/RootController';

describe('[src/controllers/RootController]', () => {
  test('a. RootController type should be a function.', (done) => {
    expect(typeof RootController).toEqual('function');
    done();
  });

  test('b. RootController.home type should be a function.', (done) => {
    expect(typeof RootController.home).toEqual('function');
    done();
  });
});
