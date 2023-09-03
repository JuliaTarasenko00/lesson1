// node calc.js sum 2 3 4
// node calc.js sub 2 3 4
// node calc.js mult 2 3 4
// node calc.js div 2 3 4

const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((number) => Number(number));

const getResult = (operator, numbersAr) => {
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

const result = getResult(operator, numbers);
console.log("result: ", result);
