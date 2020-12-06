class Sensor {
    constructor() {
        this._humidity = Math.floor(Math.random() * (100 - 0)) + 0;
        this._fluctuation = 0;
    }
    read() {
        this._humidity += this._fluctuation;
    }
    get humidity() {
        return this._humidity;
    }
    get fluctuation() {
        return this._fluctuation;
    }
    set fluctuation(fluctuation) {
        this._fluctuation = fluctuation;
    }
}
export { Sensor };
//# sourceMappingURL=sensor.js.map