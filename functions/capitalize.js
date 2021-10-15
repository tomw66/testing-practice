const { array } = require("yargs");

function capitalize(str) {
    if(typeof str !== 'string') {
        throw new Error('Not a string')
    }
    else {
        let array = str.split('');
        for (let i = 0; i < array.length; i++) {
            if(/[a-zA-Z]/i.test(array[i])) {
                array[i] = array[i].toUpperCase();
                break;
            }
        }
        array = array.join('');
        return array
    }
}

module.exports = capitalize;