import { ISensor } from "./ISensor";
import { ISprinkler } from "./iSprinkler";
import { IAdministrator } from "./iAdministrator";

class Administrator implements IAdministrator {
    private _humidityObtained: number;
    private _sensor: ISensor;
    private _sprinkler: ISprinkler;
    private _fluctuation: number = 0;

    private _humidityOutput: HTMLElement = document.getElementById("humidity-id");
    private _sprinklerOutput: HTMLElement = document.getElementById("sprinkler-id");
    private _alertMessagesOutput: HTMLElement = document.getElementById("alert-messages-id");
    private _humidityBar:HTMLElement = document.getElementById("humidity-bar-id");
    private _plant:HTMLElement = document.getElementById("plant-img-id");


    viewSensor() {
        this._humidityObtained = this._sensor.humidity;
        this._humidityBar.style.width = this._sensor.humidity + "px";
    }

    turnOnSprinkler() {
        this._fluctuation += this._sprinkler.turnOn();
    }
    turnOffSprinkler() {
        this._fluctuation += this._sprinkler.turnOff();
    }

    manage(sprinkler: ISprinkler, sensor: ISensor) {
        this._sprinkler = sprinkler;
        this._sensor = sensor;
        this.check();
    }

    check () {
        this._fluctuation--;
        this._sensor.fluctuation = this._fluctuation;
        this._sensor.read();
        this._fluctuation = 0;
        this.viewSensor();
        this._alertMessagesOutput.innerHTML = "";
        this._sprinklerOutput.innerHTML = "";
        this._humidityOutput.innerHTML = this._sensor.humidity.toString();

        if (this._humidityObtained < 40) {
            this.turnOnSprinkler();
            this._sprinklerOutput.innerHTML = "Turning on the sprinkler...";
            this._alertMessagesOutput.innerHTML = "ALERT! LOW HUMIDITY LEVEL DETECTED";
            (this._plant as HTMLImageElement).src = "imgs/BrownPlant.png";
        } else if (this._humidityObtained < 50) {
            this.turnOnSprinkler();
            this._sprinklerOutput.innerHTML = "Turning on the sprinkler...";
            (this._plant as HTMLImageElement).src = "imgs/GreenPlant.png";
        } else if (this._humidityObtained > 70 && this._humidityObtained < 90) {
            this._sprinklerOutput.innerHTML = "Turning off the sprinkler...";
            (this._plant as HTMLImageElement).src = "imgs/GreenPlant.png";
            this.turnOffSprinkler();
        } else if (this._humidityObtained > 80) {
            this.turnOffSprinkler();
            this._sprinklerOutput.innerHTML = "Turning off the sprinkler...";
            this._alertMessagesOutput.innerHTML = "ALERT! HIGH HUMIDITY LEVEL DETECTED";
            (this._plant as HTMLImageElement).src = "imgs/UnhealthyPlant.png";
        }

        setTimeout(this.check.bind(this), 1000);
    }

}

export { Administrator };
