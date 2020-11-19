import { ISprinkler } from "./iSprinkler";
declare class Sprinkler implements ISprinkler {
    private _switchedOn;
    turnOff(): void;
    turnOn(): void;
    get switchedOn(): boolean;
}
export { Sprinkler };
