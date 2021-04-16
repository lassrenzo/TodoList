var formField = document.querySelector('form');
var addText = document.getElementById('add-list');
var list = document.querySelector('ul');
var clearButton = document.getElementById('clear');

formField.addEventListener('submit', function(r){ 
  r.preventDefault();

  //console.log(addText.value)
  listText(addText.value)
  addText.value = '';
      
});

var listText = function(text){
 // console.log(addText.value)
 var todo = document.createElement('li');
 todo.textContent = text;
 list.appendChild(todo);
document.getElementById("clear").disabled=false;

};

clearButton.addEventListener('click', function(){

        while (list.firstChild){
          list.removeChild(list.firstChild)
        }

});

let todoList = document.getElementById("li")
emptyList = "";

	if (todoList == emptyList || addText.value == emptyList)  {
		document.getElementById("clear").disabled = true;
	} 



// UPDATED YEAR FOOTER
const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();
