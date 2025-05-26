var isValid = function(s) {
    let otherS = [];
    for(let sub of s){
        if(sub == '('){
            otherS.push(')')
        } else if(sub == '{'){
            otherS.push('}')
        } else if(sub == '['){
            otherS.push(']')
        } else if (otherS.pop() !== sub){
            return false
        }
    }
    return !otherS.length
};
