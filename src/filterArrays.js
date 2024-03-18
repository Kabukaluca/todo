// import { todo_all } from "./index.js";
import todoManager from "./todoManager.js";

let filteredTasks = [];

const filters = {
    filterByDueDate: (dueDate) => {
        return todoManager.todoList.filter(todo => todo.dueDate === dueDate);
        // return todo_all.filter(todo => todo.dueDate === dueDate);
    },
    filterByPriority: (priority) => {
        return todoManager.todoList.filter(todo => todo.priority === priority);
        // return todo_all.filter(todo => todo.priority === priority);
    },
    filterByStatus: (todoStatus) => {
        return todoManager.todoList.filter(todo => todo.status === todoStatus);
        // return todo_all.filter(todo => todo.status === priority);
    },
};

function filterTodos() {
    filteredTasks.highPriorityTasks = filters.filterByPriority("high");
    filteredTasks.mediumPriorityTasks = filters.filterByPriority("medium");
    filteredTasks.lowPriorityTasks = filters.filterByPriority("low");

    filteredTasks.completeTasks = filters.filterByStatus("complete");
    filteredTasks.incompleteTasks = filters.filterByStatus("incomplete");
};

export { filterTodos, filteredTasks };
 // --- Class for Creating filters --- //
/*
class filterdTask {
    constructor(newFilterName, condition) {
        this.newFilter = newFilterName;
        this.condition = condition;
        this.newFilter = [];
    }

    filterByPriority() {
        this.newFilter = filters.filterByPriority(this.condition);
    }

    filterByStatus() {
        this.newFilter = filters.filterByStatus(this.condition);
    }
}; */