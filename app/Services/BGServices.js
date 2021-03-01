import { ProxyState } from "../AppState.js";
import BG from "../Models/BG.js";
import { api } from "./AxiosService.js";

class BGService{
    constructor(){
        console.log("BG SERVICE WORKING")
        this.getBG()
    }

    async getBG(){
        try {
            console.log("BG IS HERE")
            let res = await api.get("images")
            ProxyState.BG = new BG (res.data)
        } catch (error) {
            console.error(error)
        }
    }
}

export const bgService = new BGService();