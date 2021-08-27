//get element by id and declare variable
const inputTask = document.getElementById('input-task');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const dateElement = document.getElementById('date');
let task = 0;
//Show today date
const date = new Date()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
dateElement.innerHTML = date.getDate()+" "+months[date.getMonth()]+", "+date.getFullYear();

// if empty list
// if (task == 0) {
//     const noTask = document.createElement('h4');
//     noTask.innerHTML = "No Task Found!";
//     noTask.id = 'noTask'
//     taskList.appendChild(noTask);
// }


//add task into list
addTaskBtn.addEventListener('click', function () {
    if (inputTask.value == '' || inputTask.value == null) {
        alert('Write your task please!')
    } else {
        task++;
        const newTask = document.createElement('li');
        newTask.className = 'item';
        newTask.innerText = inputTask.value;

        const addIcon = document.createElement('i');
        addIcon.className = 'fas fa-trash'
        newTask.appendChild(addIcon);
        taskList.appendChild(newTask);

        if (task == 1) {
            const noTask = document.getElementById('noTask');
            noTask.style.display = 'none';
        }
        
        inputTask.value = '';

        //click trash icon then remove task
        const icons = document.getElementsByClassName('fa-trash');
        for (const icon of icons) {
            icon.addEventListener('click', function (event) {
                let element = event.target.parentElement;
                element.style.display = 'none';
            });
        }
    }
});

/* Add a "checked" mark when clicked on */
taskList.addEventListener('click', function (event) {
    if (event.target.nodeName === 'LI') {
        event.target.classList.toggle('checked');
    }
    
})

//click trash icon then remove task
const icons = document.getElementsByClassName('fa-trash');
for (const icon of icons) {
    icon.addEventListener('click', function (event) {
        let element = event.target.parentElement;
        element.style.display = 'none';
    });
}