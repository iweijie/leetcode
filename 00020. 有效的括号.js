/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s === "") return true;
  if (s.length % 2) return false;
  const list = [];

  for (let k of s) {
    const last = list[list.length - 1];
    if (k === ")" && last !== "(") return false;
    if (k === "]" && last !== "[") return false;
    if (k === "}" && last !== "{") return false;
  }
};
