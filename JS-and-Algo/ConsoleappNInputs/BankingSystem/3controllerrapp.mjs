import * as model from './1Modelbanking.mjs';
import * as view from './2viewui.mjs';

function handleChoice(choice) {
  switch (choice) {
    case 1:
      model.balance();
      break;
    case 2:
      const depositAmount = view.getAmount("deposit");
      if (depositAmount !== null) {
        model.deposit(depositAmount);
      }
      break;
    case 3:
      const withdrawAmount = view.getAmount("withdraw");
      if (withdrawAmount !== null) {
        model.withdraw(withdrawAmount);
      }
      break;
    case 4:
      model.exit();
      process.exit(); // סיום התוכנית
    default:
      console.log("Invalid choice");
  }
}

function run() {
  while (true) {
    view.displayMenu();
    const choice = view.getChoice();
    handleChoice(choice);
  }
}

run();
