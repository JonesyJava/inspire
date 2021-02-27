import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";

function _draw(){
    let todos = ProxyState.todos
    let template = ""
    todos.forEach(t => template += t.Template)
    document.getElementById("todos").innerHTML = template
    console.log(ProxyState.todos)
}


export default class TodoController {
    constructor(){
        console.log("TODO CONTROLLER WORKING")
        console.log(ProxyState.todos)
        _draw()
        ProxyState.on("todos", _draw)
        todoService.getTodos();
        _draw()
    }

    createTodoTask(e){
        e.preventDefault();
        console.log("created task worked!")
        let form = e.target
        console.log(form)
        let rawTask = {
            description: form.description.value
    }
    console.log(rawTask)
    todoService.createTodoTask(rawTask)
}

    getTodos(){
        try {
            todoService.getTodos()
        } catch (error) {
            console.error(error)
        }
    }

    completed(_id){
        todoService.completed(_id)
        
    }

    deleteTodo(_id){
        console.log(_id)
        todoService.deleteTodo(_id)
    }

}