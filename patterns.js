// bildp logical thinking
// Rectangular Star Pattern
const rSP = (n) => {
  let ans = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ans += "*";
    }
    ans += "\n";
  }
  return ans;
};
console.log(rSP(5));
// Right-Angled Triangle Pattern
const rAT = (n) => {
  let ans = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      ans += "*";
    }
    ans += "\n";
  }
  return ans;
};
console.log(rAT(5));
// Right-Angled Number Pyramid
const rAPN = (n) => {
  let ans = "";
  for (i = 0; i < n; i++) {
    for (j = 1; j <= i + 1; j++) {
      ans += j;
    }
    ans += "\n";
  }
  return ans;
};
console.log(rAPN(5));
//Right-Angled Number Pyramid - II
const rANPSecond = (n) => {
  let ans = "";
  for (i = 0; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      ans += i;
    }
    ans += "\n";
  }
  return ans;
};
console.log(rANPSecond(5));
//Inverted Right Pyramid
const iRP = (n) => {
  let ans = "";
  for (let i = n; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      ans += "*";
    }
    ans += "\n";
  }
  return ans;
};
console.log(iRP(5));
// Inverted Numbered Right Pyramid
const iNRP = (n) => {
  let ans = "";
  for (i = n; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      ans += j;
    }
    ans += "\n";
  }
  return ans;
};
console.log(iNRP(5));
// Star Pyramid
const sP = (n) => {
  let ans = "";
  for (let i = 0; i < n; i++) {
    let space = " ".repeat(n - i - 1);
    let star = "*".repeat(i * 2 + 1);
    ans += space + star + "\n";
  }
  return ans;
};
console.log(sP(5));
//Inverted Star Pyramid
const iNV = (n) => {
  let ans = "";
  for (let i = n; i >= 1; i--) {
    const space = " ".repeat(n - i);
    const star = " ".repeat(i * 2 - 1);
    ans += space + star + "\n";
  }
  return ans;
};
console.log(iNV(5));
