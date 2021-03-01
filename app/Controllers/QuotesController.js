import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";

function _draw(){
    console.log("Quotes have ARRIVED")
    let template = ""
    if(ProxyState.quotes){
        template = ProxyState.quotes.Template
    }
    document.getElementById('quotes').innerHTML = template
}

export default class QuotesController {
    constructor(){
        console.log("QUOTES CONTROLLER WORKING")
        ProxyState.on("quotes", _draw)
        this.getQuotes()
    }

    getQuotes() {
        try {
            quotesService.getQuotes()
        } catch (error) {
            console.error(error)
        }
    }
}