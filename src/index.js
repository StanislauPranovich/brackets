module.exports = function check(str, bracketsConfig) {
    let arr = [];
    let obj = Object.fromEntries(bracketsConfig);
    str = str.split('');
    for(let key of str) {
        if(arr[0] === key) {
            arr.shift();
        } else if(obj[key]) {
            arr.unshift(obj[key]);
        } else {
            return false;
        }
    }
    return arr.length === 0;
}
