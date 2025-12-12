// linear search concept
const linearSearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return nums[i];
    }
  }
  return -1;
};
console.log(linearSearch([4, 3, 7, 9, 8, 12, 23], 9));

// reverse an array
// const reverseArray = (nums) => {
//   let rev = [];
//   for (let i = nums.length - 1; i >= 0; i--) {
//     rev.push(nums[i]);
//   }
//   return rev;
// };
// console.log(reverseArray([4, 2, 7, 8, 1, 2, 5]));

// Reverse an array in-place
const revAnArray = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
  return nums;
};
console.log(revAnArray([4, 2, 7, 8, 1, 2, 5]));

// find the Sum all elements in an array
const sumOfElement = (nums) => {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total = total + nums[i];
  }
  return total;
};
console.log(sumOfElement([8, 9, 6, 12]));

// Remove duplicates from Sorted array (extra space new array return)
const removeDuplicates = (nums) => {
  let newArray = [nums[0]];
  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    if (newArray[k] !== nums[i]) {
      k = k + 1;
      newArray.push(nums[i]);
    }
  }
  return newArray;
};

console.log(removeDuplicates([0, 0, 3, 3, 5, 6]));

//  Remove duplicates from Sorted array in place
const removeDuplicatesArray = (n) => {
  if (n.length === 0) return 0;
  let k = 0;
  for (let i = 1; i < n.length; i++) {
    if (n[i] !== n[k]) {
      k++;
      n[k] = n[i];
    }
  }
  return k + 1;
};
const arr = [0, 0, 3, 3, 5, 6];
const k = removeDuplicatesArray(arr);
console.log(arr.splice(0, k));
