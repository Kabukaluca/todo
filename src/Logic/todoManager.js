
class TodoManager {
    constructor() {
        this.todoList = [];
        this.nextId = 0;
    }

    todoAdd(todo) {
        todo.id = this.nextId++;
        this.todoList.push(todo);
    }

    todoRemove(todoId) {
        this.todoList = this.todoList.filter(todo => todo.id !== todoId);
        this.todoList.forEach((todo, index) => {
            todo.id = index;
        });
        this.next = this.todoList.length;
    };

    todoToggleStatus(todoId) {
        this.todoList.forEach(todo => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed;
            };
        });
    }
};

const todoManager = new TodoManager();
export default todoManager;