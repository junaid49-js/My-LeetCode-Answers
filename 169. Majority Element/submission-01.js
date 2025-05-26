var majorityElement = function(nums) {
    const map = new Map();
    let maxCount = 0;
    let maxNum = null;

    for (let num of nums){
        const count = (map.get(num) || 0) + 1;
        map.set(num, count);

        if (count > maxCount){
            maxCount = count;
            maxNum = num;
        }
    }
    return maxNum;
};
