import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _draw(){
    console.log("HERES WEATHER", ProxyState.weather)
    let template = ""
    if(ProxyState.weather){
        template = ProxyState.weather.Template
    }
    document.getElementById('weather').innerHTML = template
}

export default class WeatherController {
    constructor(){
        console.log("WEATHER CONTROLLER WORKING")
        ProxyState.on("weather", _draw)
        this.getWeather()
    }

    getWeather(){
        try {
            weatherService.getWeather()
        } catch (error) {
            console.error(error)
        }
    }
    
}


