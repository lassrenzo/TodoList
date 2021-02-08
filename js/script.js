// GETTING ALL REQUIRED ELEMENTS

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

// ONKEYUP EVENT
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; // GETTING USER ENTERED VALUE
  if(userEnteredValue.trim() != 0){ // IF THE USER VALUE ISN'T ONLY SPACES
    addBtn.classList.add("active"); // ACTIVE THE ADD BUTTON
  }else{
    addBtn.classList.remove("active"); //UNACTIVE THE ADD BUTTON

  }
}

showTasks(); // CALLING SHOWTASK FUNCTION

addBtn.onclick = ()=>{ // WHEN USER CLICK ON PLUS ICON BUTTON
  let userEnteredValue = inputBox.value; // GETTING INPUT FIELD VALUE
  let getLocalStorageData = localStorage.getItem("New Todo"); // GETTING LOCALSTORAGE
  if(getLocalStorageData == null){ // IF LOCALSTORAGE HAS NO DATA
    listArray = []; // CREATE A BLANK ARRAY
  }else{
    listArray = JSON.parse(getLocalStorageData);  // TRANSFORMING JSON STRING INTO A JS OBJECT
  }
  listArray.push(userEnteredValue); // PUSHING OR ADDING NEW VALUE IN ARRAY
  localStorage.setItem("New Todo", JSON.stringify(listArray)); // TRANSFORMING JS OBJECT INTO A JSON STRING
  showTasks(); // CALLING SHOWTASK FUNCTION
  addBtn.classList.remove("active"); // UNACTIVE THE ADD BUTTON ONCE THE TASK ADDED
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; // PASSING THE ARRAY LENGTH IN PENDINGTASK
  if(listArray.length > 0){ // IF ARRAY LENGTH IS GREATER THAN 0
    deleteAllBtn.classList.add("active"); // ACTIVE THE DELETE BUTTON
  }else{
    deleteAllBtn.classList.remove("active"); // UNACTIVE THE DELETE BUTTON
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; // ADDING NEW LI TAG INSIDE UL TAG
  inputBox.value = ""; // ONCE TASK ADDED LEAVE THE INPUT FIELD BLANK
}

// DELETE TASK FUNCTION
function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); // DELETE OR REMOVE THE LI
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); // CALL THE SHOWTASKS FUNCTION
}

// DELETE ALL TASKS FUNCTION
deleteAllBtn.onclick = ()=>{
  let getLocalStorageData = localStorage.getItem("New Todo"); // GETTING LOCALSTORAGE
  if(getLocalStorageData == null){ // IF LOCALSTORAGE HAS NO DATA
    listArray = []; // CREATE A BLANK ARRAY
  }else{
    listArray = JSON.parse(getLocalStorageData);  // TRANSFORMING JSON STRING INTO A JS OBJECT
    listArray = []; // CREATE A BLANK ARRAY
  }
  localStorage.setItem("New Todo", JSON.stringify(listArray)); // SET THE ITEM IN LOCALSTORAGE
  showTasks(); // CALL THE SHOWTASKS FUNCTION
}
