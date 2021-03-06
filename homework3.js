// task1
// Given an array. Write a recursive function that removes the
// first element and returns the given array. (without using
// arr.unshift(),assign second element to first, third element to
// second...)

function removeFirstEl(arr, i = 0){
    if(!arr.length) {
        return arr;
    }
    if(i === arr.length - 1) {
        arr.length = arr.length - 1;
        return arr;
    }
    arr[i] = arr[i + 1];   
    return removeFirstEl(arr, i + 1);
}

// task2
// Given an array of nested arrays. Write a recursive function
// that flattens it. (Hint create function that concats arrays).

function flatten(arr) {
    let result = [];
    if(!arr.length){
        return result;
    }
    if(Array.isArray(arr[0])){
        result = result.concat(flatten(arr[0]));
        arr.shift();
    }else{
        result.push(arr[0]);
        arr.shift();
    } 
    result = result.concat(flatten(arr));
    return result;
}

// task3
// Given a number. Write a function that calculates its sum of
// the digits and if that sum has more than 1 digit find the sum of
// digits of that number. Repeat that process if needed and return
// the result.

function sumOfDigits(num){
    let lastDigit = num % 10;
    let sum = 0;
    let number = (num - lastDigit) / 10;
    if(number < 10){
        return sum + number + lastDigit;
    }
    sum = sum + lastDigit + sumOfDigits(number); 
    while( sum >= 10){
        sum = sumOfDigits(sum);
    }
    return sum;
} 
//task4
// Given an object. Invert it (keys become values and values
// become keys). If there is more than key for that given value
// create an array.

function invert(obj) {
    let result = {};
    let entries = Object.entries(obj)
    for (let key in obj) {
        let arr = [];
        entries.filter(function (el) {
            if (obj[key] == el[1]) {
                arr.push(el[0]);
            }
        });
            result[obj[key]] = arr;
    }
    return result;
}
//task5
// Create a function that builds a tree like object given an array with object which contains
// parent and id properties.

let treeNodes = [
	{parent: null, id: 0},
	{parent: 0, id: 1},
	{parent: 0, id: 2},
	{parent: 1, id: 3},
	{parent: 1, id: 4},
	{parent: 2, id: 5},
	{parent: 4, id: 6},
]

function tree (array, n=null) {
    let obj = {};
    for (let i = 0; i < array.length; i++){
        if (n === array[i].parent){
            let nested = tree(array, array[i].id)
            obj[array[i].id] = nested;
        }
    }
    return obj;
}
console.log(tree(treeNodes))
