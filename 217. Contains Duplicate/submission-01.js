var containsDuplicate = function(nums) {
    let newNums = nums.sort();
    for(let i = 1; i < nums.length; i++){
        if(newNums[i] == newNums[i - 1]){
            return true;
        }
    }
    return false;
};
