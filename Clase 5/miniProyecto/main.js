import {getTasks, saveTasks} from "./storage.js";
import {initTasks} from "./tasks.js";
import {render, handleAdd} from "./ui.js";

const initial = getTasks();
initTasks(initial);
render();

document.getElementById('add-btn').addEventListener('click', () => {
    handleAdd(document.getElementById('task-input'));
});