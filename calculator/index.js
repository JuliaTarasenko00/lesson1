console.log("Hello from julia");
const { getResult, operator, numbers } = require("./lib");

const result = getResult(operator, numbers);
console.log("result: ", result);
