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

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

//! Using `map()`, return a new array where every number is multiplied by 2

let arr5 = [1, 2, 3, 4];

let result1 = arr5.map((element) => {
  return element * 2;
});
console.log(result1); // output = [2, 4, 6, 8]

//! Return a new array with only the odd numbers using `filter()`

let arr6 = [1, 2, 3, 4, 5];

let filtered = arr6.filter((element) => {
  if (element % 2 !== 0) {
    return element;
  }
});

console.log(filtered); // output = [1, 3, 5]

// !Return the total number of characters in an array of strings using `reduce()`

let arr7 = ["hi", "world"];

let ch = arr7.reduce((acc, res) => {
  return acc + res.length;
});

console.log(ch);

//! Return the last 3 items in the array using `slice()`

let arr8 = [1, 2, 3, 4, 5];

console.log(arr8.slice(2, 5)); // output = 3, 4, 5

//! use`splice()` to remove the element at index 2.

let arr9 = [1, 2, 3, 4, 5];
arr9.splice(2, 1);
console.log(arr9); // output = [1, 2, 4, 5]

//! Return a new array where each word starts with an uppercase letter.

let arr10 = ["hi", "hello", "goodbye"];
let result2 = [];

for (let i = 0; i < arr10.length; i++) {
  let word = arr10[i];

  word = word[0].toUpperCase() + word.slice(1);
  result2.push(word);
}

//! Use `some()` to check if at least one number in the array is divisible by 5.

let arr11 = [3, 6, 10, 14];

arr11.some((element) => {
  if (element % 5 === 0) {
    console.log(true);
  }
});

//! Return the index of the first negative number, or -1 if none found.

let arr12 = [1, 2, -3, 4];

for (let i = 0; i < arr12.length; i++) {
  if (arr12[i] < 0) {
    console.log(i);
    break;
  }

  if (i === arr12.length - 1) {
    console.log(-1);
  }
}

//! Return an object where the keys are words and values are how many times each appears

let arr13 = ["apple", "banana", "apple"];
obj = {};

for (let i = 0; i < arr13.length; i++) {
  if (obj[arr13[i]]) {
    obj[arr13[i]]++;
  } else {
    obj[arr13[i]] = 1;
  }
}

console.log(obj);

//! Create an object grouping strings based on their length

arr18 = ["hi", "yes", "no", "maybe"];





//! Remove Duplicate

let arr15 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let removed = [];

for (let i = 0; i < arr15.length; i++) {
  let flag = false;
  for (let j = 0; j < removed.length; j++) {
    if (arr15[i] === removed[j]) {
      flag = true;
      break;
    }
  }
  if (!flag) {
    removed.push(arr15[i]);
  }
}
console.log(removed);

//! Find the Longest Word

arr15 = ["hi", "hello", "goodbye"];

for (let i = 0; i < arr15.length; i++) {
  let longest = arr15[0];
  if (arr15[i].length > longest.length) {
    longest = arr15[i];
  }
  console.log(longest); // output = goodbye
}

//! Flatten the nested array

let arr16 = [
  [1, 2],
  [3, 4],
];

let flattened = [];

for (let i = 0; i < arr16.length; i++) {
  for (let j = 0; j < arr16.length; j++) {
    flattened.push(arr16[i][j]);
  }
}

console.log(flattened); // output = [1, 2, 3, 4]

//! Count the data types in the Array

let arr17 = [1, "hello", true, 2, "world", false];

let obj2 = {
  number: 0,
  string: 0,
  boolean: 0,
};

for (let i = 0; i < arr17.length; i++) {
  if (typeof arr17[i] === "number") {
    obj2.number++;
  } else if (typeof arr17[i] === "string") {
    obj2.string++;
  } else if (typeof arr17[i] === "boolean") {
    obj2.boolean++;
  }
}

console.log(obj2); // output = { number: 2, string: 2, boolean: 2 }
