//! Print a Pyramid Pattern with Spaces

let n = 3;

for (let i = 1; i <= n; i++) {
  let res = "";

  // Print spaces
  for (let j = 1; j <= n - i; j++) {
    res += " ";
  }

  // Print stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    res += "*";
  }

  console.log(res);
}

//! Print a Square with Border Only
let num2 = 4;

for (let i = 0; i < num2; i++) {
  let res = "";
  for (let j = 0; j < num2; j++) {
    if (i === 0 || i === num2 - 1) {
      res = res + "*";
    } else if (j === 0 || j === num2 - 1) {
      res = res + "*";
    } else {
      res = res + " ";
    }
  }
  console.log(res);
}

//! Count binary zeroes and ones
// Input: "101010110"
// Output: { ones: 5, zeros: 4 }

let str = "101010110";
obj5 = { ones: 0, zeroes: 0 };
for (let i = 0; i < str.length; i++) {
  if (str[i] === "1") {
    obj5.ones++;
  }
  if (str[i] === "0") {
    obj5.zeroes++;
  }
}

console.log(obj5); // output = { ones: 5, zeroes: 4 }

//! Group Users by Role (Objects inside Array):

Input = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" },
];

// Output:
// {
// admin: ["A", "C"],
// user: ["B"]
// }
obj2 = {};
let admin = [];
let user = [];

for (let i = 0; i < Input.length; i++) {
  if (Input[i].role === "admin") {
    admin.push(Input[i].name);
  } else {
    user.push(Input[i].name);
  }
}
obj2.admin = admin;
obj2.user = user;
console.log(obj2);

//! Unique binary Strings
// Input: ["101", "101", "000", "111", "000"]
// Output: ["101", "000", "111"]

let brr = ["101", "101", "000", "111", "000"];
let obj3 = {};
for (let i = 0; i < brr.length; i++) {
  if (obj3[brr[i]]) {
    obj3[brr[i]]++;
  } else {
    obj3[brr[i]] = 1;
  }
}
for (let key in obj3) {
  if (obj3[key] == 1) {
    console.log(key); // output = 111
  }
}

//!
