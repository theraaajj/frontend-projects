// Retrieve todo from local storage or initialize an empty array.
// if we have smthng stored in our todo, then we don't want to lose it all on refreshing the page

// let is meant for values that are to be changed
// const is meant for values that don't need any later changes

// JS Object Notation : formats JS code to make it easily readable.

// collecting all the elements in different variables to change them accordingly!! heheheee

let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const addButton = document.querySelector(".btn");
const deleteButton = document.getElementById("deleteButton");

// Initialize our project .....
// by listening to our webpage .... and the change
document.addEventListener("DOMContentLoaded", function() {
    addButton.addEventListener('click', addTask);                   // addTask will be a function that'll be executed whenever we click ADD
    todoInput.addEventListener('keydown', function(event){          // we take a argument bcz it is the input that is to be added as our task in todo list
        if ( event.key === "Enter") {
            event.preventDefault();                                 // for inputs, the default is to refresh the page or track to a different page
            addTask();
        }
    });
    deleteButton.addEventListener('click', deleteAllTasks) ;    
    displayTasks();     
});

function addTask() {
    //some logic to add, isn't it? 
    const newTask = todoInput.value.trim();                           //todoInput.value is the piece of text you enter , // trim() is a inbuilt function to delete all spaces at the end (just a safety feature)
    if (newTask !== ""){                                            // if the entered text is not empty
        todo.push({
            text : newTask,
            disabled: false
        });
        saveToLocalStorage(); 
        todoInput.value = "";
        displayTasks()
    }
}




function displayTasks() {
    //some logic to delete the list, isn't it?
    todoList.innerHTML = "";
    todo.forEach ((item, index) => {
        const p = document.createElement('p');
        p.innerHTML = `
           <div class = "todo-container">
              <input type="checkbox" class="todo-checkbox" id="input-${index}" ${item.disabled ? "checked" : ""}>
              <p id="todo-${index}" class="${item.disabled ? "disabled" : ""}"
               onclick="editTask(${index})">${item.text}</p>
            </div>
        
        `;
        p.querySelector(".todo-checkbox").addEventListener("change", ()=>{
            toggleTask(index);
        });
        todoList.appendChild(p);
    });
    todoCount.textContent = todo.length;
}

// now let's create the function to toggle our tasks
function toggleTask(index){
    todo[index].disabled = !todo[index].disabled;
    saveToLocalStorage();
    displayTasks();
}

function saveToLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(todo));
}

function deleteAllTasks() {
    //some logic to delete the list, isn't it?
    todo = [];
    saveToLocalStorage();
    displayTasks();
}

// now what if you made a typo! how to edit it after adding?

function editTask (index) {
    const todoItem = document.getElementById(`todo-${index}`);
    const existingText = todo[index].text;
    const inputElement = document.createElement("input");

    inputElement.value = existingText;
    todoItem.replaceWith(inputElement);
    inputElement.focus();                       //so that you don't start writing in the input field itself

    inputElement.addEventListener("blur", function () {
        const updatedText = inputElement.value.trim();
        if(updatedText) {
            todo[index].text = updatedText;
            saveToLocalStorage();
        }
        displayTasks();
    })
}
