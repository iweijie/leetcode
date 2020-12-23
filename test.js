Promise.prototype.allSettled = function (fn) {
  if (typeof fn !== "function") return this;
  return this.then(
    (data) => {
      fn();
      return data;
    },
    (err) => {
      try {
        fn();
      } catch (error) {
        return error;
      }
      throw err;
    }
  );
};
