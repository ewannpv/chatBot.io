export default class Message {
  constructor(content, person) {
    this.content = content;
    this.person = person;
    this.date = new Date().toLocaleTimeString();
  }
}
