//! Transpose of Matrix

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let transpose = [[], [], []];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    transpose[j][i] = matrix[i][j];
  }
}

console.log(transpose);

//! 2. Diagonal Sum of Square Matrix
// Description: Find the sum of both main diagonals.
// Input:
// [
// ]
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// Output: 25 (1+5+9 + 3+5+7 – 5 (counted twice))

let matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = 0;

for (let i = 0; i < matrix2.length; i++) {
  for (let j = 0; j < matrix2.length; j++) {
    if (i == j) {
      sum = sum + matrix2[i][j]; // 1 + 5 + 9
    }
  }

  for (let j = 0; j < matrix2.length; j++) {
    if (i + j == matrix2.length - 1) {
      sum = sum + matrix2[i][j]; // 3 + 5 + 7
    }
  }
}

console.log(sum - 5); //output = 25

//! Spiral pattern

//! Search in 2D Matrix
// Description: Return true if a given element exists.
// Input: matrix + target = 5
// [
// ]
// [1, 2, 3],
// [4, 5, 6]
// Output: true

let matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
];

let target = 5;
let flag = false;

for (let i = 0; i < matrix3.length; i++) {
  for (let j = 0; j < matrix3.length; j++) {
    if (matrix3[i][j] == target) {
      flag = true;
      break;
    }
  }
}

if (flag) {
  console.log("Yes the element exist in matrix");
}

//! Rotate Matrix by 90 Degrees Clockwise
// Description: Rotate a square matrix in-place.

// Input
// [
// [1, 2],
// [3, 4]
// ]

// Output
// [
// [3, 1],
// [4, 2]
// ]

let matrix4 = [
  [1, 2],
  [3, 4],
];

// turn matrix by 90 degrees
let turned = [[], []];

console.log(turned);

//!Count Zeros and Ones in a Matrix
// Description: Count the number of 0s and 1s in a 2D matrix.
// Input:
// [
// ]
// [1, 0, 1],
// [1, 1, 0],
// [0, 0, 1]
// Output:

let matrix5 = [
  [1, 0, 1],
  [1, 1, 0],
  [0, 0, 1],
];
let obj = { ones: 0, zeroes: 0 };

for (let i = 0; i < matrix5.length; i++) {
  for (let j = 0; j < matrix5.length; j++) {
    if (matrix5[i][j] == 1) {
      obj.ones++;
    } else {
      obj.zeroes++;
    }
  }
}
console.log(obj);

//!Set Matrix Zeros
// Description: If any element is 0, set its entire row and column to 0.
// Input:
// [
// ]
// [1, 2, 3],
// [4, 0, 6],
// [7, 8, 9]
// Output:
// [
// [1, 0, 3],
// [0, 0, 0],
// [7, 0, 9]
// ]

let matrix6 = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
];

let zeroesMatrix = [[], [], []];

for (let i = 0; i < matrix6.length; i++) {
  for (let j = 0; j < matrix6.length; j++) {
    if (matrix6[i][j] == 0) {
      zeroesMatrix[i][j] = 0;
    } else {
      zeroesMatrix[i][j] = matrix6[i][j];
    }
  }
}
console.log(zeroesMatrix);

//!  Count Elements Greater than a Threshold
// Description: Count how many elements are greater than a given number k.
// Input: matrix + k = 5
// [
// [2, 5, 7],
// [1, 8, 3]
// ]

let count = 0;
let number = 5;

let matrix7 = [
  [2, 5, 7],
  [1, 8, 3],
];

for (let i = 0; i < matrix7.length; i++) {
  for (let j = 0; j < matrix7.length; j++) {
    if (matrix7[i][j] > number) {
      count++;
    }
  }
}
console.log(count);

//! Find Row with Maximum Sum
// Description: Return the row which has the highest sum of elements.
// Input:
// [
// ]
// [1, 2, 3],
// [4, 5, 6],
// [0, 1, 1]

// Output = [4, 5, 6]

let matrix8 = [
  [1, 2, 3],
  [4, 5, 6],
  [0, 1, 1],
];

let maxSum = 0;
let result = [];

for (let i = 0; i < matrix8.length; i++) {
  let sum = 0;
  for (let j = 0; j < matrix8.length; j++) {
    sum += matrix8[i][j];
  }
  if (sum > maxSum) {
    maxSum = sum;
  }
}
console.log(maxSum);