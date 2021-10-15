const calculator = {
    add: function(a, b) {
        if(typeof (a && b) === 'number' ) {
            return a + b
        }
        else {throw new Error ('invalid input')}
    },
    subtract: function(a, b) {
        if(typeof (a && b) === 'number' ) {
            return a - b
        }
        else {throw new Error ('invalid input')}
    },
    divide: function(a, b) {
        if(typeof (a && b) === 'number' ) {
            return a / b
        }
        else {throw new Error ('invalid input')}
    },
    multiply: function(a, b) {
        if(typeof (a && b) === 'number' ) {
            return a * b
        }
        else {throw new Error ('invalid input')}
    },
}

module.exports = calculator;