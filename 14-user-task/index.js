import { Task } from "./task.js";
import { User } from "./user.js";

const createTask = new Task("Task: understand ES modules.");
const user = new User(createTask);

user.do();
