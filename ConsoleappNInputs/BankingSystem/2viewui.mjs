import promptSync from 'prompt-sync';
const prompt = promptSync();

function displayMenu() {
  console.log("\n=== Banking System ===");
  console.log("1) Check Balance");
  console.log("2) Deposit Money");
  console.log("3) Withdraw Money");
  console.log("4) Exit");
}

function getChoice() {
  while (true) {
    const choice = prompt("Choose option (1-4): ");
    if (["1", "2", "3", "4"].includes(choice)) {
      return parseInt(choice);
    }
    console.log("Invalid choice. Try again.");
  }
}

function getAmount(action) {
  const input = prompt(`Enter amount to ${action}: `);
  const amount = Number(input);
  if (isNaN(amount) || amount <= 0) {
    console.log("Invalid number.");
    return null;
  }
  return amount;
}

export { displayMenu, getChoice, getAmount };
