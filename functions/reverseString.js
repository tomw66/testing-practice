const { reverse } = require("dns");
const { array } = require("yargs");

function reverseString(str) {
    if(typeof str !== 'string') {
        throw new Error('Not a string')
    }
    else {
        let array = str.split('');
        array.reverse();
        array = array.join('');
        return array
    }
}

module.exports = reverseString;