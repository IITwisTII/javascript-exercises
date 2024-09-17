const removeFromArray = function(array, ...itemToBeDeleted) {
    for (let i = 1; i < arguments.length; i++) {
        if (array.includes(arguments[i])) {
            for (let n = array.length; n >= 0 ; n--) {
                numberOfItemsToBeDeleted = 0;

                if (array[n] == arguments[i]) {
                    numberOfItemsToBeDeleted++;
                }

                indexOfItemToBeDeleted = array.indexOf(arguments[i])       
                array.splice(indexOfItemToBeDeleted, numberOfItemsToBeDeleted)
            }
        } 
    }
    return array;
};

console.log(removeFromArray([2, 2, 2], 2));

// Do not edit below this line
module.exports = removeFromArray;