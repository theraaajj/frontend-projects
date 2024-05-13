// Retrieve todo from local storage or initialize an empty array.
// if we have smthng stored in our todo, then we don't want to lose it all on refreshing the page

// let is meant for values that are to be changed
// const is meant for values that don't need any later changes

// JS Object Notation : formats JS code to make it easily readable.

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
    deleteButton.addEventListener('click', deleteAllTasks()) ;    
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
        todoInput.clear()
    }
}

function deleteAllTasks() {
    //some logic to delete the list, isn't it?

}

function displayTasks() {
    //some logic to delete the list, isn't it?

}

