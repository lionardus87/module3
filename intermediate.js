//Question 1

function ucFirstLetters(message) {
	const splitMsg = message.split(" ");
	const upperCase = splitMsg.map(
		(word) => word.charAt(0).toUpperCase() + word.slice(1)
	);
	return upperCase.join(" ");
}
console.log(ucFirstLetters("los angeles")); //Los Angeles

//Question 2
function truncate(word, max) {
	if (word.length > max) {
		return word.slice(0, max) + "...";
	}
	return word;
}
console.log(truncate("This text will be truncated if it is too long", 25));
// This text will be truncat...

//Question 3
const animals = ["Tiger", "Giraffe"];
console.log(animals);
//a) Add 2 new values to the end
animals.push("Monkey", "Bird");
console.log(animals);
//b) Add 2 new values to the beginning
animals.unshift("Dog", "Cat");
console.log(animals);
//c) Sort the values alphabetically
animals.sort();
console.log(animals);
//d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
let newAnimal = animals.splice(2, 2, "Snake", "Rabbit");
console.log(newAnimal);
console.log(animals);
//e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.
function findMatchingAnimal(beginsWith) {
	let findMatchingAnimal = animals.find(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
	console.log(findMatchingAnimal);
}

findMatchingAnimal("c");

//Question 4
console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display