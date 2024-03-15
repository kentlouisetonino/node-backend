import ColorService, { ColorEnum } from '../../services/ColorService';

describe('[src/services/ColorService]', () => {
  test('a. ColorService type should be a function.', (done) => {
    expect(typeof ColorService).toEqual('function');
    done();
  });

  test('b. ColorService.logText type should be a function.', (done) => {
    expect(typeof ColorService.logText).toEqual('function');
    done();
  });

  test('c. ColorEnum type should be an object.', (done) => {
    expect(typeof ColorEnum).toEqual('object');
    done();
  });
});
