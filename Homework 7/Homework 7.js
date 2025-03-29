document.addEventListener("DOMContentLoaded", function () {
    let taskInput = document.getElementById("taskInput");
    let addTaskBtn = document.getElementById("addTaskBtn");
    let taskList = document.getElementById("taskList");

    function addTask() {
        let taskText = taskInput.value;
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        let li = document.createElement("li");
        li.textContent = taskText;

        let completeBtn = document.createElement("button");
        completeBtn.textContent = "complete";
        completeBtn.onclick = function () {
            li.classList.toggle("completed");
        };

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "remove";
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(completeBtn);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = "";
    }

    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
