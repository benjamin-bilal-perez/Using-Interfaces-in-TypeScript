import { ISprinkler } from "./iSprinkler";

class Sprinkler implements ISprinkler {
    private _switchedOn: boolean = false;

    turnOff():number {
        this._switchedOn = false;
        return 0;
    }

    turnOn():number {
        this._switchedOn = true;
        return 5;
    }

    get switchedOn(): boolean {
        return this._switchedOn;
    }

}

export { Sprinkler };
