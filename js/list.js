let listnum = 1;

function add() {
    listnum++;
    const tasks = document.getElementById('tasks');
    const newTasks = document.createElement('div');
    newTasks.className = 'task-item';

    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';

    const t1 = document.getElementById("new-task");
    const newTask = t1.cloneNode(true);
    newTask.id = `task-${listnum}`; 
    newTask.value = ""; 
    const newImg = document.createElement('img');
    newImg.src = '../assets/favicon.png';
    newImg.alt = 'Task Image'; 
    newImg.style.cursor = 'pointer'; 

    newTasks.appendChild(newCheckbox);
    newTasks.appendChild(newTask);
    newTasks.appendChild(newImg);

    if (tasks) {
        tasks.appendChild(newTasks);
    }
}

document.getElementById('add-img').addEventListener('click', add);
