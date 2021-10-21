    //if(!(typeof str === 'string' && key >= 0 && key <= 26)) or maybe just typeof number. also check for symbols and numbers in string at some point

    function caesar(str, key) {
        if(typeof str == 'string' || typeof key == 'number') {
        let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

        function stringToArray() {
            return str.split('');
        }
    
        function arrayToString(a) {
            let b = a.join('')
            return b;
        }

        function cipherBet() {
            let shifted = [];
            for(let i = 0; i < alphabet.length; i++) {
                let trans = i - key;
                if(trans >= 0) {
                    shifted[trans] = alphabet[i]
                }
                else {
                    shifted[trans + alphabet.length] = alphabet[i]
                }}
                return shifted;
        }
    
        function encrypt() {
            let st = stringToArray(str);
            let shifted = cipherBet();
            for(let i = 0; i < st.length; i++) {
                for(let j = 0; j < alphabet.length; j++) {
                    if(st[i] === alphabet[j]) {
                        st[i] = shifted[j];
                        break;
                    }
                }
            }
            return st;
        }
        return arrayToString(encrypt());
    }
else {throw new Error('invalid input')};
};
    
    module.exports = caesar;