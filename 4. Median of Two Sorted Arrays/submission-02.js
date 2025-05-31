var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = nums1.concat(nums2).sort((a,b) => a-b);
    let n = mergedArray.length;
    if (n % 2 !== 0) {
        median = mergedArray[Math.floor(n / 2)];
    }else {
        let mid1 = mergedArray[Math.floor(n / 2) - 1];
        let mid2 = mergedArray[Math.floor(n / 2)];
        median = (mid1 + mid2) / 2;
    };
    return median;
};
