import { ISensor } from "./ISensor";
import { ISprinkler } from "./iSprinkler";
import { IAdministrator } from "./iAdministrator";

class Administrator implements IAdministrator {
    private _humidityObtained: number;
    private _sensor: ISensor;
    private _sprinkler: ISprinkler;
    private _humidityOutput: HTMLElement = document.getElementById("humidity");
    private _sprinklerOutput: HTMLElement = document.getElementById("sprinkler");
    private _alertMessagesOutput: HTMLElement = document.getElementById("alert-messages");

    viewSensor() {
        this._humidityObtained = this._sensor.humidity;
    }

    turnOnSprinkler() {
        this._sprinkler.turnOn();
    }
    turnOffSprinkler() {
        this._sprinkler.turnOff();
    }

    manage(sprinkler: ISprinkler, sensor: ISensor) {
        this._sprinkler = sprinkler;
        this._sensor = sensor;
        this.check();
    }

    check () {
        this._sensor.read();
        this.viewSensor();
        this._alertMessagesOutput.innerHTML = "";
        this._sprinklerOutput.innerHTML = "";
        this._humidityOutput.innerHTML = this._sensor.humidity.toString();

        if (this._humidityObtained < 40) {
            this.turnOnSprinkler();
            this._sprinklerOutput.innerHTML = "Turning on the sprinkler...";
            this._alertMessagesOutput.innerHTML = "ALERT! LOW HUMIDITY LEVEL DETECTED";
        } else if (this._humidityObtained < 50) {
            this.turnOnSprinkler();
            this._sprinklerOutput.innerHTML = "Turning on the sprinkler...";
        } else if (this._humidityObtained > 70 && this._humidityObtained < 90) {
            this._sprinklerOutput.innerHTML = "Turning off the sprinkler...";
            this.turnOffSprinkler();
        } else if (this._humidityObtained > 80) {
            this.turnOffSprinkler();
            this._sprinklerOutput.innerHTML = "Turning off the sprinkler...";
            this._alertMessagesOutput.innerHTML = "ALERT! HIGH HUMIDITY LEVEL DETECTED";
        }

        setTimeout(this.check.bind(this), 3000);
    }

}

export { Administrator };
