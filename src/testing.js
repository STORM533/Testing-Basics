function capitalize(string) {
    if(!string) return string;
    let capital  = string[0].toUpperCase() + string.slice(1);
    return capital;
}
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
};
function reverseString(string) {
    return string.split("").reverse().join("");
}
function shiftChar(char, shift) {
  const isUpper = char >= "A" && char <= "Z";
  const isLower = char >= "a" && char <= "z";

  if (!isUpper && !isLower) return char;

  const base = isUpper ? "A".charCodeAt(0) : "a".charCodeAt(0);
  const code = char.charCodeAt(0) - base;
  const shifted = (code + shift) % 26;

  return String.fromCharCode(shifted + base);
}

function caesarCipher(str, shift) {
  return str
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
}
function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array of numbers");
  }

  const length = arr.length;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length
  };
}



export {capitalize,reverseString,calculator,caesarCipher,analyzeArray};