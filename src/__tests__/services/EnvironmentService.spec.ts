import EnvironmentService from '../../services/EnvironmentService';

describe('[src/services/EnvironmentService]', () => {
  test('a. EnvironmentService type should be a function.', (done) => {
    expect(typeof EnvironmentService).toEqual('function');
    done();
  });

  test('b. EnvironmentService.port type should be a number.', (done) => {
    expect(typeof EnvironmentService.PORT).toEqual('number');
    done();
  });
});
