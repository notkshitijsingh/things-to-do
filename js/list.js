let listnum = 1;

function add() {
    listnum++;
    
    const tasks = document.getElementsByClassName('tasks')[0];

    const newTaskItem = document.createElement('div');
    newTaskItem.className = 'task-item'; 

    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';

    const taskInput = document.getElementsByClassName('new-task')[0];
    const newTaskInput = taskInput.cloneNode(true);
    newTaskInput.value = ""; 
    newTaskInput.id = `task-${listnum}`;

    newTaskItem.appendChild(newCheckbox);
    newTaskItem.appendChild(newTaskInput);

    if (tasks) {
        tasks.appendChild(newTaskItem);
    }
}

document.getElementById('add-img').addEventListener('click', add);
