import { ProxyState } from "../AppState.js";
import Quotes from "../Models/Quotes.js";
import { api } from "./AxiosService.js";

class QuotesService{
    constructor(){
        console.log("Quotes Service Working")
        this.getQuotes()
    }

    async getQuotes(){
        try {
            console.log("HERES YOUR DAILY QUOTE")
        let res = await api.get('quotes')
        ProxyState.quotes = new Quotes(res.data)
        } catch (error) {
            console.error(error)
        }
    }
}

export const quotesService = new QuotesService();