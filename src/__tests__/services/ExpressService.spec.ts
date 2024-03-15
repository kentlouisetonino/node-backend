import ExpressService from '../../services/ExpressService';

describe('[src/services/ExpressService]', () => {
  test('a. ExpressService type should be a function.', (done) => {
    expect(typeof ExpressService).toEqual('function');
    done();
  });

  test('b. ExpressService.app type should be a function.', (done) => {
    expect(typeof ExpressService.app).toEqual('function');
    done();
  });

  test('c. ExpressService.router type should be a function.', (done) => {
    expect(typeof ExpressService.router).toEqual('function');
    done();
  });
});
