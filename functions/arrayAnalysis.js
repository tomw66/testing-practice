function analyze(array) {
    if(array.every(element => typeof element == 'number')) {
    function average() {
        const reducer = (previousValue, currentValue) => previousValue + currentValue;
        let sum = array.reduce(reducer);
        let av = sum / array.length;
        return av
    }

    function minimum() {
        let val = array[0];
        array.forEach(element => {
            if(element < val) {val = element} 
        });
        return val
    }

    function maximum() {
        let val = array[0];
        array.forEach(element => {
            if(element > val) {val = element} 
        });
        return val
    }

    let profile = {average: average(array), min: minimum(array), max: maximum(array), length: array.length};
    return profile;
    }
    else {throw new Error('invalid input')};
}

module.exports = analyze;