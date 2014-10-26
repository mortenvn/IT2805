var add_button = document.getElementById("add-button");
var clear_button = document.getElementById("clear-button");

//Add event listeners
add_button.addEventListener("click", addTask);
clear_button.addEventListener("click", deleteCompletedTasks);

function addTask() {
  var task_text = document.getElementById('task-input').value;
  if (task_text.trim() != '') {
    document.getElementById('task-input').value = '';
    taskToHTML(task_text);
  }
}

// Creates HTML code for the new task and adds it to the DOM
function taskToHTML(task_text) {
  var task = document.createElement("div");
  task.className = 'task';

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener("click", toggleCompleted, false);

  var text = document.createElement('span');
  text.innerText = task_text;
  text.className = 'task-text';

  task.appendChild(checkbox);
  task.appendChild(text);

  var tasks = document.getElementById("tasks");
  tasks.appendChild(task);
}

// Delete all completed tasks
function deleteCompletedTasks() {
  var tasks = Array.prototype.slice.call( document.getElementsByClassName('completed'));
  for (var i in tasks){
    document.getElementById('tasks').removeChild(tasks[i]);
  }
}

// Will toggle the class 'completed' when pressing a tasks checkbox
function toggleCompleted(e) {
  var checkbox = e.target;
  var task = checkbox.parentNode;
  task.className = (checkbox.checked ? 'task completed' : 'task');
}