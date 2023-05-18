export default class Task {
  constructor(id, content) {
    this.id = id;
    this.content = content;
    this.isComplete = false;
    this.priority = "none"
  }

  get getId() {
    return this.id;
  }

  get getContent() {
    return this.content;
  }

  get getIsComplete() {
    return this.isComplete;
  }
  get getPriority() {
    return this.priority
  }

  set setContent(content) {
    this.content = content;
  }
  set setPriority(priority) {
    this.priority = priority
  }
  toggleComplete() {
    this.isComplete = !this.isComplete;
  }

}