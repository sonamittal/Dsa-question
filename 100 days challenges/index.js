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
