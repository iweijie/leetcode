const times = (num, func) => {
    for (let i = 0; i < num; i++) {
        func && func(i);
    }
};

class Sudoku {
    constructor() {
        this.nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.store = this.getInitStore();
    }

    getInitStore() {
        const list = [];
        for (let i = 0; i < 9; i++) {
            list.push([]);
        }
        const first = list[0];
        const nums = this.nums.slice();
        while (nums.length) {
            const index = Math.floor(Math.random() * nums.length);
            first.push(nums.splice(index, 1)[0]);
        }
        return list;
    }

    getRandomNum(nums) {
        nums = nums || this.nums;
        const len = nums.length;
        const num = Math.floor(Math.random() * len);
        return nums[num];
    }

    getCanFillNum([top, left]) {}
}

6 * 5 * 4 * 3 * 2 * ((6 * 5 * 4 * 3 * 2)/ 2) ;
