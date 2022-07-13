/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
// ES6 destructuring the above 3 lines of code into 1 -->
let [john, mary, joe] = ages;
console.log(john, mary, joe);


// Destructuring objects
jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
}
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia)

// Destructuring subsets
let languages = ["English", "French", "Spanish", "German", "Japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary)
let [, , maryNative, , marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "English",
    secondLanguage: "French",
    thirdLanguage: "Spanish",
    fourthLanguage: "German"
}
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
fruits = ["apples", "bananas", "pineapples", "oranges", "cherries"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(...others);

let favoriteFoods = {
    anna: "pizza",
    brian: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};
let {anna, brian, ...rest} = favoriteFoods;
console.log(anna);
console.log(brian);
console.log(rest);
