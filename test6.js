//! Problem:
// Write a function that checks whether one string is a rotation of another.
// Rotation means you can shift characters from the start to the end.

let str1 = "hlelor";
let str2 = "lloher";
let counter = 0;

if (str1.length != str2.length) {
  console.log(false);
}

for (let i = 0; i < str1.length; i++) {
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] == str2[j]) {
      counter++;
      break;
    }
  }
}

if (counter == str2.length) {
  console.log(true);
} else {
  console.log(false);
}

//!Problem:
// Given an unsorted array of integers, find the length of the longest sequence of consecutive
// numbers.

// Note: The consecutive numbers can be in any order in the array.
// Your solution must run in O(n) time.

// Input: [100, 4, 200, 1, 3, 2]
// Output: 4

let arr = [100, 4, 200, 1, 3, 2];
let obj = {}; // Use this consistently

// Step 1: Store all numbers in object for fast lookup
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = true;
}

let longest = 0;

// Step 2: Loop through array and count sequences
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];

  // Only start counting if it's the beginning of a sequence
  if (obj[num - 1] === undefined) {
    let currentNum = num;
    let currentLength = 1;

    while (obj[currentNum + 1] !== undefined) {
      currentNum++;
      currentLength++;
    }

    if (currentLength > longest) {
      longest = currentLength;
    }
  }
}

console.log(longest); // Output: 4 (Complexity is O(n))

//! Given a string s, find the length of the longest substring without repeating characters.

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with length 3

let string = "abcabcbb";
let max = 0;

for (let i = 0; i < string.length; i++) {
  let count = 1;
  for (let j = i + 1; j < string.length; j++) {
    if (string[i] == string[j]) {
      count++;
    }
  }
  if (count > max) {
    max = count;
  }
}
console.log(max);
