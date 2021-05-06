export default class Message {
  constructor(content, key) {
    this.content = content;
    this.key = key;
    this.date = new Date();
  }
}
