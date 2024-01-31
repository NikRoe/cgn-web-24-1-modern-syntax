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
//   name: colloquialName,
//   age,
//   scientificName,
//   keepLeavesInWinter = false,
// } = tree;

const { age, ...information } = tree;

// console.log(information);
// console.log(tree);

/* -------- Destructuring Assignment - Arrays --------- */

const animals = ['Lion', 'Tiger', 'Penguin', 'Bear', 'Whale'];

const [lion, , penguin, bear, ...whale] = animals;

// console.log(whale);

/* ---------------- Rest Syntax ----------------- */

function showZooAnimals(...allAnimals) {
  console.log(allAnimals);
  return `My zoo consists of the following animals: ${allAnimals.join(', ')}.`;
}

// console.log(showZooAnimals('Monkey', 'Crocodile', 'Pig'));

/* ---------------- Spread Syntax ----------------- */

// Add another value

const animalFood = ['Meat', 'Apple', 'Banana', 'Carrot'];

const newAnimalFood = 'Fish';

const allAnimalFood = [newAnimalFood, ...animalFood];

// console.log(allAnimalFood);

// Spread for concatenating two arrays
