//Exercise 1
// -> time complexity: O(n) , n = size of the bankOperation

//Exercise 2
// -> time complexity: O(logn) , n = size of the complaints

//Exercise 3
// -> time complexity: O(n) , n = size of allSides

//Exercise 4
// -> time complexity: O(n*m) , n = size of studentAnswers , m = number of questions per student

//Exercise 5
// -> time complexity: O(n) , n = number of recepients

//Exercise 6
function findDuplicates (ages) {
  let map = {};
  for (let i = 0; i < ages.length; i++) {
    if (map[ages[i]] == undefined) map[ages[i]] = 1;
    else map[ages[i]]++;
  }
  for (const num in map) {
    if (map[num] > 1) console.log(num + " has a duplicate");
  }
};
let arr = [1, 3, 1, 2, 1, 3];
findDuplicates(arr); // -> 1 has a duplicate 3 has a duplicate

//Exercise 7
let employees = {
  ax01: { name: "Ray", age: 28, salary: 1300 },
  qs84: { name: "Lucius", age: 31, salary: 840 },
  bg33: { name: "Taylor", age: 18, salary: 2700 },
};

function findEmployeeSalary(employeeID) {
  if (employees[employeeID] != undefined) return employees[employeeID].salary;
  else return null;
}

console.log(findEmployeeSalary("qs84")); // -> 840
console.log(findEmployeeSalary("xyz")); // -> null

//Exercise 8
let numbers = [
  24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427,
  442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852,
  896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272,
  1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667,
  1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198,
  2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554,
  2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932,
  2962, 2984, 2987,
];

function findIndex(numbers,num) {
    let start = 0;
    let end = numbers.length;
    while(start <= end){
        let middle = Math.floor((start + end) / 2);
        if(numbers[middle] === num)
            return middle;
        else if(numbers[middle]<num)
                start = middle+1;
        else    
            end = middle-1;
    }
    return -1;
}

console.log("The index is " + findIndex(numbers,2630)) // -> 86
console.log("The index is " + findIndex(numbers,4)) // -> -1

//Exercise 9
// -> red = O(n^2) , blue = O(n) , yellow = O(log(n)), green = O(1) 