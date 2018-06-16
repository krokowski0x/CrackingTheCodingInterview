export default class AnimalShelter {
  constructor() {
    this.dogs = [];
    this.cats = [];
    this.id = 0;
  }

  enqueueCat(name) {
    this.cats.push({
      name,
      id: ++this.id
    });
    return this;
  }

  enqueueDog(name) {
    this.dogs.push({
      name,
      id: ++this.id
    });
    return this;
  }

  dequeueAny() {
    let dogId = this.dogs.length > 0 ? this.dogs[0].id : Infinity,
        catId = this.cats.length > 0 ? this.cats[0].id : Infinity;

    if (dogId !== Infinity || catId !== Infinity) {
      if (dogId < catId) {
        return this.dogs.shift().name;
      }
      else {
        return this.cats.shift().name;
      }
    }
  }

  dequeueCat() {
    return this.cats.shift().name;
  }

  dequeueDog() {
    return this.dogs.shift().name;
  }
}
