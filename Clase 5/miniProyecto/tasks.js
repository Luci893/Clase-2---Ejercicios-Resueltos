let tasks = [];

export const loadTasks = () => {
    return tasks;
};

export const initTasks = (inicial) => { tasks = inicial; };

export const addTask = (text) => {
    const task = {id: Date.now(), text, done: false};
    tasks.push(task);
    return task;
};

export const removeTask = (id) => {
    tasks = tasks.filter(t => t.id !== id);
};

export const toggleTask = (id) => {
    const t = tasks.find(x => x.id === id);
    if (t) t.done = !t.done;
};

