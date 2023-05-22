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

  createTask(content, prio) {
    const newTask = new Task(this.randomIdGenerator(), content, prio)
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


  filterStatus(isComplete) {
    isComplete = (isComplete === 'true')
    // console.log("callFilter")
    // console.log(isComplete)
    function check(task) {
      // console.log('bla')
      // console.log(typeof task.getIsComplete)
      // console.log(typeof isComplete)
      // console.log('blub')
      if (task.getIsComplete == isComplete) {
        console.log('true hier')
        return true
      } else {
        console.log('false hier')
        return false
      }

    }
    const toFilter = Object.values(this.tasks);
    // console.log(toFilter)
    // console.log(toFilter.filter(check))
    this.visibleTasks = toFilter.filter(check)

  }
  filterPrio(prio) {
    const toFilter = Object.values(this.tasks);
    this.visibleTasks = toFilter.filter((task) => task.getPriority === prio)
  }


}