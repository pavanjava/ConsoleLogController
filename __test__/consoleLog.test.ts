import { consoleLog } from '../src/index';

describe('console log module test cases', () => {
  it('should echo the evironment', () => {
    expect(consoleLog('development')).toBe('environment is: development');
  });
});
