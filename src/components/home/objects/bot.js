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
    return `Bonjour, je m'appelle ${this.name}, ravis de rencontrer !`;
  }
}
