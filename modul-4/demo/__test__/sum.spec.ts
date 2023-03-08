import { sum } from '@/test/sum';

describe('sum function', () => {
  it('should add two numbers together', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});

