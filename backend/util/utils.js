// Function to compute Fibonacci numbers
const computeFibonacci = (num) => {
  const fibNumbers = [0, 1];
  for (let i = 2; i < num; i++) {
    fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
  }
  return fibNumbers;
};

module.exports = { computeFibonacci };
