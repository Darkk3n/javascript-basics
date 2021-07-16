//Add elements to Array
const numbers = [3, 4];
//End
numbers.push(5, 6);

//Beginning
numbers.unshift(1, 2);

//Middle
numbers.splice(2, 0, 'a', 'b')
//console.log(numbers);


//Find elements
//Primitives

const numbers1 = [1, 2, 3, 1, 4];

//Same as List in C#
// console.log(numbers1.indexOf(1));
// console.log(numbers1.lastIndexOf(1));

//Same as Any in LINQ
// console.log(numbers1.includes(1));



//Find elements
//Objects/Reference Types

const courses = [
    { id: 1, name: 'Foo' },
    { id: 2, name: 'Foo2' }
];

//find method. Similar to Where
//console.log(courses.find(r => r.id === 2));

//Remove elements
let nums = [3, 2, -1, 1];

//End
//const last = nums.pop();
//console.log(last);
//Beginning
//const first = nums.shift();

//console.log(first);

//Middle
//nums.splice(2, 2);
// console.log(nums);

//Emptying an Array

//nums = []; // But other references will take the old value

//nums.length = 0; //Best choice 

//nums.splice(0, numbers.length);


//Combine and Slice Arrays

const first = [1, 2, 3];
const second = [4, 5, 6];

//Combine
//const combined = first.concat(second);
//console.log(combined);

//Slice
//console.log(combined.slice(2));

//Spread operator "..."
const combined = [...first, ...second];

//for (let number of nums)
//console.log(number);

//Iterate with forEach
//combined.forEach(r => console.log(r));


//Joining Arrays
const joined = nums.join(',');

//console.log(joined);

//Split a string into an array
const message = 'This is a message';
const parts = message.split(' ');
//console.log(parts);

const combined2 = parts.join('-');
//console.log(combined2);

//Sort
nums.sort();
//console.log(nums);

nums.reverse();
//console.log(nums);

const courses1 = [
    { id: 1, name: 'Node JS' },
    { id: 2, name: 'JavaScript' }
];

courses1.sort(function (a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameb) return 1;
    return 0;
});

//console.log(courses1);

//Test elements in array
//array.every => ALL values must comply with the condition
//array.some => at least one value complies with the condition

const atLeastOnePositive = nums.some(r => r >= 0);
const allPositive = nums.every(r => r >= 0);
//console.log(allPositive);
//console.log(atLeastOnePositive);

//Filter array
//Extremely similar to Where
const filtered = nums
    .filter(r => r >= 0)
    .sort()
    .map(n => ({ value: n }));

//console.log(greaterThanZero);

const items = filtered;
//console.log(items);


//Reduce Array

let sum = 0;
const reduced = nums.reduce((acc, current) => acc + current);

//console.log(reduced);

//Exercises

//Add elements to array

const ex1 = arrayFromRange(1, 4);

//console.log(ex1);

function arrayFromRange(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}

//Includes

const ex2 = [1, 2, 3, 4];
//console.log(includes(ex2, 7));

function includes(arr, searchCriteria) {
    return arr.some(r => r === searchCriteria);
}

const ex3 = [1, 2, 3, 4];

const output = except(ex3, [1]);

//console.log(output);

function except(arr, excluded) {
    const res = [];
    arr.forEach(element => {
        if (!excluded.includes(element)) {
            res.push(element);
        }
    });
    return res;
}

//Move element
const ex4 = [1, 2, 3, 4];
const res3 = move(ex4, 0, 0);

//console.log(res3);

function move(arr, index, offset) {
    let output = [...arr];
    const position = index + offset;
    if (arr.length < offset || position < 0) {
        console.error('Invalid offset');
        return;
    }

    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;

}

//Count recurrences

const ex5 = [1, 2, 1, 4];

const count = countOcurrences(ex5, 1);

//console.log(count);

function countOcurrences(arr, searchCriteria) {
    // let res = 0;
    // arr.forEach(r => {
    //     if (r == searchCriteria)
    //         res++;
    // });
    // return res;

    return arr.reduce((acc, current) => {
        const ocurrence = current === searchCriteria ? 1 : 0;
        return acc + ocurrence;
    }, 0);
}

//Max number
//Any time you have an array of values and you want to get a single value as a result use
//array.reduce

const ex6 = [1, 2, 3, 4];

const max = getMax([1, 5, 3, 6]);

//console.log(max);

function getMax(arr) {
    if (arr.length === 0)
        return undefined;

    // let max = arr[0];
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] > max)
    //         max = arr[i];
    // }
    // return max;

    return arr.reduce((a, b) => a > b ? a : b)
}

//Movies
//All movies of 2018 & rating >4
//Sort by rating in descending
//Display Title only
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 }
];

const ex7 = movies
    .filter(r => r.year === 2018 && r.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(ex7);