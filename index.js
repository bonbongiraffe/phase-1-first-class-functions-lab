// Code your solution in this file!
// - `returnFirstTwoDrivers()` — Declare the variable `returnFirstTwoDrivers` with
//   `const` and assign an anonymous function to it. The assigned function should
//   take one argument, an array containing the names of Scuber's drivers, and
//   return a new array containing the **first** two drivers in the array:

const returnFirstTwoDrivers = function(drivers){
    return [drivers[0],drivers[1]];
}

// - `returnLastTwoDrivers()` — Declare a variable with `const` that is assigned an
//   anonymous function. The assigned function should take one argument, an array
//   containing the names of Scuber's drivers, and return a new array containing
//   the **last** two drivers in the array:

const returnLastTwoDrivers = function(drivers){
    return [drivers[drivers.length-2],drivers[drivers.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function(fare){
        return multiplier*fare;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers,selector){
    return selector(drivers);
}
