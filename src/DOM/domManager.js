import todoManager from "../Logic/todoManager";
import { Display, TodoFolder } from "./domClasses";
import { displayNewTodoForm, closeNewTodoForm, displayNewProjectForm, closeNewProjectForm } from "../DOM/formModals.js";
import { checkTodoInputValidity, checkProjectInputValidity } from "../Logic/formInputHandler";

// === EventListener === //
function eventListenersSidebar() {
    let all = document.getElementById("todo-folder-all");
    let priorities = document.getElementById("todo-folder-priorities");
    let completed = document.getElementById("todo-folder-completed");
    let newTodo = document.getElementById("new-todo-btn");
    let newProject = document.getElementById("new-project-btn");

    all.addEventListener("click", () => {
        new Display("displayAll", todoManager.todoList).createDisplay();
        setCurrentProjectName("All Todo's");
    });

    priorities.addEventListener("click", () => {
       const list = document.getElementById("todo-list");

       while (list.firstChild) {
        list.removeChild(list.firstChild);
       };
       const listContainer = document.getElementById("todo-list");

        const highPriorityFolder = new TodoFolder("High", "priority-folder", "high-priority-folder");
        const mediumPriorityFolder = new TodoFolder("Medium", "priority-folder", "medium-priority-folder");
        const lowPriorityFolder = new TodoFolder("Low", "priority-folder", "low-priority-folder");

        listContainer.appendChild(highPriorityFolder.createFolder());
        listContainer.appendChild(mediumPriorityFolder.createFolder());
        listContainer.appendChild(lowPriorityFolder.createFolder());
        setCurrentProjectName("Priorities");
        eventListenersPriorities();
    });

    completed.addEventListener("click", () => {
        new Display("displayCompleted", todoManager.getTodoByStatus("Complete")).createDisplay();
        setCurrentProjectName("Completed");
    });

    newTodo.addEventListener("click", () => {
        displayNewTodoForm();
        eventListenersTodoModal();
    });

    newProject.addEventListener("click", () => {
        displayNewProjectForm();
        eventListenersProjectModal();
    })
};

function eventListenersPriorities() {
    let highPriority = document.getElementById("high-priority-folder");
    let mediumPriority = document.getElementById("medium-priority-folder");
    let lowPriority = document.getElementById("low-priority-folder");

    highPriority.addEventListener("click", () => {
        new Display("displayHighPriorities", todoManager.getTodoByPriority("High")).createDisplay();
        setCurrentProjectName("High Priority");
    });

    mediumPriority.addEventListener("click", () => {
        new Display("displayMediumPriorities", todoManager.getTodoByPriority("Medium")).createDisplay();
        setCurrentProjectName("Medium Priority");
    });

    lowPriority.addEventListener("click", () => {
        new Display("displayLowPriorities", todoManager.getTodoByPriority("Low")).createDisplay();
        setCurrentProjectName("Low Priority");
    });
};

function eventListenersTodoModal() {
    let todoFormSubmitBtn = document.getElementById("new-todo-form-submit-btn");
    let todoFormModal = document.getElementById("todo-form-modal");

    todoFormSubmitBtn.addEventListener("click", () => {
        checkTodoInputValidity();
    });
    
    todoFormModal.addEventListener("click", (event) => {
        if (event.target === todoFormModal) {
        closeNewTodoForm();
        };
    });

    document.addEventListener("keydown", handelKeydownTodoModal);
};
    function handelKeydownTodoModal(event) {
        let todoFormModal = document.getElementById("todo-form-modal");

        if (todoFormModal.style.display = "block") {
            if (event.key === "Enter") {
                event.preventDefault();
                checkTodoInputValidity();
            } else if (event.key === "Escape") {
                closeNewTodoForm();
            } else {
                return
            };
        };
    };

function eventListenersProjectModal() {
    let projectFormSubmitBtn = document.getElementById("new-project-form-submit-btn");
    let projectFormModal = document.getElementById("new-project-modal");

    projectFormSubmitBtn.addEventListener("click", () => {
        checkProjectInputValidity();
    });
    
    projectFormModal.addEventListener("click", (event) => {
        if (event.target === projectFormModal) {
        closeNewProjectForm();
        };
    }); 

    document.addEventListener("keydown", handelKeydownProjectModal);
};
    function handelKeydownProjectModal(event) {
        let projectFormModal = document.getElementById("new-project-modal");
    
        if (projectFormModal && projectFormModal.style.display === "block") {
            if (event.key === "Enter") {
                event.preventDefault();
                checkProjectInputValidity();
                
            } else if (event.key === "Escape") {
                closeNewProjectForm();
            } else {
                return
            }
        };
    };

export function setCurrentProjectName(name) {
    let currentProjectName = document.getElementById("current-folder-name");
    currentProjectName.textContent = name;
};
    
export function addProjectEventListener(projectName, projectFolder, display) {
    projectFolder.addEventListener("click", () => {
        setCurrentProjectName(projectName);
        display.createDisplay();
    })
}
export { eventListenersSidebar, eventListenersPriorities };