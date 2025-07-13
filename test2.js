//! Reverse the array

let arr = [1, 2, 3];
let reversed = [];

for (let i = 0; i < arr.length; i++) {
  reversed.push(arr[arr.length - 1 - i]);
}
console.log(reversed); // output = [ 3, 2, 1 ]

//! Second Largest number

let arr2 = [10, 5, 20, 8];
let max = arr[0];
let secondMax = arr[0];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > max) {
    secondMax = max;
    max = arr2[i];
  }
}
console.log(secondMax); // output = 10

//! Remove Duplicate

let arr3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let removed = [];

for (let i = 0; i < arr3.length; i++) {
  let flag = false;
  for (let j = 0; j < removed.length; j++) {
    if (arr3[i] === removed[j]) {
      flag = true;
      break;
    }
  }
  if (!flag) {
    removed.push(arr3[i]);
  }
}
console.log(removed);

//! Check two Arrays are equal

let arr4 = [1, 2, 3];
let arr5 = [1, 2, 3];

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] != arr5[i]) {
    console.log("Not equal");
    break;
  }

  if (i === arr4.length - 1) {
    console.log("Equal");
  }
}

//! Rotate the Array

//! Count vowels in a string

let str = "hello";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u"
  ) {
    count++;
  }
}

console.log(count); // output = 2

//! Print triangle pattern using loops

// Write a loop to print * pattern based on number of rows.

const printTriangle = (n) => {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      console.log("*");
    }
    console.log("\n");
  }
};
console.log(printTriangle(15));

//! Factorial using recursion

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); //output = 120

//! Prime check

let num = 34;
let flag = false;

for (let i = 0; i * i < num; i++) {
  if (num % i == 0) {
    flag = true;
  }
}

if (!flag) {
  console.log("Yes the number is Prime");
} else {
  console.log("The Number is Not Prime");
}

//! Find Fibonacci number at Nth position

let num1 = 15; // Fibonacci number at 15th position
let sum = 0;
let a = 0;
let b = 1;

for (let i = 2; i < num1; i++) {
  sum = a + b;
  a = b;
  b = sum;
}
console.log(sum); // output = 377

//! Count frequency of array elements

obj = {};
arr4 = [1, 2, 2, 3];

for (let i = 0; i < arr4.length; i++) {
  if (obj[arr4[i]]) {
    obj[arr4[i]]++;
  } else {
    obj[arr4[i]] = 1;
  }
}
console.log(obj);

//! Invert an Object
obj = { a: 1, b: 2 };

//! Check if string is palindrome

let str1 = "racecar";
let flag1 = true;
for (let i = 0; i < str1.length; i++) {
  if (str1[i] !== str1[str1.length - 1 - i]) {
    flag1 = false;
    break;
  }
}
if (flag1) {
  console.log("Yes the String is Palindrome");
} else {
  console.log("No the String is Not Palindrome");
}

//! First Non Repeating character

let str7 = "aabbcdd";
count = 0;

for (let i = 0; i < str7.length; i++) {
  for (let j = 0; j < str7.length; j++) {
    if (str7[j] == str7[i]) {
      count = count + 1;
    }
  }
  if (count == 1) {
    console.log(str7[i]); // output = c
  }
}

//! Reverse the string

let str9 = "Anshul";
let revStr = "";

for (let i = 0; i < str9.length; i++) {
  revStr = revStr + str9[str9.length - 1 - i];
}
console.log(revStr); // output = luhsnA

//! Flatten nested array
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

//! Group different things in object
// Input 1: [{type:'fruit',name:'apple'},{type:'fruit',name:'banana'}]
// Output 1: {fruit: ['apple', 'banana']}

let arr15 = [
  { type: "fruit", name: "apple" },
  { type: "fruit", name: "banana" },
];

let sorted = [];
let obj14 = {};

for (let i = 0; i < arr15.length; i++) {
  obj14[arr15[i].type] = obj14[arr15[i].name];
  sorted.push(obj14);
}

console.log(sorted);
