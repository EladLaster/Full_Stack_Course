let balanceAmount  = 100;

    export function balance() {
      console.log(`Your balance is $${balanceAmount }`);
    } 
    export function deposit (amount) {
    //validation - amount is numnber / not negative / current balance - amount > 0
      if (amount > 0) {
        balanceAmount  += amount;
        console.log(`New balance: $${balanceAmount }`);
      } else {
        console.log("Invalid amount.");
      }
    } 
    export function withdraw (amount) {
    //validation - amount is numnber / not negative / current balance - amount > 0
      if (amount > 0 && amount <= balanceAmount ) {
        balanceAmount  -= amount;
        console.log(`New balance: $${balanceAmount }`);
      } else {
        console.log("Invalid or insufficient funds.");
      }
      // return value {seccedd : true/false , }
    } 
    export function exit() {
      console.log("Goodbye!");
    } 
  
    // module.exports = {balance,deposit,withdraw,exit};


