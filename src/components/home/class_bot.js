import Person from './class_person';

export default class Bot extends Person {
  constructor(name, imageURL) {
    super(name, imageURL, true);
    this.name = name;
    this.imageURL = imageURL;
    this.isBot = true;
  }

  hello() {
    return `Bonjour, je m'appelle ${this.name}, ravis de rencontrer !`;
  }
}
