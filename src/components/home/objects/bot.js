import Person from './person';

export default class Bot extends Person {
  constructor(name, imageURL, description, key) {
    super(name, imageURL, description);
    this.name = name;
    this.imageURL = imageURL;
    this.key = key;
    this.isBot = true;
  }

  hello() {
    return `Hello, my name is ${this.name}, ${this.description}`;
  }
}
