
function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName
  }
}
const favoriteNumber = 42;


const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return `${this.firstName} says bye!`;
  }
}
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    }
  };
}

const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
console.log(d.bark());  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
console.log(s.bleet()); //"BAAAAaaaa"