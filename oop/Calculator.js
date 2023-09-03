class Calculator {
  constructor(operator, numbers) {
    this.operator = operator;
    this.numbers = numbers;
  }

  init = () => {
    return this.getResult(this.operator, this.numbers);
  };
  getResult = (operator, numbersAr) => {
    switch (operator) {
      case "sum":
        return numbersAr.reduce((acc, item) => acc + item);
      case "sub":
        return numbersAr.reduce((acc, item) => acc - item);
      case "mult":
        return numbersAr.reduce((acc, item) => acc * item);
      case "div":
        return numbersAr.reduce((acc, item) => acc / item);
      default:
        return "Not operations";
    }
  };
}
const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((number) => Number(number));
module.exports = new Calculator(operator, numbers);
