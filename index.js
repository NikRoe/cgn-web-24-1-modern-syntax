console.clear();

/* -------- Destructuring Assignment - Objects --------- */

const tree = {
  name: 'oak',
  age: 1200,
  scientificName: 'quercus',
};

// const name = tree.name;
// const age = tree.age;
// const scientificName = tree.scientificName;

// const {
//   name: colloquialName, -> rename the variable
//   age,
//   scientificName,
//   keepLeavesInWinter = false, -> assign a default value
// } = tree;

const { age, ...information } = tree; // saving all keys apart from age in the information object

// console.log(information);
// console.log(tree);

/* -------- Destructuring Assignment - Arrays --------- */

const animals = ['Lion', 'Tiger', 'Penguin', 'Bear', 'Whale'];

const [lion, , penguin, bear, ...whale] = animals; // skip the second entry and save all entries after the fourth in the whale array

// console.log(whale);

/* ---------------- Rest Syntax ----------------- */

function showZooAnimals(...allAnimals) {
  // use rest syntax to always create an array allAnimals with all arguments being passed in
  console.log(allAnimals);
  return `My zoo consists of the following animals: ${allAnimals.join(', ')}.`;
}

// console.log(showZooAnimals('Monkey', 'Crocodile', 'Pig'));

/* ---------------- Spread Syntax ----------------- */

// Add another value

const animalFood = ['Meat', 'Apple', 'Banana', 'Carrot'];

const newAnimalFood = 'Fish';

const allAnimalFood = [newAnimalFood, ...animalFood]; // spread animalFood array to a new array

// console.log(allAnimalFood);

// Spread for concatenating two arrays
