// 5. 最长回文子串
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

//     输入: "babad"
//     输出: "bab"
//     注意: "aba" 也是一个有效答案。
//     示例 2：

//     输入: "cbbd"
//     输出: "bb"

/** 中心扩散法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = 1;
  let begin = 0;
  for (let i = 0; i < s.length; i++) {
    const odd = getMaxLen(s, i, i);
    const even = getMaxLen(s, i, i + 1);
    const maxLen = Math.max(odd, even);
    if (max < maxLen) {
      max = maxLen;
      begin = even > odd ? i - (max / 2 - 1) : i - Math.floor(max / 2);
    }
  }

  return s.slice(begin, begin + max);
};

const getMaxLen = (s, i, j) => {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i--;
    j++;
  }
  return j - i - 1;
};
console.log(longestPalindrome("babad"));

// 1 2 3 1 2 2
// 0 1 2 3 4 5

// 3 2/2

// 4

// 2/2 1 - 0 -1

// 1 2 2 1
// 0 1 2 3
// 4 /2 2 1 -1

// 3 2 1 1 2 3

// 0 1 2 3 4 5

// 6/2 3  2

// 3 2 1 2 3
5 / 2;
// 0 1 2 3 4

//  5/2 2

// parseInt(5 / 2) 2 - i
