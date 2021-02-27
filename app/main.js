import TodoController from "./Controllers/TodoController.js"

class App {
  todoController = new TodoController();
  
}

window["app"] = new App();
