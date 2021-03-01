import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService{
    constructor(){
        console.log("WEATHER SERVICE WORKING")
        this.getWeather()
    }

    async getWeather(){
        try {
        console.log("GOT WEATHER")
        let res = await api.get('weather')
        ProxyState.weather = new Weather(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    
}

export const weatherService = new WeatherService();

