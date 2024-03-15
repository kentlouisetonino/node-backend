import MulterService from '../../services/MulterService';

describe('[src/services/MulterService]', () => {
  test('a. MulterService type should be a function.', (done) => {
    expect(typeof MulterService).toEqual('function');
    done();
  });

  test('b. MulterService.memoryStorage should be an object.', (done) => {
    expect(typeof MulterService.memoryStorage).toEqual('object');
    done();
  });
});
