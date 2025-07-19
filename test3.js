//! First non-repeating element
let arr = [4, 5, 1, 2, 0, 4, 1, 0];
let nonRepeatingArr = [];

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;
    }
  }

  if (count == 0) {
    nonRepeatingArr.push(arr[i]);
  }
}

console.log(nonRepeatingArr[0]); //output = 5

//! Compare if two objects have same key and value
let obj11 = { a: 1, b: 2 };
let obj12 = { b: 2, a: 1 };
let flag = false;

for (key in obj11) {
  for (key2 in obj12) {
    if (obj11[key] == obj12[key2]) {
      flag = true;
    }
  }
}

if (flag == true) {
  console.log("Yes the object are similar");
}

//! Merge two arrays and remove the duplicates

let arrMerge1 = [1, 2, 3];
let arrMerge2 = [2, 3, 4];
let Merged = [];

for (let i = 0; i < arrMerge1.length; i++) {
  Merged.push(arrMerge1[i]);
}

for (let i = 0; i < arrMerge2.length; i++) {
  let flag = false;
  for (let j = 0; j < Merged.length; j++) {
    if (arrMerge2[i] == Merged[j]) {
      flag = true;
    }
  }
  if (flag == false) {
    Merged.push(arrMerge2[i]);
  }
}

console.log(Merged); // output = [1, 2, 3, 4]

//! Convert an Array of Objects into a Single Object
let arr5 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

let obj5 = {};
for (let i = 0; i < arr5.length; i++) {
  obj5[arr5[i].id] = arr5[i].name;
}
console.log(obj5);

//! Find the pair with given sum is equal target
let arr2 = [1, 2, 4, 7];
let target = 6;
let num = [];

for (let i = 0; i < arr2.length; i++) {
  for (let j = i + 1; j < arr2.length; j++) {
    if (arr2[i] + arr2[j] == target) {
      num.push(arr2[i]);
      num.push(arr2[j]);
    }
  }
}

console.log(num); //output = [2, 4]

//! Missing number in the sorted Array
let arr3 = [1, 2, 3, 5, 6, 7, 8];
let missingNumber = 0;
let begin = arr3[0];
let ending = arr3[arr3.length - 1];
let difference = (ending - begin) / arr3.length;
console.log(difference); // output = 1

for (let i = 0; i < arr3.length; i++) {
  if (i == arr3.length - 1) {
    console.log("No missing Number");
  }
  if (arr3[i + 1] - arr3[i] != difference) {
    missingNumber = arr3[i] + difference; // output = 4
    console.log(missingNumber);
    break;
  }
}

//! Convert Object to Array of Key-Value Pairs
let obj2 = { a: 1, b: 2 };
let arr6 = [];
for (let key in obj2) {
  arr6.push([key, obj2[key]]);
}
console.log(arr6);

//! Bitwise Operation: Count Number of 1s in Binary
let num3 = 9;
// Binary: 1001;

//! Binary Search in Sorted Array

let input = [1, 3, 5, 7, 9];
let target2 = 5;

let start1 = 0;
let end1 = input.length - 1;

while (start1 <= end1) {
  let mid1 = Math.floor((start1 + end1) / 2);
  if (input[mid1] == target2) {
    console.log(mid1); // output = 2
    break;
  } else if (input[mid1] < target2) {
    start1 = mid1 + 1;
  } else {
    end1 = mid1 - 1;
  }
}

//! Group the elements by frequency
let input2 = [1, 1, 2, 3, 3, 3];
let obj = {};
for (let i = 0; i < input2.length; i++) {
  if (obj[input2[i]]) {
    obj[input2[i]]++;
  } else {
    obj[input2[i]] = 1;
  }
}
console.log(obj);
