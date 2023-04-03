// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...nums) => nums.filter(num => num % 2 ===0);

// findMin

const findMin = (...values) => Math.min(values);

// mergeObjects

const merge = (objA, objB) => ({...objA, ...objB});

// doubleAndReturnArgs

const doubleAndReturnArgs = (num, ...nums) => [...num, ...nums.map(num => num * 2)];

// Slice and Dice



/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    return { ...obj, [key]: val };
};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const { [key]: deletedKey, ...rest } = obj;
    return rest;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;

    // return { ...obj, [key]: val }; object enhancement
};