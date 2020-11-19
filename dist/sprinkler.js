class Sprinkler {
    constructor() {
        this._switchedOn = false;
    }
    turnOff() {
        this._switchedOn = false;
    }
    turnOn() {
        this._switchedOn = true;
    }
    get switchedOn() {
        return this._switchedOn;
    }
}
export { Sprinkler };
//# sourceMappingURL=sprinkler.js.map