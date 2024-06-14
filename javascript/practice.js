//String
console.log('String')
let single = 'Hello, World!';
let double = "Hello, World!";
let name;
let template = `Hello, ${name}!`; // Template literals allow for interpolation and multi-line strings

console.log(single);   // Output: Hello, World!
console.log(double);   // Output: Hello, World!
console.log(template); // Output: Hello, undefined! (assuming name is not defined)

//Number
console.log('\nNumber')
let integer = 42;
let floatingPoint = 3.14;
let negative = -42;

console.log(integer);       // Output: 42
console.log(floatingPoint); // Output: 3.14
console.log(negative);      // Output: -42

//Boolean
console.log('\nBoolean')
let isJavaScriptFun = true;
let isLearningHard = false;

console.log(isJavaScriptFun); // Output: true
console.log(isLearningHard);  // Output: false

//Null
console.log('\nNull')
let emptyValue = null;
console.log(emptyValue); // Output: null

//Undefined
console.log('\nUndefined')
let notDefined;
console.log(notDefined); // Output: undefined

//Symbol
console.log('\nSymbol')
let sym1 = Symbol('description');
let sym2 = Symbol('description');

console.log(sym1 === sym2); // Output: false (each symbol is unique)

console.log('\nArithmetic Operators')
let a = 5;
let b = 3;

console.log(a + b); // Output: 8
console.log(a - b); // Output: 2
console.log(a * b); // Output: 15
console.log(a / b); // Output: 1.6666666666666667
console.log(a % b); // Output: 2
console.log(a ** b); // Output: 125

a++;
console.log(a); // Output: 6

b--;
console.log(b); // Output: 2

console.log('\nAssigment Operators')
let x = 10;
x += 5;  // x = x + 5
console.log(x); // Output: 15

x -= 3;  // x = x - 3
console.log(x); // Output: 12

x *= 2;  // x = x * 2
console.log(x); // Output: 24

x /= 4;  // x = x / 4
console.log(x); // Output: 6

x %= 5;  // x = x % 5
console.log(x); // Output: 1

x **= 3; // x = x ** 3
console.log(x); // Output: 1

console.log('\nComparison Operators')
let m = 5;
let n = '5';

console.log(m == n);  // Output: true (loose equality, type coercion)
console.log(m === b); // Output: false (strict equality, no type coercion)

console.log(m != n);  // Output: false (loose inequality, type coercion)
console.log(m !== n); // Output: true (strict inequality, no type coercion)

console.log(m > 3);   // Output: true
console.log(m >= 5);  // Output: true
console.log(m < 10);  // Output: true
console.log(m <= 5);  // Output: true

console.log('\nLogical Operators')
{
    let z = true;
    let y = false;
    
    console.log(z && y); // Output: false
    console.log(z || y); // Output: true
    console.log(!x);     // Output: false
    
    console.log('\nBitwise Operators')
    let a = 5;  // 0101 in binary
    let b = 3;  // 0011 in binary
    
    console.log(a & b); // Output: 1  (0001 in binary)
    console.log(a | b); // Output: 7  (0111 in binary)
    console.log(a ^ b); // Output: 6  (0110 in binary)
    console.log(~a);    // Output: -6 (Inverts all bits: 1010 in binary, which is -6 in two's complement)
    
    console.log(a << 1); // Output: 10 (1010 in binary, shifts left by 1 bit)
    console.log(a >> 1); // Output: 2  (0010 in binary, shifts right by 1 bit)
    console.log(a >>> 1); // Output: 2 (0010 in binary, shifts right by 1 bit with zero-fill)
}

console.log('\nString Operators')
let str1 = 'Hello';
let str2 = 'World';

console.log(str1 + ' ' + str2); // Output: Hello World

console.log('\nConditional (Ternary) Operator')
let isMember = true;
let fee = isMember ? '$2.00' : '$10.00';

console.log(fee); // Output: $2.00

console.log('\nType Operators')
let num = 42;
console.log(typeof num); // Output: number

let str = 'Hello';
console.log(typeof str); // Output: string

