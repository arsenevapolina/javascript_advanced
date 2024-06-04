export class User {
  task;
  constructor(task) {
    this.task = task;
  }
  do() {
    this.task.run();
  }
}
export class Task {
  task;
  constructor(task) {
    this.task = task;
  }
  run() {
    console.log(this.task);
  }
}

const createTask = new Task("Task: understand ES modules.");
const user = new User(createTask);

user.do();
