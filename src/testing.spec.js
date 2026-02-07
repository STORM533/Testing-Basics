import { capitalize,reverseString,calculator,analyzeArray,ceaserCipher } from "./testing";

test('return capital string',()=>{
    expect(capitalize('storm')).toBe('Storm');
})
test('reverse the shi',()=>{
    expect(reverseString("storm")).toBe("mrots");
})

describe("analyzeArray", () => {
  test("returns correct stats for a normal array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });

  test("works with a single number", () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1
    });
  });

  test("works with negative numbers", () => {
    expect(analyzeArray([-1, -5, -3])).toEqual({
      average: -3,
      min: -5,
      max: -1,
      length: 3
    });
  });
});
describe("calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(6, 7)).toBe(42);
  });

  test("divides two numbers", () => {
    expect(calculator.divide(20, 5)).toBe(4);
  });

  test("throws error when dividing by zero", () => {
    expect(() => calculator.divide(10, 0))
      .toThrow("Division by zero is not allowed");
  });
});
