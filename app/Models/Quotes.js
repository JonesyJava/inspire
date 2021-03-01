export default class Quotes{
    constructor(data){
        this._id = data._id
        this.quotes = data.content
        this.author = data.author
    }

    get Template() {
        return /*html*/`
        <div>
        <h4>${this.quotes}</h4>
        <h5>${this.author}</h5>
        </div>
        `
    }

}