let arr = [1, 2, 3];
console.log(typeof arr); // Output: string
console.log(arr instanceof Array); // Output: true
console.log(arr instanceof Object); // Output: true

console.log('\Object')
let person = {
    name: 'Alice',
    age: 25,
    greet: function() {
        console.log('Hello!');
    }
};

console.log(person.name); // Output: Alice
person.greet();           // Output: Hello!

console.log('\nArray')
let numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]);   // Output: 1
numbers.push(6);           // Adds 6 to the end of the array
console.log(numbers);      // Output: [1, 2, 3, 4, 5, 6]

let mixedArray = [1, 'hello', true, null];
console.log(mixedArray);   // Output: [1, 'hello', true, null]

console.log('\nFunction')
console.log(greet('Alice')); // Output: Hello, Alice!
function greet(name) {
    return `Hello, ${name}!`;
}

console.log('\nFunction Expression')
{
    const greet = function(name) {
        return `Hello, ${name}!`;
    };
    console.log(greet('Bob')); // Output: Hello, Bob!
}

console.log('\nArrow Expression')
{
    const greet = (name) => {
        return `Hello, ${name}!`;
    };
    
    // If the function has a single statement, the braces and return keyword can be omitted
    const greetShort = name => `Hello, ${name}!`;
    
    console.log(greet('Ajay'));       // Output: Hello, Charlie!
    console.log(greetShort('Ajay'));  // Output: Hello, Charlie!
}

console.log('\nImmediately Invoked Function Expression (IIFE)')
{
    (function() {
        console.log('This is an IIFE');
    })();
    
    (function(name) {
        console.log('Hello, ' + name + '!');
    })('Dave');
    
}

console.log('\nHigher-Order Functions')
{
    const greet = (name) => `Hello, ${name}!`;
    const greetMe = () => `Hello, Ajay!`;

    const repeat = (n, fn, nextFxn) => {
        for (let i = 0; i < n; i++) {
            console.log(fn());
            console.log(nextFxn());
        }
    };

    repeat(3, () => greetMe(), () => greet('Balen')); // Output: Hello, Eve! (repeated 3 times)
}

console.log('\nCallback Functions')
{
    function processUserInput(callback) {
        const name = "Callback Function";
        callback(name);
    }
    const greet = (name) => console.log(`Hello, ${name}!`);

    processUserInput((name) => greet(name));
    
}

console.log('\nMethods')
{
    const person = {
        name: 'Frank',
        greet: function() {
            return `Hello, ${this.name}!`;
        }
    };
    
    console.log(person.greet()); // Output: Hello, Frank!
    
}

console.log('\nConstructors Functions')
{
    function Person(name, age, lastname) {
        this.name = name;
        this.age = age;
        this.lastname = lastname;
        this.fullName = () => this.name + ' ' + this.lastname;
    }
    
    const john = new Person('John', 30, 'Rai');
    console.log(john.name); // Output: John
    console.log(john.age);  // Output: 30
    john.name = "Ajay";
    console.log(john.name); // Output: Ajay
    console.log(john.fullName()); // Output: Ajay
    
}

console.log('\nDefault Parameters')
{
    function greet(name = 'Guest') {
        return `Hello, ${name}!`;
    }
    
    console.log(greet());         // Output: Hello, Guest!
    console.log(greet('Hank'));   // Output: Hello, Hank!
    
}

console.log('\nRest Parameters')
{
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
    
    function logging(...numbers) {
        console.log(numbers)
    }

    console.log(sum(1, 2, 3));       // Output: 6
    console.log(sum(1, 2, 3, 4, 5)); // Output: 15
    logging(1, 2, 3, 4, 5); 
}

console.log('\nSpread Operators')
{
    const numbers = [1, 2, 3];
    const moreNumbers = [4, 5, 6];

    function add(a, b, c) {
        return a + b + c;
    }

    console.log(add(...numbers)); // Output: 6

    const combined = [...numbers, ...moreNumbers];
    const combined1 = [...moreNumbers, ...numbers];
    console.log(combined);        // Output: [1, 2, 3, 4, 5, 6]
    console.log(add(...combined1));        // Output: [1, 2, 3, 4, 5, 6]

}

