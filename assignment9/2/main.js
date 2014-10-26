function addTask() {
  var task_text = document.getElementById('task-input').value;

  if (task_text.trim() != '') {
    document.getElementById('task-input').value = '';
    document.getElementById('tasks').innerHTML += taskToHTML(task_text);
    setTaskCompleted();
  }
}

function taskToHTML(task) {
  var checkbox = '<input type="checkbox" onclick="toggleCompleted(this)"> ';
  var text = '<span class="task-text">' + task + '</span>';
  return  '<div class="task">' + checkbox + text + '</div>';
}

function deleteCompletedTasks() {
  var tasks = Array.prototype.slice.call( document.getElementsByClassName('completed'));
  for (var i in tasks){
    document.getElementById('tasks').removeChild(tasks[i]);
  }
}

function toggleCompleted(checkbox) {
  var task = checkbox.parentNode;
  task.className = (checkbox.checked ? 'task completed' : 'task');
}

// Fixes bug where checkboxes reset when the 'clear' button is pushed
function setTaskCompleted() {
  var tasks = document.getElementsByClassName('task completed');

  for (var i = 0; i < tasks.length; i++) {
    tasks[i].getElementsByTagName('input')[0].checked = true;
  }
}