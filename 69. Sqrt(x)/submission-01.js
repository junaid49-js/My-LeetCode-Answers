var mySqrt = function(x) {
    let ans = 0;
    if(x == 0){
        return 0;
    }
    for(let i = 1; i <= x; i = i + 2){
        x = x - i;
        ans++
        if(x <= 0){
            return ans
        }
    }
    return ans
};
