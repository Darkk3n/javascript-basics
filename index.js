//function declaration
function walk() {
    console.log('walk');
}

//function expression
let run = () => console.log('run');

//Rest operator
//...arguments
//Same as spread of arrays but this is for functions
//Very similar to params in C#
function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

//console.log(sum(0.1, 20, 30));

//Default values for parameters
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

//console.log(interest(10000));

const person = {
    firstName: 'Gerardo',
    lastName: 'Aguilar',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        try {
            const parts = value.split(' ');
            if (parts.length !== 2) {
                throw new Error('Enter a first and last name');
            }
            this.firstName = parts[0];
            this.lastName = parts[1];
        } catch (error) {
            throw new Error(error);
        }
    }
};

person.fullName = 'Test TEst';
//console.log(person);

//var vs let
//var's scope is not limited to the scope where it's defined
//it's limited for the complete function
//ES6 (ES2015): let,const => block-scoped. var => function-scoped

function start() {
    for (var i = 0; i < 5; i++) {
        if (true) { let color = 'red'; }
        console.log(i);
    }

    console.log(color);
}
//start();

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => console.log(this.title, tag));
    }
}

function playVideo() {
    console.log(this);
}

//video.showTags();


//Exercises

//Sum of Arguments

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((a, b) => a + b);
}

const res = sum([1, 2, 4]);
//console.info(res);

//Area of a circle

const circle = {
    get radius() {
        return this.radius;
    },
    set radius(value) {
        if (typeof value !== 'number')
            throw new Error('invalid value');
        this.radius = value;
    },
    get area() {
        return this.radius * this.radius * Math.PI;
    }
}

circle.radius = 10;
console.log(circle.area);