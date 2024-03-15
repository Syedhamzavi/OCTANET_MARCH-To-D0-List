function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") {
      alert("Please enter a task.");
      return;
    }
  
    var timestamp = new Date().toLocaleString();
    var taskNumber = taskList.getElementsByTagName("li").length + 1;
  
    var li = document.createElement("li");
    li.innerHTML = "<strong>Task " + taskNumber + ":</strong> " + taskInput.value + "<br><em>Added at " + timestamp + "</em>";
    taskList.appendChild(li);
  
    taskInput.value = "";
  }
  