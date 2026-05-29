console.log("working for ToDoList");

//  assign html elements to js variables

const userInput = document.getElementById("userInput");
const addbtn = document.getElementById("addbtn");
const userTaskdisplay = document.getElementById("userTaskdisplay-Container");
const searchInput = document.getElementById("searchInput");

// declaring some Variables

let editTarget = null;
let editID = null;
let myTasks = JSON.parse(localStorage.getItem("tasks")) || [];

addbtn.addEventListener("click", (e) => {
  const task = userInput.value.trim(); //taking user input

  //    validation
  if (task == "") {
    alert("Please Enter Task");
    return;
  }

  //for update and Add new Task
  if (editTarget != null && addbtn.innerHTML === "Update Task") {
    let updatedPriority = "normal";
    if (document.getElementById("high").checked) {
      updatedPriority = "high";
    } else if (document.getElementById("low").checked) {
      updatedPriority = "low";
    }

    // 1. Array mein us id wale task ko dhoondho aur uska data badlo
    myTasks.forEach((ele) => {
      if (ele.id == editID) {
        ele.text = userInput.value;
        ele.priority = updatedPriority;
      }
    });

    // 2. Ab is updated array ko wapas localStorage mein set kar do!
    localStorage.setItem("tasks", JSON.stringify(myTasks));

    // 3. Last mein id ko wapas null kar do jaise editTarget ko kiya hai
    editID = null;

    editTarget.innerHTML = userInput.value;

    priority(editTarget.parentElement, updatedPriority);
    editTarget = null;
    addbtn.innerHTML = "Add Task";
  } else {
    //localStorage

    let selectedPriority = "normal";
    if (document.getElementById("high").checked) {
      selectedPriority = "high";
    } else if (document.getElementById("low").checked) {
      selectedPriority = "low";
    }
    const tasks = {
      id: Date.now(),
      text: task,
      priority: selectedPriority,
    };

    addTask(task, selectedPriority);
    myTasks.push(tasks);
    localStorage.setItem("tasks", JSON.stringify(myTasks));
  }

  //remove the text after update or add the task
  userInput.value = "";
});

function addTask(userText, userPriority, userID) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("oneTask");
  taskDiv.dataset.id = userID;

  const p = document.createElement("p");
  const editbtn = document.createElement("button");
  const delbtn = document.createElement("button");
  const checkBox = document.createElement("input");

  checkBox.type = "checkbox";
  p.innerHTML = userText;
  editbtn.innerHTML = "Edit";
  delbtn.innerHTML = "Delete";

  taskDiv.appendChild(checkBox);
  taskDiv.appendChild(p);
  taskDiv.appendChild(editbtn);
  taskDiv.appendChild(delbtn);

  userTaskdisplay.append(taskDiv);

  //for delete

  delbtn.addEventListener("click", (e) => {
    taskDiv.remove(); // Screen se hata

    // Array se us id wale task ko nikal do
    myTasks = myTasks.filter((ele) => ele.id !== userID);

    // LocalStorage ko naya array do
    localStorage.setItem("tasks", JSON.stringify(myTasks));
  });

  //    for edit
  editbtn.addEventListener("click", (e) => {
    editID = taskDiv.dataset.id;
    const editText = p.innerHTML;
    userInput.value = editText;
    editTarget = p;
    addbtn.innerHTML = "Update Task";
  });

  //checkbox

  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      p.style.textDecoration = "line-through";
      editbtn.disabled = true;
      editbtn.style.opacity = "0.5";
      editbtn.style.cursor = "not-allowed";
    } else {
      p.style.textDecoration = "none";
      editbtn.disabled = false;
      editbtn.style.opacity = "1";
      editbtn.style.cursor = "pointer";
    }
  });

  //passing background color
  priority(taskDiv, userPriority);
}

function priority(priDiv, currentPriority) {
  priDiv.classList.remove("high-priority", "normal-priority", "low-priority");
  const high = document.getElementById("high");
  const normal = document.getElementById("normal");
  const low = document.getElementById("low");

  if (currentPriority === "high") {
    priDiv.classList.add("high-priority");
  } else if (currentPriority === "normal") {
    priDiv.classList.add("normal-priority");
  } else if (currentPriority === "low") {
    priDiv.classList.add("low-priority");
  }
}

myTasks.forEach((ele) => {
  addTask(ele.text, ele.priority, ele.id);
});

searchInput.addEventListener('input', () => {
    
    const query = searchInput.value.toLowerCase();
    
    const allTasks = document.querySelectorAll(".oneTask");
    
    allTasks.forEach((taskDiv) => {
        const taskText = taskDiv.querySelector("p").innerHTML.toLowerCase();
        
        if (taskText.includes(query)) {
            taskDiv.style.display = "flex"; 
        } else {
            taskDiv.style.display = "none"; 
        }
    });
});
