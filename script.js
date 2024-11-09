document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    // Check if input is not empty
    if (taskValue === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskValue;

    // Add a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        listItem.remove();
    };

    listItem.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
}
