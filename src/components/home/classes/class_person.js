export default class Person {
  constructor(name, imageURL, description) {
    this.name = name;
    this.imageURL = imageURL;
    this.description = description;
    this.isBot = false;
    this.lastMessageDate = '16h20';
  }
}
