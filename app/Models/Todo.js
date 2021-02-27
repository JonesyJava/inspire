export default class Todo {

    constructor(data){
        this._id = data._id
        this.completed = data.completed
        this.description = data.description
    }

    get Template() {
        return /*html*/`
        <div class="text-center">
            <ul>${this.description} <span class="form-check-inline"><input class="form-check-input" type="checkbox" name="todos" value="checkedValue" ${this.completed ? "checked" : ""} onclick="app.todoController.completed('${this._id}')"> <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.todoController.deleteTodo('${this._id}')" aria-hidden="true"></i> </ul>
        </div>
        `
    }
}