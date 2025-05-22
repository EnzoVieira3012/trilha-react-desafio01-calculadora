export const calculate = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    case '/':
      return secondNumber !== 0 ? firstNumber / secondNumber : 'Error'; // Evita divisão por zero
    default:
      return 0;
  }
};
