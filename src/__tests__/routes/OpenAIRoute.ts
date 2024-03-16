import OpenAIRoute from '../../routes/OpenAIRoute';

describe('[src/routes/OpenAIRoute]', () => {
  test('a. OpenAIRoute type should be a function.', (done) => {
    expect(typeof OpenAIRoute).toEqual('function');
  });
});
