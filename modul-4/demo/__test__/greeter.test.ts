import { greeter } from '@/test/greeter';

test('greets the user', () => {
  const name = 'Dzikri';
  const mockGreeter = jest.fn(greeter);
  const result = mockGreeter(name);
  expect(result).toBe('Hello, Dzikri!');
  expect(mockGreeter).toHaveBeenCalledWith(name);
});