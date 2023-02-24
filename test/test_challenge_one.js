const helloWorldModule = require('../hello-world.js');
describe('Test someComplexFunction', () => {
    test('Console log should have been called', () => {
      const logSpy = jest.spyOn(global.console, 'log');

      helloWorldModule.someComplexFunction();

      expect(logSpy).toHaveBeenCalled();
      expect(logSpy).toHaveBeenCalledTimes(1);
      expect(logSpy).toHaveBeenCalledWith('Hello World');

      logSpy.mockRestore();
    });
  });