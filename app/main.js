import BGController from "./Controllers/BGController.js"
import ClockController from "./Controllers/ClockController.js"
import QuotesController from "./Controllers/QuotesController.js"
import TodoController from "./Controllers/TodoController.js"
import WeatherController from "./Controllers/WeatherController.js"

class App {
  todoController = new TodoController()
  weatherController = new WeatherController()

  quotesController = new QuotesController()

  bgController = new BGController()

  clockController = new ClockController()
}

window["app"] = new App();
