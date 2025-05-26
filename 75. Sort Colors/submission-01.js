var sortColors = function(nums) {
    var r = 0;
    var w = 0;
    var b = 0;
    let i = 0;
    for(let num of nums){
        if(num == 0){
            r++;
        } else if(num == 1){
            w++;
        }else if(num == 2){
            b++;
        }
    }
        while(r > 0){
            nums[i] = 0;
            i++;
            r--;
        }
        while(w > 0){
            nums[i] = 1;
            i++;
            w--;
        }
        while(b > 0){
            nums[i] = 2;
            i++;
            b--;
        }
    
};
