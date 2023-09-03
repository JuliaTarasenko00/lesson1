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

module.exports = getResult;
