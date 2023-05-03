function factorial(n) {
  if (n === 0) {
    return 1;
  }

  // Исключаем отрицательные числа т.к. факториала отрицательных чисел нет.
  if (n < 0) {
    return NaN;
  }

  let total = 1;

  // Начинаем с 2, чтобы исключить лишние итерации.
  for (let i = 2; i <= n; i++) {
    total *= i;
  }

  return total;
}
