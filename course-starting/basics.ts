function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  // if (typeof num1 === 'string' || typeof num2 === 'string') {
  //   throw new Error('Incorrect input!');
  // }
  const result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 1;
const number2 = 10;
const printResult = true;
const phrase = 'Result is: ';

add(number1, number2, printResult, phrase);