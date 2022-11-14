const readline = require("readline");

const code = readline.createInterface({
    input: process.stdin
});
const userInput = [];


code.on("line", (data) => { userInput.push(data) });

code.on("close", () => {

    let input = userInput

    let a = parseInt(input[0])

    let remainder = 0

    let reverse =0

    while (a != 0) {
        remainder = a % 10;
        reverse = reverse * 10 + remainder ;
        a =parseInt(a/10);
      }

    console.log(reverse);
});
