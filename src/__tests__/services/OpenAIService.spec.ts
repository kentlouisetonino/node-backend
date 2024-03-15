import OpenAIService from '../../services/OpenAIService';

describe('[src/services/OpenAIService]', () => {
  test('a. OpenAIService type should be a function.', (done) => {
    expect(typeof OpenAIService).toEqual('function');
    done();
  });

  test('b. OpenAIService.chat type should be a function.', (done) => {
    expect(typeof OpenAIService.chat).toEqual('function');
    done();
  });
});
