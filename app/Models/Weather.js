export default class Weather{
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.main = data.main.temp
        this.description = data.description || data.weather[0].description
        this.country = data.sys.country
        this.main = (this.main * (9/5)) - 459.67
    }

    get Template() {
        return /*html*/`
            <div class="text-center card card-back text-light">
                <img src="http://openweathermap.org/img/wn/03d@2x.png">
                <h4>${Math.floor(this.main)}</h4>
                <h5>${this.description}</h5>
                <h5>${this.name}, ${this.country}</h5>
            </div>
        `
    }
}


