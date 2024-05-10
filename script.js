function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");

        var li = document.createElement("li");
        li.className = "task";
        li.innerHTML = taskText + '<button class="delete-btn">Delete</button>';

        taskList.appendChild(li);

        taskInput.value = "";

        // Add event listener to the delete button
        li.querySelector(".delete-btn").addEventListener("click", function() {
            li.remove();
        });
    }
}

// Event listener for adding a new task
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});