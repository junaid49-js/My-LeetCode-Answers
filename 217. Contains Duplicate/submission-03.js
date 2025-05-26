var containsDuplicate = function(nums) {
    let numbersHashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let char = nums[i];
        if (numbersHashMap.has(char)) {
            return true;
        } else {
            numbersHashMap.set(char, 1)
        }
    }
    return false;
};
