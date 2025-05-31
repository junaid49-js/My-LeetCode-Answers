var isPalindrome = function(x) {
    let s = x.toString();
    let xx = +s.split('').reverse().join('');
    if(x == xx){
        return true;
    }
    return false;
};