console.log('\nClosures')
{
    function makeCounter() {
        let count = 0;
        return function() {
            count++;
            return count;
        };
    }
    
    const counter = makeCounter();
    console.log(counter()); // Output: 1
    console.log(counter()); // Output: 2
    console.log(counter()); // Output: 3
    const counter1 = makeCounter();
    console.log(counter1()); // Output: 1
    
}

console.log('\nRecursion')
{
    function factorial(n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    
    console.log(factorial(5)); // Output: 120
    
}

console.log('\nCallback Functions')
{
    function greet(name, callback) {
        console.log(`Hello, ${name}!`);
        callback(name);
    }
    
    function sayGoodbye(name) {
        console.log(`Goodbye! ${name}`);
    }
    
    greet('Alice', sayGoodbye);
    // Output:
    // Hello, Alice!
    // Goodbye! Alice
    console.log('\n\tAsync Callbacks')
    function printMessage() {
        console.log('This message is printed after 2 seconds in async');
    }
    
    setTimeout(printMessage, 2000); // Executes printMessage after 2000 milliseconds (2 seconds)
}

console.log('\nCallback Functions with Asynchronous Operations')
{
    function fetchData(callback) {
        console.log('Fetching data...');
    
        // Simulate a delay of 2 seconds
        setTimeout(() => {
            console.log('Data fetched');
            callback();
        }, 2000);
    }
    
    function processData() {
        console.log('Processing data...');
    }
    
    fetchData(processData);
    // Output:
    // Fetching data...
    // (after 2 seconds)
    // Data fetched
    // Processing data...
    
}

console.log('\nCallback Hell')
{
    function firstOperation(callback) {
        setTimeout(() => {
            console.log('First operation completed');
            callback();
        }, 1000);
    }
    
    function secondOperation(callback) {
        setTimeout(() => {
            console.log('Second operation completed');
            callback();
        }, 1000);
    }
    
    function thirdOperation(callback) {
        setTimeout(() => {
            console.log('Third operation completed');
            callback();
        }, 1000);
    }
    
    firstOperation(() => {
        secondOperation(() => {
            thirdOperation(() => {
                console.log('All operations completed');
            });
        });
    });    
}

{
    setTimeout(() => {
        console.log('\nAvoiding Callback Hell with Promises')
        function firstOperation() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('First operation completed');
                    resolve();
                }, 1000);
            });
        }
        
        function secondOperation() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('Second operation completed');
                    resolve();
                }, 1000);
            });
        }
        
        function thirdOperation() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log('Third operation completed');
                    resolve();
                }, 1000);
            });
        }
        
        firstOperation()
            .then(secondOperation)
            .then(thirdOperation)
            .then(() => {
                console.log('All operations completed');
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    },5100)
    
    
}

