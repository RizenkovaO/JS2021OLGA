function add(a,b) {
    console.log(a+b);
}

//add(2,3);


const args = process.argv.slice(2).map(
    function (value, index, fullArray){
        return Number(value);
    }
)
console.log(add(args[0], args[1]));

require('./output.js');