export class Task {
  task;
  constructor(task) {
    this.task = task;
  }
  run() {
    console.log(this.task);
  }
}
