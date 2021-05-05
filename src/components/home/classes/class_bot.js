import Person from './class_person';

export default class Bot extends Person {
  constructor(name, imageURL, description) {
    super(name, imageURL, description);
    this.name = name;
    this.imageURL = imageURL;
    this.isBot = true;
  }

  hello() {
    return `Bonjour, je m'appelle ${this.name}, ravis de rencontrer !`;
  }
}
