const firstnum = parseFloat(process.argv[2]);
const operation = process.argv[3];
const secondnum = parseFloat(process.argv[4]);

let answer;

if (isNaN(firstnum) || isNaN(secondnum)) {
    console.log("Error: Please provide valid numbers.");
    process.exit(1);
}

if (operation === '+') {
    answer = firstnum + secondnum;
} else if (operation === '-') {
    answer = firstnum - secondnum;
} else if (operation === '*') {
    answer = firstnum * secondnum;
} else if (operation === '/') {
    if (secondnum === 0) {
        console.log("Error: Cannot divide by zero.");
        process.exit(1);
    }
    answer = firstnum / secondnum;
} else {
    console.log("Error: Invalid operation. Use +, -, * or /");
    process.exit(1);
}

console.log(`${firstnum} ${operation} ${secondnum} = ${answer}`);
