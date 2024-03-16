import RootRoute from '../../routes/RootRoute';

describe('[src/routes/RootRoute]', () => {
  test('a. RootRoute type should be a function', (done) => {
    expect(typeof RootRoute).toEqual('function');
    done();
  });
});
