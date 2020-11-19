import { ISprinkler } from "./iSprinkler";

class Sprinkler implements ISprinkler {
    private _switchedOn: boolean = false;

    turnOff() {
        this._switchedOn = false;
    }

    turnOn() {
        this._switchedOn = true;
    }

    get switchedOn(): boolean {
        return this._switchedOn;
    }

}

export { Sprinkler };