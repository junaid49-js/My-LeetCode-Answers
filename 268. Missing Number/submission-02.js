var missingNumber = function(nums) {
    nums.sort((a,b) => a-b)
    let n = nums.length - 1;
    for(let i = 0; i <= nums.length;i++){
        if(nums[i] !== i){
            return i
        }
    }
};
