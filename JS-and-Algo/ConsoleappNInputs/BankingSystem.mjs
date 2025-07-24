import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

let balance = 100;

async function main() {
  while (true) {
    console.log("\n=== Banking System ===");
    console.log("1) Check Balance");
    console.log("2) Deposit Money");
    console.log("3) Withdraw Money");
    console.log("4) Exit");

    const choice = await ask("Choose option (1-4): ");

    if (choice === "1") {
      console.log(`Your balance is $${balance}`);
    } else if (choice === "2") {
      const amount = parseFloat(await ask("Enter amount to deposit: $"));
      if (amount > 0) {
        balance += amount;
        console.log(`New balance: $${balance}`);
      } else {
        console.log("Invalid amount.");
      }
    } else if (choice === "3") {
      const amount = parseFloat(await ask("Enter amount to withdraw: $"));
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`New balance: $${balance}`);
      } else {
        console.log("Invalid or insufficient funds.");
      }
    } else if (choice === "4") {
      console.log("Goodbye!");
      break;
    } else {
      console.log("Invalid option. Please choose 1-4.");
    }
  }

  rl.close();
}

main();
