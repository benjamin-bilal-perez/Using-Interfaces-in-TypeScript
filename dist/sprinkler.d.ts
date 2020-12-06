import { ISprinkler } from "./iSprinkler";
declare class Sprinkler implements ISprinkler {
    private _switchedOn;
    turnOff(): number;
    turnOn(): number;
    get switchedOn(): boolean;
}
export { Sprinkler };
