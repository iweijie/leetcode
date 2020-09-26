// 16. 最接近的三数之和
// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

// 示例：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

// 提示：

// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target = 0) {
  nums.sort((a, b) => a - b);
  let i = 0;
  let len = nums.length;
  let min = Number.MAX_SAFE_INTEGER;
  let sign = null;
  for (; i < len - 2; i++) {
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const current = nums[i] + nums[left] + nums[right];
      const num = current - target;

      if (min > Math.abs(num)) {
        min = Math.abs(num);
        sign = current;
      }

      if (num === 0) {
        sign = current;
        break;
      } else if (num < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return sign;
};

console.log(threeSumClosest([0, 2, 1, -3], 1));
