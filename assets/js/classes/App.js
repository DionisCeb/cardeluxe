import Navigation from "./Navigation.js";
import Slider from "./Slider.js";

class App {
    constructor() {
        this.navigation = new Navigation(".toggle_btn", ".toggle_btn img", ".dropdown_menu");
        this.Slider = new Slider(".carousel-main-section");
    }
}

export default App;
