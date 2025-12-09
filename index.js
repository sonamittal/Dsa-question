// Print numbers 1 to 100
const printNumber = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
};
printNumber();
//Print even numbers
const printEvenNumber = () => {
  for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};
printEvenNumber();

// Print odd numbers
const printOddNumber = () => {
  for (let i = 0; i <= 50; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};
printOddNumber();

//Print table of a number
const printTableOfNumber = () => {
  let a = 5;
  for (let b = 1; b <= 10; b++) {
    let table = a * b;
    console.log(table);
  }
};
printTableOfNumber();
//Print sum of first N numbers
const printSumOfNumber = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  console.log("Sum of first " + n + " numbers is:", sum);
};
printSumOfNumber(5);
// Check positive/negative
const checkPosNegNum = () => {
  let a = -2;
  if (a > 0) {
    console.log(" a is postiver number");
  } else {
    console.log("b is negative number");
  }
};
checkPosNegNum();
// Greatest among 3 numbers
const greatestAmgNum = () => {
  let a = 10;
  let b = 15;
  let c = 50;
  if (a >= b && a >= c) {
    console.log("print the a:", a);
  } else if (b >= c && b >= a) {
    console.log("print the b:", b);
  } else {
    console.log("print the c:", c);
  }
};
greatestAmgNum();

// factorial number
const factorialNum = (n) => {
  let totalFac = 1;
  for (let i = n; i >= 1; i--) {
    totalFac = totalFac * i;
    console.log(totalFac);
  }
};
factorialNum(5);

//count digit
const digitNum = (digitNum) => {
  let count = 0;
  while (digitNum > 0) {
    digitNum = Math.floor(digitNum / 10);
    count++;
  }
  return count;
};
console.log(digitNum(4));
console.log(digitNum(14));
console.log(digitNum(234));

// reverse number
const reverseAnArray = () => {
  let n = 123;
  let rev = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    rev = rev * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  console.log("reverse an array:", rev);
};
reverseAnArray();
// // const reverseArr = () => {
// //   n = [1, 2, 4];
// //   let rev = [];
// //   for (i = n.length - 1; i >= 0; i--) {
// //    rev.push(n[i]);
// //   }
// //   console.log(rev);
// // };
// reverseArr();
// palindrome number check
const isPalindromeNum = (num) => {
  let x = num;
  let original = x;
  let rev = 0;
  if (x < 0) {
    console.log("the palindrome number is not:", x);
    return false;
  }
  while (x != 0) {
    let digit = x % 10;
    rev = rev * 10 + digit;
    x = Math.floor(x / 10);
  }
  if (original === rev) {
    console.log("the palindrome number is:", original);
    return true;
  } else {
    console.log(" the palindrome number is not:", original);
    return false;
  }
};
isPalindromeNum(121);
isPalindromeNum(-121);
isPalindromeNum(10);

// array two sm
const twosm = (nms, target) => {
  for (let i = 0; i < nms.length; i++) {
    for (let j = i + 1; j < nms.length; j++) {
      if (nms[i] + nms[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
};
console.log(twosm([2, 7, 5, 11], 13)); // → [0, 1]
// armstrong nmber
const armstrongNm = (n) => {
  let x = n;
  let pow = 3;
  let sm = 0;
  while (n > 0) {
    let digit = n % 10;
    sm = sm + Math.pow(digit, pow);
    n = Math.floor(n / 10);
  }
  if (x == sm) {
    console.log("amstrong nmber is:", x);
    return true;
  } else {
    console.log("not amstrong nmber is:", x);
    return false;
  }
};
armstrongNm(153);
armstrongNm(27);

// Find Greatest Common Divisor of Array
var findGCD = function (nums) {
  let min = nums[0];
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
    if (nums[i] > max) max = nums[i];
  }
  const gCD = function (a, b) {
    while (b != 0) {
      let r = a % b;
      a = b;
      b = r;
    }
    return a;
  };
  return gCD(min, max);
};
console.log(findGCD([2, 5, 6, 9, 10]));

//Divisors of a Number
const divisors = (n) => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      res.push(i);
    }
  }
  console.log(res);
  return res.length === 3;
};
console.log(divisors(4));
