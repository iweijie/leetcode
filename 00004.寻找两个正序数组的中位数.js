// 4. 寻找两个正序数组的中位数
// 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。

// 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

// 你可以假设 nums1 和 nums2 不会同时为空。

// 示例 1:

//     nums1 = [1, 3]
//     nums2 = [2]

//     则中位数是 2.0
//     示例 2:

//     nums1 = [1, 2]
//     nums2 = [3, 4]

//     则中位数是 (2 + 3)/2 = 2.5

/**
 * 二分法 分割， 如下：
 *
 *                 i
 *         1  7  | 8  9
 *               └───┐
 *         3  6    9 | 10  34
 *                     j
 *
 *               |  |
 *               v  v
 *                    i
 *         1  7   8 | 9
 *              ┌───┘
 *         3  6 | 9  10  34
 *                j
 *
 * 极端的例子：
 *
 * 例子1：
 *                      i
 *         1  2  3  4 |
 *       ┌────────────┘
 *       | 5  6  7  8
 *         j
 *
 * 例子2：
 *         i
 *       | 5  6  7  8
 *       └────────────┐
 *         1  2  3  4 |
 *                  j
 *
 *
 * 规则：
 * 1. 左边元素等于右边元素， 或者多一位
 * 2. 分割线左边的所有元素，要小于等于右边的所有元素（这样可以判断当前 分割线左边的所有元素小于右边的所有元素）
 *       - 第二个数组左边元素的最大值，要小于等于第一个数组分割线右边的最小值
 *       - 第二个数组右边元素的最小值，要大于等于第一个数组分割线左边的最大值
 */

/**
 * 依据官方解题技巧
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 如果 第二个数组比第一个长度小， 交换， 可以减少遍历次数
  if (nums1.length > nums2.length) {
    const temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  let m = nums1.length;
  let n = nums2.length;

  //  取中位数， +1 是为了符合上面的规则1；
  const median = parseInt((m + n + 1) / 2);

  let left = 0;
  let right = m;
  let i, j;
  while (left < right) {
    // 二分法 取中， 用于获取分割两个数组的标记
    i = left + parseInt((right - left) / 2);
    j = median - i;

    const temp1 = nums1.slice();
    temp1.splice(i, 0, "|");
    const temp2 = nums2.slice();
    temp2.splice(j, 0, "|");
    console.log(temp1);
    console.log(temp2);
    // 比对 第一数组的 i 值 与 第二数组的 j-1 ； 需满足规则 2-2
    if (nums1[i] < nums2[j - 1]) {
      // 分割区间  [i+1, right]
      left = i + 1;
    } else {
      // 分割区间  [left, i]
      right = i;
    }
  }
  i = left;
  j = median - left;

  //   MAX_VALUE  MIN_VALUE
  const tMin = i <= 0 ? Number.MIN_SAFE_INTEGER : nums1[i - 1];
  const tMax = i >= m ? Number.MAX_SAFE_INTEGER : nums1[i];
  const bMin = j <= 0 ? Number.MIN_SAFE_INTEGER : nums2[j - 1];
  const bMax = j >= n ? Number.MAX_SAFE_INTEGER : nums2[j];

  if ((m + n) % 2) {
    return Math.max(tMin, bMin);
  }
  return (Math.max(tMin, bMin) + Math.min(tMax, bMax)) / 2;
};