console.log('\nArray Methods Demonstration')
{
    // 1. concat
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const array3 = array1.concat(array2);
    console.log('concat:', array3); // Output: [1, 2, 3, 4, 5, 6]

    // 2. entries
    const entries = array1.entries();
    for (let entry of entries) {
        console.log('entries:', entry); // Output: [0, 1], [1, 2], [2, 3]
    }

    // 3. every
    const isEveryAboveZero = array1.every(num => num > 0);
    console.log('every:', isEveryAboveZero); // Output: true

    // 4. fill
    const filledArray = new Array(5).fill(0);
    console.log('fill:', filledArray); // Output: [0, 0, 0, 0, 0]

    // 5. filter
    const filteredArray = array3.filter(num => num > 3);
    console.log('filter:', filteredArray); // Output: [4, 5, 6]

    // 6. find
    const foundElement = array3.find(num => num > 4);
    console.log('find:', foundElement); // Output: 5

    // 7. findIndex
    const foundIndex = array3.findIndex(num => num > 4);
    console.log('findIndex:', foundIndex); // Output: 4

    // 8. forEach
    array3.forEach(num => console.log('forEach:', num)); // Output: 1, 2, 3, 4, 5, 6

    // 9. includes
    const includesThree = array3.includes(3);
    console.log('includes:', includesThree); // Output: true

    // 10. indexOf
    const indexOfThree = array3.indexOf(3);
    console.log('indexOf:', indexOfThree); // Output: 2

    // 11. isArray
    console.log('isArray:', Array.isArray(array3)); // Output: true

    // 12. join
    const joinedString = array3.join('-');
    console.log('join:', joinedString); // Output: "1-2-3-4-5-6"

    // 13. keys
    const keys = array3.keys();
    for (let key of keys) {
        console.log('keys:', key); // Output: 0, 1, 2, 3, 4, 5
    }

    // 14. lastIndexOf
    const lastIndexOfThree = array3.lastIndexOf(3);
    console.log('lastIndexOf:', lastIndexOfThree); // Output: 2

    // 15. map
    const mappedArray = array3.map(num => num * 2);
    console.log('map:', mappedArray); // Output: [2, 4, 6, 8, 10, 12]

    // 16. pop
    const poppedElement = array3.pop();
    console.log('pop:', poppedElement); // Output: 6
    console.log('array after pop:', array3); // Output: [1, 2, 3, 4, 5]

    // 17. push
    array3.push(6);
    console.log('push:', array3); // Output: [1, 2, 3, 4, 5, 6]

    // 18. reduce
    const sum = array3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log('reduce:', sum); // Output: 21

    // 19. reverse
    const reversedArray = array3.reverse();
    console.log('reverse:', reversedArray); // Output: [6, 5, 4, 3, 2, 1]

    // 20. shift
    const shiftedElement = reversedArray.shift();
    console.log('shift:', shiftedElement); // Output: 6
    console.log('array after shift:', reversedArray); // Output: [5, 4, 3, 2, 1]

    // 21. slice
    const slicedArray = reversedArray.slice(1, 3);
    console.log('slice:', slicedArray); // Output: [4, 3]

    // 22. toLocaleString
    const localeString = array3.toLocaleString();
    console.log('toLocaleString:', localeString); // Output: "1,2,3,4,5"

    // 23. toString
    const stringRepresentation = array3.toString();
    console.log('toString:', stringRepresentation); // Output: "1,2,3,4,5"

    // 24. unshift
    array3.unshift(0);
    console.log('unshift:', array3); // Output: [0, 1, 2, 3, 4, 5]

    // 25. values
    const values = array3.values();
    for (let value of values) {
        console.log('values:', value); // Output: 0, 1, 2, 3, 4, 5
    }

    //26. flat
    const myArr = [[1,2],[3,4],[5,6]];
    const newArr = myArr.flat();
    console.log("flat:", newArr);

    //27. splice
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi");
    console.log("space:", fruits);
    fruits.splice(2, 1, "Lemon", "Kiwi");
    console.log("space:", fruits);

    //shallow copy
    const users = [{name: 'John'}, {name: 'Jane'}, {name: 'Jim'}];
    const someUsers = users.slice(1, 3);
    someUsers[0].name = 'Janet';

    console.log(users); // Output: [{name: "John"}, {name: "Janet"}, {name: "Jim"}]
    console.log(someUsers); // Output: [{name: "Janet"}, {name: "Jim"}]

}

console.log('\nObject Methods')
{
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };
    const returnedTarget = Object.assign(target, source);

    console.log(returnedTarget); // Output: { a: 1, b: 4, c: 5 }
    console.log(target); // Output: { a: 1, b: 4, c: 5 }

    const person = {
        isHuman: false,
        printIntroduction: function() {
            console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        }
    };
    
    const me = Object.create(person);
    me.name = 'Matthew';
    me.isHuman = true;
    
    me.printIntroduction(); // Output: "My name is Matthew. Am I human? true"
    const me2 = Object.create(person);
    me2.name = "Ajay";
    me2.printIntroduction(); // Output: "My name is Ajay. Am I human? false"
      
    var person1 = {
        name: 'first',
        lastname: 'last',
        address:{
            country: 'nepal',
            district: 'bhaktapur',
            vdc: 'suryabinayak'
        }
    }
    console.log(Object.entries(person1))
}