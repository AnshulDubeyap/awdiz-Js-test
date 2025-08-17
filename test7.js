let array = [4, 3, 7, 8, 6, 2, 1];

for (let i = 0; i < array.length - 1; i++) {
  if (i % 2 === 0) {
    if (array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  } else {
    if (array[i] < array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
}

console.log(array); // [3, 7, 4, 8, 2, 6, 1]

function RotateArray(arr, num) {
  let result = [];

  for (let i = arr.length - num; i < arr.length; i++) {
    result.push(arr[i]);
  }

  for (let i = 0; i < arr.length - num; i++) {
    result.push(arr[i]);
  }

  console.log(result);
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let num = 3;
RotateArray(arr, num); // Output: [5, 6, 7, 1, 2, 3, 4]

//! Group the anagrams

let array2 = ["eat", "tea", "tan", "ate", "nat", "bat"];

//Output =  [

// ["eat", "tea", "ate"],
// ["tan", "nat"],
// ["bat"]

// ]
let output = [];

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let count1 = {};
  let count2 = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    if (count1[char]) {
      count1[char]++;
    } else {
      count1[char] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (count2[char]) {
      count2[char]++;
    } else {
      count2[char] = 1;
    }
  }

  for (let key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }

  return true;
}

for (let i = 0; i < array2.length; i++) {
  let output2 = [];
  for (let j = i + 1; j < array2.length; j++) {
    if (checkAnagram(array2[i], array2[j])) {
      output2.push(array2[i], array2[j]);
    }
  }

  if (output2.length > 0) {
    output.push(output2);
  }
}

console.log(output);
