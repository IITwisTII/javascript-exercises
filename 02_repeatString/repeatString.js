const repeatString = function(string, num) {
    let holder = "";
    if (num >= 0) {
        while (num > 0) {
            holder = holder.concat(string);
            num--;
        }
        return holder;
    } else {
        return "ERROR";
    }
}; 

console.log(repeatString("hoe", -1))

// Do not edit below this line
module.exports = repeatString;
