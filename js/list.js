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

    newCheckbox.addEventListener('click', function() {
        if (newCheckbox.checked) {
            newTaskInput.classList.add('strike-through');
        } else {
            newTaskInput.classList.remove('strike-through');
        }
    });
}

function sub() {
    if (listnum > 1) {
        const lastTask = document.getElementById(`task-${listnum}`).parentElement;
            lastTask.remove();
            listnum--;
        }
    }
document.getElementById('add-img').addEventListener('click', add);

document.addEventListener('keydown', event => {
    const key = event.key;

    if (key === 'Enter') { 
        add();
    } 
    
    else if (key === 'Backspace') {
        sub();
    }
});