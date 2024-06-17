//data() // cannot call the arrow function here because arrow functions cannot be hoisted
const data = () => {
    console.log('here');
}
data()

normalFunction() // can call the normal function here because normal functions will be hoisted
function normalFunction(){
    console.log('From Normal Fuction')
}

normalFunction()


const car = {
    brand: "Toyota",
    displayBrand: () => {
        console.log("Brand: " + this.brand); // Outputs: Brand: undefined
    }
};

car.displayBrand();

{
    const square = x => x * x; // Arrow function
    console.log(square(20))
}


{
    console.log(square(20))
    function square(x) { return x * x; } // Normal function
}
