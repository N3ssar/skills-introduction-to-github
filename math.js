function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
function add(a, b) {
  return a + b;
}

export { divide, add };
