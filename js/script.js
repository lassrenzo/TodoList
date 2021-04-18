var formField = document.querySelector('form');
var addText = document.getElementById('add-list');
var list = document.querySelector('ul');
var clearButton = document.getElementById('clear');

//  ADD EVENT LISTENER TO SUBMIT THE LIST
formField.addEventListener('submit', function(r){ 
  r.preventDefault();

  //console.log(addText.value)
  listText(addText.value)
  addText.value = '';
      
});
//  CREATE FUNCTION FOR THE LIST ITEM
var listText = function(text){
 // console.log(addText.value)
  var todo = document.createElement('li');
  todo.textContent = text;
  list.appendChild(todo);
  document.getElementById("clear").disabled=false;

};
//  CREATE FUNCTION TO REMOVE ALL THE LIST ITEM
clearButton.addEventListener('click', function(){
        while (list.firstChild){
          list.removeChild(list.firstChild)
        }
});
//  IF THE LIST IS EMPTY THE BUTTON IS DISABLE
// var todoList = document.getElementById("li")
	if (addText.value == "")  {
		document.getElementById("clear").disabled = true;
	} 

// UPDATED YEAR FOOTER
var year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

