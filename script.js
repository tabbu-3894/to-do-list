const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let tasks = [];

// Function to render tasks 
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editTask(index);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Function to add a task
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = taskInput.value;
    tasks.push(task);
    taskInput.value = '';
    renderTasks();
});

// Function to edit a task
function editTask(index) {
    const newTask = prompt('Edit task:', tasks[index]);
    if (newTask) {
        tasks[index] = newTask;
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
