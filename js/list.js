let listnum = 1;
function add() {
    listnum++;
    
    const tasks = document.getElementsByClassName('tasks')[0];

    const newGap = document.createElement('div');
    newGap.id = 'gap';
    newGap.style.display = 'block';

    const newTaskItem = document.createElement('div');
    newTaskItem.className = 'task-item';

    const originalTask = document.getElementById('task-1');
    const originalCheckbox = document.getElementById('check-1');

    const newCheckbox = originalCheckbox.cloneNode(true);
    newCheckbox.id = `check-${listnum}`;
    newCheckbox.checked = false;

    const newTaskInput = originalTask.cloneNode(true);
    newTaskInput.id = `task-${listnum}`;
    newTaskInput.value = "";
    newTaskInput.classList.remove('strike-through');

    newCheckbox.addEventListener('click', function() {
        if (newCheckbox.checked) {
            newTaskInput.classList.add('strike-through');
        } else {
            newTaskInput.classList.remove('strike-through');
        }
    });

    newTaskItem.appendChild(newCheckbox);
    newTaskItem.appendChild(newTaskInput);

    if (tasks) {
        tasks.appendChild(newGap);
        tasks.appendChild(newTaskItem);
    }
    newTaskInput.focus();
}

function sub() {
    const gaps = document.querySelectorAll('#gap');
    if (gaps.length > 0) {
        gaps[gaps.length - 1].remove();
    }

    if (listnum > 1) {
        const lastTask = document.getElementById(`task-${listnum}`);
        if (lastTask) {
            lastTask.parentElement.remove();
            listnum--;
        }
    } else if (listnum === 1) {
        const firstTaskInput = document.getElementById('task-1');
        const firstCheckbox = document.getElementById('check-1');
        
        if (firstTaskInput) {
            firstTaskInput.value = ''; 
            firstTaskInput.classList.remove('strike-through');
        }
        if (firstCheckbox) {
            firstCheckbox.checked = false;
        }
    }
}


function save(event) {
    event.preventDefault();
    const data = new listData(event.target);
    const value = Object.fromEntries(data.entries());
    value.topics = data.getAll("list");
    console.log({ value });
}

document.getElementById('save-btn').addEventListener('click', save);

document.getElementById('add-img').addEventListener('click', add);

document.addEventListener('keydown', event => {
    const key = event.key;

    if (key === 'Enter') { 
        add();
    } else if (key === '`') {
        sub();
    }
});

document.getElementById('check-1').addEventListener('click', function() {
    const firstTaskInput = document.getElementById('task-1');
    if (this.checked) {
        firstTaskInput.classList.add('strike-through');
    } else {
        firstTaskInput.classList.remove('strike-through');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task-1').focus();
});