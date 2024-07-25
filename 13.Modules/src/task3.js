export function addNumbers(a, b) {
  return a + b;
}

export function subtractNumbers(a, b) {
  let res = 0;
  a > b ? (res = a - b) : (res = b - a);
  return res;
}

export function multiplyNumbers(a, b) {
  return a * b;
}

export function divideNumbers(a, b) {
  let res = 0;
  a > b ? (res = a / b) : (res = b / a);
  return res;
}
