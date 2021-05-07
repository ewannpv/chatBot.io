export default class Message {
  constructor(content, key) {
    this.id = Math.random().toString(36).substring(7);
    this.content = content;
    this.key = key;
    this.date = new Date();
  }
}
