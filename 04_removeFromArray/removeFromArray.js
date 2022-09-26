const removeFromArray = function(array,...args) {
    args.forEach((arg) => {
        let index = array.indexOf(arg);
        if (index >-1) 
            array.splice(index, 1);
        });
        return array;
    };
    
    // let index = array.indexOf(args);
    // array.splice(index);
    // return array;


// Do not edit below this line
module.exports = removeFromArray;
