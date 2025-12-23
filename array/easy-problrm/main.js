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
// const removeDuplicates = (nums) => {
//   let newArray = [nums[0]];
//   let k = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if (newArray[k] !== nums[i]) {
//       k = k + 1;
//       newArray.push(nums[i]);
//     }
//   }
//   return newArray;
// };

// console.log(removeDuplicates([0, 0, 3, 3, 5, 6]));

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
const arr = [1, 1, 2];
const k = removeDuplicatesArray(arr);
console.log(arr.splice(0, k));

// second largest nmber
const secondLarNm = (nums) => {
  let max = 0;
  let secondLar = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
    // second codition
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > secondLar && nums[i] !== max) {
        secondLar = nums[i];
      }
    }
  }
  return secondLar;
};
console.log(secondLarNm([8, 8, 7, 5, 6]));

// two sm sorted array
const twoSm = (n, target) => {
  let start = 0;
  let end = n.length - 1;
  while (start < end) {
    let crrSm = n[start] + n[end];
    if (crrSm === target) {
      return [n[start], n[end]];
    } else if (crrSm < target) {
      start++;
    } else {
      end--;
    }
  }
  return null;
};
console.log(twoSm([2, 7, 11, 15], 17));

//  check if Sort an Array
const sortArray = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }
  return true;
};
console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([1, 2, 3, 4]));

// Move Zeroes
const moveZeroes = (nums) => {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));

// Check if Array Is Sorted and Rotated
const check = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
    }
  }
  if (nums[nums.length - 1] > nums[0]) {
    count++;
  }
  return count <= 1;
};
console.log(check([3, 4, 5, 1, 2]));
// if rotate array
const reverse = (nums, left, right) => {
  while (left < right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
};
const rotate = (nums, k) => {
  let n = nums.length;
  k = k % n;
  // step 1 : reverse whole array
  reverse(nums, 0, n - 1);
  // step2: reverse  first k elements
  reverse(nums, 0, k - 1);
  // ste 3 : reverse remaining elements
  reverse(nums, k, n - 1);
  return nums;
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
