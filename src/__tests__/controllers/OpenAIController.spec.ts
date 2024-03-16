import OpenAIController from '../../controllers/OpenAIController';

describe('[src/controllers/OpenAIController]', () => {
  test('a. OpenAIController type should be a function.', (done) => {
    expect(typeof OpenAIController).toEqual('function');
    done();
  });

  test('b. OpenAIController.chat type should be a function.', (done) => {
    expect(typeof OpenAIController.chat).toEqual('function');
    done();
  });
});
