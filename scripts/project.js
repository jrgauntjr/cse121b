document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Array to store tasks
let tasks = [];

// Load tasks from external source on page load
window.addEventListener('DOMContentLoaded', fetchTasks);

function addTask() {
  const taskInput = document.getElementById('taskInput').value;
  if (taskInput.trim() !== '') {
    tasks.push({ name: taskInput, done: false }); // Store task and its status
    displayTasks();
    saveTasks();
    document.getElementById('taskInput').value = ''; // Clear input field
  }
}

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.addEventListener('change', () => {
      tasks[index].done = checkbox.checked;
      saveTasks();
      displayTasks(); // Update the display after marking task as done
    });
    const label = document.createElement('label');
    label.textContent = task.name;
    li.appendChild(checkbox);
    li.appendChild(label);
    if (task.done) {
      li.classList.add('completed');
    }
    taskList.appendChild(li);
  });
}

function saveTasksToFile() {
  const tasksBlob = new Blob([JSON.stringify(tasks)], { type: 'application/json' });
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(tasksBlob);
  downloadLink.download = 'tasks.json';
  downloadLink.click();
}

document.getElementById('saveToFileBtn').addEventListener('click', saveTasksToFile);

function fetchTasks() {
  // Simulating fetching tasks from an external source (in this case, local storage)
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (storedTasks) {
    tasks = storedTasks;
    displayTasks();
  }
}