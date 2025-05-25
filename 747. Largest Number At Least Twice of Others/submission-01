var dominantIndex = function(nums) {
    let nums2 = [...nums];
    nums2.sort((a,b) => a - b);
    let biggestElement = nums2[nums2.length - 1];
    let secondBiggestElement = nums2[nums2.length - 2];
    let divider = biggestElement / secondBiggestElement

    if(divider >= 2){
        return nums.indexOf(biggestElement)
    }
    else{
        return -1
    }
};
