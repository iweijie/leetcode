// 10. 正则表达式匹配
// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

// 说明:

// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。

// 示例 1:

//   输入:
//   s = "aa"
//   p = "a"
//   输出: false
//   解释: "a" 无法匹配 "aa" 整个字符串。

// 示例 2:

//   输入:
//   s = "aa"
//   p = "a*"
//   输出: true
//   解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。

// 示例 3:

//   输入:
//   s = "ab"
//   p = ".*"
//   输出: true
//   解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。

// 示例 4:

//   输入:
//   s = "aab"
//   p = "c*a*b"
//   输出: true
//   解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。

// 示例 5:

//   输入:
//   s = "mississippi"
//   p = "mis*is*p*."
//   输出: false

// *为空
//   s = b*abab
//   p =   abab

// *为多
//   s = b*a
//   p = bbbba

// .
//   s = b.a
//   p = bca
// .*
//   s = b.*cd
//   p = bcccd

const empty = void 0;
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p, si = 0, pi = 0) {
    if (s === p && s === "") return true;
    const ss = s[si];
    const sp = p[pi];
    if (p[pi + 1] && p[pi + 1] === "*") {
        if (ss === empty) {
            if (si === s.length && pi + 2 === p.length) return true;
        }
        return isMatch(s, p, si, pi + 2) || isMatch(s, p, si, pi + 1);
    }
    if (ss === undefined || sp === undefined) return false;

    if (sp === "*") {
        const preStr = p[pi - 1];
        let i = pi - 1;
        while (true) {
            if (p.slice(i, i + 2) == p.slice(i + 2, i + 4)) {
                i += 2;
            } else {
                break;
            }
        }

        if (preStr !== ".") {
            return ss === preStr
                ? isMatch(s, p, si, i + 2) || isMatch(s, p, si + 1, i)
                : false;
        }

        return isMatch(s, p, si, pi + 1) || isMatch(s, p, si + 1, pi - 1);
    } else if (ss === sp || sp === ".") {
        if (
            (si === s.length - 1 && pi === p.length - 1) ||
            (si === s.length && pi === p.length)
        ) {
            return true;
        }
        return isMatch(s, p, si + 1, pi + 1);
    }

    return false;
};
console.time("i");
console.log(isMatch("aaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*a*c"));

console.timeEnd("i");
console.log(isMatch("aaa", "a*a"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("abc", ".*c"));
// mis*i
// missi
