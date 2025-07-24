const reservations = {
  bob: { claimed: false },
  ted: { claimed: true }
}

const input = document.getElementById("myInput");
const button = document.getElementById("submitBtn");


function checkReservation(val){
  const normalizedVal = val.trim().toLowerCase();
    if (reservations[normalizedVal]) {
      if(reservations[normalizedVal].claimed === false){
          console.log("Welcome, " + val);
      }
      else if(reservations[normalizedVal].claimed === true){
          console.log( "Hmm, someone already claimed this reservation");
      }
    }
    else{
        console.log("You have no reservation");
    }
}

function handleSubmit() {
    const value = input.value;
    if(value === '')
        return;
    checkReservation(value);
    input.value = "";
    input.focus();
  }
  // <------------------------------------------------------>

  button.addEventListener("click", handleSubmit);

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
});
