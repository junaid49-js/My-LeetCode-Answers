var removeDuplicates = function(nums) {
    let set = new Set(nums);
    nums.length = 0;
    nums.push(...set);
    return nums.length;
};
