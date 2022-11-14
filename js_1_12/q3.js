const readline = require("readline");

const code = readline.createInterface({
    input: process.stdin
});
const userInput = [];


code.on("line", (data) => { userInput.push(data) });

code.on("close", () => {

    let input = userInput

    let a = parseInt(input[0])

    let b = parseInt(input[1])
    
    let sum = 1

    for (let i = 0; i < b; i++) {
        sum *= a;
      }
    console.log(sum);
});
