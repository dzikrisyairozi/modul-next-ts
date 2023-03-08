import { Calculator } from '@/test/calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('adds two numbers', () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });

  test('subtracts two numbers', () => {
    const result = calculator.subtract(3, 2);
    expect(result).toBe(1);
  });

  test('multiply two numbers', () => {
    const result = calculator.multiply(23, 3);
    expect(result).toBe(69);
  });

  test('divides two numbers', () => {
    const result = calculator.divide(6, 2);
    expect(result).toBe(3);
  });

  test('throws error when dividing by zero', () => {
    expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
  });

});