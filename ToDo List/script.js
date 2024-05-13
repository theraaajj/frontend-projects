// Retrieve todo from local storage or initialize an empty array.
// if we have smthng stored in our todo, then we don't want to lose it all on refreshing the page

// let is meant for values that are to be changed
// const is meant for values that don't need any later changes

// JS Object Notation : formats JS code to make it easily readable.

let todo = JSON.parse(localStorage.getItem("todo")) || [];
const todoInput = document.getElementById("todoInput");
