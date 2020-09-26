// 15. 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/** 超时 头疼 */
// var threeSum = function (nums) {
//     const cache = {};
//     const list = [];
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         Object.keys(cache).forEach((key1) => {
//             const cache1 = cache[key1];
//             Object.keys(cache1).forEach((key2) => {
//                 const cache2 = cache1[key2];
//                 if (cache2[num] === true) return;
//                 cache2[num] = true;
//                 if (Number(key1) + Number(key2) + num === 0) {
//                     setValue(cache, key1, key2, num);
//                     list.push([+key1, +key2, num]);
//                 }
//             });
//             if (cache1[num] === undefined) {
//                 cache1[num] = {};
//             }
//         });

//         if (cache[num] === undefined) {
//             cache[num] = {};
//         }
//     }
//     console.log(cache);
//     return list;
// };

// const setValue = (cache, key1, key2, key3) => {
//     if (!cache[key1][key3]) cache[key1][key3] = {};
//     if (!cache[key2]) cache[key2] = {};
//     if (!cache[key3]) cache[key3] = {};
//     const cache2 = cache[key2];
//     const cache3 = cache[key3];

//     if (!cache2[key3]) cache2[key3] = {};
//     if (!cache2[key1]) cache2[key1] = {};
//     if (!cache3[key2]) cache3[key2] = {};
//     if (!cache3[key1]) cache3[key1] = {};

//     cache[key1][key2][key3] = true;
//     cache[key1][key3][key2] = true;
//     cache[key2][key1][key3] = true;
//     cache[key2][key3][key1] = true;
//     cache[key3][key2][key1] = true;
//     cache[key3][key1][key2] = true;
// };
// [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const list = [];
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    if (nums[i - 1] !== undefined && nums[i - 1] === nums[i]) continue;
    let j = i + 1;
    let n = len - 1;
    while (j < n) {
      const num = nums[i] + nums[j] + nums[n];
      if (num === 0) {
        list.push([nums[i], nums[j++], nums[n--]]);
        while (nums[j] === nums[j - 1]) j++;
      } else if (num < 0) {
        j++;
      } else {
        n--;
      }
    }
  }
  return list;
};

console.time("time");
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));

console.timeEnd("time");
console.log(1);
