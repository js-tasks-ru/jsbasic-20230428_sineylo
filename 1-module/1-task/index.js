function factorial(n) {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    return NaN;
  }

  let total = 1;

  for (let i = 2; i <= n; i++) {
    total *= i;
  }

  return total;
}
