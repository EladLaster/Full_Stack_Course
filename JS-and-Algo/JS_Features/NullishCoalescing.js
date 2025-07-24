//Exercise 1
let employeesArr = [
  { name : "Joey" , id: 1 , age: 26},
  { name : "Lily" , id: null , age: 24},
  { name : "Alice" , id: 7 , age: null},
  { name : "Sam" , id: 8 , age: 24},
  { name : "Ray" , id: null , age: null}
  ]

  for (let employee of employeesArr) {
  const id = employee.id ?? "missing";
  const age = employee.age ?? "missing";

  if (id === "missing" || age === "missing") {
    console.log(`${employee.name} has missing data`);
  }
}