// Normalized Consonant Encoding
const normCEn = (s) => {
  let result = "";
  for (let j = 0; j < s.length; j++) {
    let char = s[j].toLowerCase();
    if (
      char !== "a" &&
      char !== "e" &&
      char !== "i" &&
      char !== "o" &&
      char !== "u" &&
      char !== "y"
    ) {
      result = result + "." + char;
    }
  }
  return result;
};
console.log(normCEn("tour"));

// Manager loves to use AI
const getAppraisalPercentage = (a, k, b) => {
  // sort arr
  a.sort((a, b) => b - a);
  // kth element
  let kthElement = a[k - 1];
  // apply formla
  let res = (kthElement / b) * 100;
  return Math.floor(res);
};
let a = [10000, 2000, 4000, 5000, 7000];
let k = 2;
let b = 40000;
console.log(getAppraisalPercentage(a, k, b));
