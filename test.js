//! Anshul's Test - Javascript

//! Function to check even odd
// Input 1: [2, 3, 4, 5]
// Output 1: { even: 2, odd: 2 }

let arr = [2, 3, 4, 5];
let obj = {};
let even = 0;
let odd = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}
obj.even = even;
obj.odd = odd;
console.log(obj); // output = { even: 2, odd: 2 }

//! Given an array of marks, return how many students scored in grade ranges: A (90+), B (80-89), C (70-79), D (60-69), F (<60)

// Input 1: [95, 82, 67, 50]
// Output 1: { A: 1, B: 1, C: 0, D: 1, F: 1 }

let arr1 = [95, 82, 67, 50];

let obj1 = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  F: 0,
};
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] >= 90) {
    obj1.A++;
  } else if (arr1[i] >= 80) {
    obj1.B++;
  } else if (arr1[i] >= 70) {
    obj1.C++;
  } else if (arr1[i] >= 60) {
    obj1.D++;
  } else {
    obj1.F++;
  }
}
console.log(obj1); // output = { A: 1, B: 1, C: 0, D: 1, F: 1 }

//! Check if all elements in the array are greater than 0 using `every()

let arr3 = [1, 2, 3, 4];

let result = arr3.every((element) => {
  return element > 0;
});
console.log(result); // output = true

//! Return the first number in the array greater than 50 using find or loop

let arr4 = [0, 25, 60, 40];

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] > 50) {
    console.log(arr4[i]);
    break;
  }
}

//! Check if a year is a leap year (divisible by 4 but not 100, unless divisible by 400)

let 
