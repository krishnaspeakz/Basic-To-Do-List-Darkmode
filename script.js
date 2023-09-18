// Select elements from the DOM
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("Add-task");
const taskList = document.getElementById("task-list");

// Add a new task
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-task">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
        taskInput.focus();
    }
});

// Delete a task
taskList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-task")) {
        e.target.parentElement.remove();
    }
});

// script.js
// script.js
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check if dark mode is already enabled
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}

// Toggle dark mode on user interaction
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
    } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
    }
});



