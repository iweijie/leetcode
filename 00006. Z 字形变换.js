// 6. Z 字形变换
// 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

//     L   C   I   R
//     E T O E S I I G
//     E   D   H   N

// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);

// 示例 1:

//     输入: s = "LEETCODEISHIRING", numRows = 3
//     输出: "LCIRETOESIIGEDHN"
// 示例 2:

//     输入: s = "LEETCODEISHIRING", numRows = 4
//     输出: "LDREOEIIECIHNTSG"
//     解释:

//     L     D     R
//     E   O E   I I
//     E C   I H   N
//     T     S     G

/**
 * 二维数组解法
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows <= 1) return s;
  const list = [];
  const getPosition = state(numRows);

  for (let i = 0; i < numRows; i++) {
    list.push([]);
  }

  //    L E  E  T  C  O  | D  E  I  S  H  I  R
  //   00 01 02 03 12 21 | 30 31 32 33 42 51 60
  //    0 1  2  3  4  5  | 6  7  8  9  10 11 12

  // 1 1
  // 2 2
  // 3 4
  // 4 6
  // 5 8
  // 6 10

  for (let i = 0; i < s.length; i++) {
    const [left, top] = getPosition(i);
    console.log(left, top);
    list[top][left] = s[i];
  }

  return list.flat().join("");
};

const state = (numRows) => {
  const loop = (numRows - 1) * 2;
  return (i) => {
    const index = i % loop;
    const repeat = Math.floor(i / loop);
    const prefix = repeat * (numRows - 1);
    if (index < numRows) {
      return [prefix, index];
    }

    const sign = index - numRows + 1;
    return [prefix + sign, numRows - 1 - sign];
  };
};

// flag 好用  哈哈
// const convert = (s, numRows) => {
//   if (numRows < 2) return s;
//   const rows = [];
//   for (let i = 0; i < numRows; i++) {
//     rows.push([]);
//   }
//   let i = 0,
//     flag = -1;
//   for (let c of s) {
//     rows[i].push(c);
//     if (i == 0 || i == numRows - 1) flag = -flag;
//     i += flag;
//   }

//   return rows.flat().join("");
// };

console.log(convert("LEETCODEISHIR", 4));
// LDREOEIECIHTS
