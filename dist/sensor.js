class Sensor {
    read() {
        this._humidity = Math.floor(Math.random() * (100 - 0)) + 0;
    }
    get humidity() {
        return this._humidity;
    }
}
export { Sensor };
//# sourceMappingURL=sensor.js.map