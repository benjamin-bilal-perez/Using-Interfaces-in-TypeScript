import { ISensor } from "./ISensor";

class Sensor implements ISensor {
    private _humidity:number = Math.floor(Math.random() * (100 - 0)) + 0;
    private _fluctuation: number = 0;

    read() {
        this._humidity += this._fluctuation;
    }

    get humidity(): number {
        return this._humidity;
    }

    get fluctuation(): number {
        return this._fluctuation;
    }
    set fluctuation(fluctuation: number) {
        this._fluctuation = fluctuation;
    }
    
}

export { Sensor };