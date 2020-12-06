class Sprinkler {
    constructor() {
        this._switchedOn = false;
    }
    turnOff() {
        this._switchedOn = false;
        return 0;
    }
    turnOn() {
        this._switchedOn = true;
        return 5;
    }
    get switchedOn() {
        return this._switchedOn;
    }
}
export { Sprinkler };
//# sourceMappingURL=sprinkler.js.map