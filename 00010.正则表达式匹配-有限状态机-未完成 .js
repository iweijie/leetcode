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

// 0：无； 1 ：a* 这种模式； 2：.* 这种模式；
let localS = "",
    localP = "",
    isMatchAll = false,
    // * 号前缀文字
    patternPrefix = "",
    pIndex = 0,
    index = 0,
    matchAllObj = {
        pIndex: 0,
        index: 0,
    };

const end = () => end;
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    reset();
    let handle = state;
    localP = p;
    localS = s;
    pIndex = 0;
    index = 0;
    for (; index < s.length; index++) {
        handle = handle(s[index]);
    }
    if (end === handle) return false;
    if (pIndex === p.length && index === s.length) return true;

    return false;
};

const state = (s) => {
    if (pIndex >= localP.length) return end;

    const p = localP[pIndex];

    if (s === p || p === ".") {
        pIndex++;
        return state;
    } else if (p === "*") {
        patternPrefix = localP[pIndex - 1];
        pIndex++;
        if (patternPrefix === ".") {
            index--;
            return saveMathAllInfo(s);
        } else {
            return combine(s);
        }
    } else if (localP[pIndex + 1] === "*") {
        pIndex += 2;
        return state(s);
    }

    if (isMatchAll) return matchAll;

    return end;
};

const combine = (s) => {
    while (localP[pIndex] === patternPrefix) {
        pIndex++;
    }
    return repeat(s);
};

const repeat = (s) => {
    if (patternPrefix === s) {
        return repeat;
    } else {
        return state(s);
    }
};

const saveMathAllInfo = (s) => {
    let p = localP[pIndex];
    // 合并多个 .*
    while (true) {
        if (p === "." && localP[pIndex + 1] === "*") {
            pIndex += 2;
            p = localP[pIndex];
        } else {
            break;
        }
    }

    matchAllObj.is = true;
    matchAllObj.pIndex = pIndex;
    matchAllObj.index = index;
    return matchAll(s);
};

const matchAll = (s) => {
    const p = localP[pIndex];
    if (p === s || p === ".") {
        index++;
        pIndex++;
        return state;
    }
    return matchAll;
};

const reset = () => {
    localS = "";
    localP = "";
    isMatchAll = false;
    // * 号前缀文字
    patternPrefix = "";
    pIndex = 0;
    index = 0;
    matchAllObj = {
        pIndex: 0,
        index: 0,
    };
};

// console.log(isMatch("adb", "ab*db"));
console.log(isMatch("aaa", "ab*a*c*a"));