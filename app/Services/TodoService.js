// The only service that requires more than a .get will be your TodoService.
import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "./AxiosService.js";

class TodoService{

    constructor(){
        console.log("TODO SERVICE WORKING")
        this.getTodos()
    }

    async createTodoTask(rawTask){
        try {
            const res = await api.post('Jonesy/todos', rawTask)
            console.log(rawTask)
            ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
            this.getTodos()
        } catch (error) {
            console.error(error)
        }
    }

    async getTodos(){
        const res = await api.get('Jonesy/todos')
        console.log("GOT TODOs")
        ProxyState.todos = res.data.map(rawTaskData => new Todo(rawTaskData))
    }

    async completed(_id){
        let todos = ProxyState.todos.find(t => t._id === _id);
            if (todos.completed == true){
                todos.completed = false
            }else{
                todos.completed = true
            }
        try {
            const res = await api.put('Jonesy/todos/' + _id, todos)
            console.log(res.data)
            ProxyState.todos = ProxyState.todos
        } catch (error) {
            console.log(error)
        }
    }

    async deleteTodo(_id){
        try {
            const res = await api.delete(`Jonesy/todos/` + _id)
            this.getTodos()
        } catch (error) {
            console.log(error)
        }
    }
}

export const todoService = new TodoService();