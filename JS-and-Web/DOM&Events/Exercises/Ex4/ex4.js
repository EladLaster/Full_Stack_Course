const inputName = document.getElementById("inputName");
const inputSalary = document.getElementById("inputSalary");
const inputDate = document.getElementById("inputDate");
const inputTel = document.getElementById("inputTel");
const button = document.getElementById("submitBtn")
const errplace = document.getElementById("errorMessages");
const container = document.getElementById("container");


function checkName(name){
    return name.trim().length > 2;
}
function checkSalary(salary){
    const sal = Number(salary);
    return sal >= 10000 && sal <= 16000;
}
function checkDate(date){
    return date.trim() !== "";
}
function checkTel(tel){
    return tel.trim().length === 10 && /^\d{10}$/.test(tel);
}

function clearErrors() {
  errplace.innerHTML = "";
}

function enterErr(string){
    const errelem = document.createElement("p")
    errelem.textContent = string;
    errelem.style.color = "red";
    errplace.appendChild(errelem);
}

button.addEventListener("mouseenter",()=>{
    button.style.backgroundColor = "green";
})

button.addEventListener("mouseleave",()=>{
    button.style.backgroundColor = "";
})

button.addEventListener("click",()=>{
    clearErrors();
    if(!checkName(inputName.value)){
        enterErr("name is missing !");
        inputName.value = '';
    }
    else if(!checkSalary(inputSalary.value)){
        enterErr("salary is missing !");
        inputSalary.value = '';
    }
    else if(!checkDate(inputDate.value)){
        enterErr("date is missing !");
        inputDate.value = '';
    }
    else if(!checkTel(inputTel.value)){
        enterErr("phone is missing !");
        inputTel.value = '';
    }
    else{
        const newPerson = {
            Name: inputName.value,
            Salary: inputSalary.value,
            Birthday: inputDate.value,
            Phone: inputTel.value,
        };

        console.log(newPerson);
    
        container.style.display = "none";

        const welcomeMessage = document.createElement('div');
        welcomeMessage.classList.add("welcome-message");
        welcomeMessage.textContent = `Welcome, ${newPerson.Name}! We're glad you're here.`;
        document.body.appendChild(welcomeMessage);

        inputName.value = '';
        inputSalary.value = '';
        inputDate.value = '';
        inputTel.value = ''
    }
})