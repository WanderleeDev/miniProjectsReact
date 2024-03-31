export default function useCalculator() {
  const sum = (args) => args.reduce((prev, current) => prev + current);
  const subtract = (args) => args.reduce((prev, current) => prev - current);
  const multiply = (args) => args.reduce((prev, current) => prev * current);
  const divide = (args) => args.reduce((prev, current) => prev / current);

  return {
    operations: {
      sum,
      subtract,
      multiply,
      divide,
    },
  };
}
