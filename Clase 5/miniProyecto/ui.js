import {addTask, removeTask, toggleTask, loadTasks} from './tasks.js';
import {saveTasks} from './storage.js';

const listEl = document.getElementById('task-list');

export const render = () => {
    listEl.innerHTML = "";
    loadTasks().forEach(t => {
        const li = document.createElement('li');

        const textSpan = document.createElement('span');
        textSpan.textContent = t.text;

        if (t.done) {
            textSpan.classList.add('done');
        }

        const btnToggle = document.createElement('button');
        btnToggle.textContent = 'Toggle';
        btnToggle.classList.add('btn-toggle');
        btnToggle.onclick = () => {
            toggleTask(t.id);
            saveTasks(loadTasks());
            render();
        };

        const btnDel = document.createElement('button');
        btnDel.textContent = 'Delete';
        btnDel.classList.add('btn-delete');
        btnDel.onclick = () => {
            removeTask(t.id);
            saveTasks(loadTasks());
            render();
        };

        li.appendChild(textSpan);
        li.appendChild(btnToggle);
        li.appendChild(btnDel);
        listEl.appendChild(li);
    })
};

export const handleAdd = (inputEl) => {
    const text = inputEl.value.trim();
    if (!text) return;
    addTask(text);
    saveTasks(loadTasks());
    inputEl.value = '';
    render();
};