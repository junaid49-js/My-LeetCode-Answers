var longestCommonPrefix = function(strs) {
    const shortestWord = strs.reduce((shortest, current) => 
    current.length < shortest.length ? current : shortest
    );
    let lcp = '';
    for (let i = 0; i < shortestWord.length; i++) {
        let curChar = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== curChar) {
                return lcp;
            }
        }
                lcp = lcp + curChar;
    }
            return lcp;
};
