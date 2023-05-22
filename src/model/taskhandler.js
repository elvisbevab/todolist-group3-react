import Task from "./task.js"

export default class TaskHandler {
  constructor() {
    this.tasks = {}
    this.visibleTasks = []
    this.projects = []
    this.priorities = ["none", "low", "medium", "high"]
  }
  get getAllTasks() {
    //return alle Tasks
    return Object.values(this.tasks);
  }
  get getVisibleTasks() {
    return this.visibleTasks
  }

  randomIdGenerator() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return "_" + Math.random().toString(36).substring(2, 9);
  }

  createTask(content) {
    const newTask = new Task(this.randomIdGenerator(), content)
    this.tasks[newTask.getId] = newTask;
    console.log(newTask);
    console.log(this.tasks);
  }

  removeTask(id) {
    console.log(this.tasks)
    delete this.tasks[id];
    console.log(this.tasks)
  }

  checkTask(id) {
    console.log(`check task with id ${id}`)
    this.tasks[id].toggleComplete()
    console.log(this.tasks[id])
  }


  getAllProjectNames() {
    return this.projects
  }

  getProjectByTitle(title) {
    return this.projects.filter((project) => project.title === title)
  }
}