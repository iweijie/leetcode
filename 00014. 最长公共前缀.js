// 14. 最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs || !strs.length) return "";
    let prefix = strs[0];
    let index = 1;
    while (prefix && index < strs.length) {
        const s = strs[index];
        let i = 0;
        for (; i < prefix.length; i++) {
            if (prefix[i] !== s[i]) {
                break;
            }
        }
        index++;
        prefix = prefix.slice(0, i);
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
