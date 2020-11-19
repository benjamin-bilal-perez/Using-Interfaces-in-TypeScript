import { ISensor } from "./ISensor";

class Sensor implements ISensor {
    private _humidity: number;

    read() {
        this._humidity = Math.floor(Math.random() * (100 - 0)) + 0;
    }

    get humidity(): number {
        return this._humidity;
    }
}

export { Sensor };