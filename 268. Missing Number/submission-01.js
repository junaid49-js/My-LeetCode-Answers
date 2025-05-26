var missingNumber = function(nums) {
    if(!nums.includes(0)){
        return 0
    }
    nums.sort((a,b) => a-b)
    let n = nums.length - 1;
    for(let i = 1; i <= nums.length;i++){
        if(nums[i] !== i){
            return i
        }
    }


};
