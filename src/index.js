import createTodo from "./Logic/createTodo";
import { displayContent } from "./DOM/domStructure";
import "./style.css";
import { eventListenersSidebar } from "./DOM/domManager";
import { Display } from "./DOM/domClasses";
import todoManager from "./Logic/todoManager";


// EventListener //
document.addEventListener("DOMContentLoaded", () => {
    new Display("displayAll", todoManager.todoList).createDisplay();
});


 // Create new Todos //
createTodo("Low Todo", "This should create a low prio todo", "2023-01-02", "Low", "", true);
createTodo("Medium Todo", "This should create a medium prio todo", "2023-12-13", "Medium", "", false);
createTodo("The Odin Project", "Finish the Odin Project to learn code", "2024-12-31", "High", "Odin Project", false);

// === Console Log & Display === //
document.addEventListener("DOMContentLoaded", () => {
    eventListenersSidebar();
});

displayContent();