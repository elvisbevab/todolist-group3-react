export default class Project {
  constructor(title, color) {
    this.title = title;
    this.color = color;
  }

  get getTitle() {
    return this.title
  }

  get getColor() {
    return this.color
  }

  set setColor(color) {
    this.color = color;
  }
}

