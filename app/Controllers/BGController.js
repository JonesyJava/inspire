import { ProxyState } from "../AppState.js";
import { bgService } from "../Services/BGServices.js";

function _draw(){
    console.log("BG IMAGE CONTROLLER", ProxyState.BG)
    
    document.body.style.backgroundImage = `url('${ProxyState.BG.url}')`;
}

export default class BGController {
    constructor(){
        console.log("BG CONTROLLER WORKING")
        ProxyState.on("BG", _draw)
        this.getBG()
    }

    getBG() {
        try {
            bgService.getBG()
        } catch (error) {
            console.error(error)
        }
    }
}