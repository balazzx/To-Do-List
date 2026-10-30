let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

addButton.addEventListener("click", function() {
    let task = taskInput.value.trim();

    if(task === ""){
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task;

    span.addEventListener("click", function() {
        span.classList.toggle("completed");
});

let deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.classList.add("delete-btn");

deleteButton.addEventListener("click", function() {
    li.remove();
});

li.appendChild(span);
li.appendChild(deleteButton);

taskList.appendChild(li);

taskInput.value = "";

});