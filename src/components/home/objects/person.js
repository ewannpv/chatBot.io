export default class Person {
  constructor(name, imageURL, description) {
    this.name = name;
    this.imageURL = imageURL;
    this.description = description;
    this.key = 'USER';
    this.isBot = false;
    this.lastMessageDate = null;
  }

  updateLastMessage() {
    this.lastMessageDate = new Date();
  }
}
