import { ISprinkler } from "./iSprinkler";
import { ISensor } from "./iSensor";

interface IAdministrator {
    manage(sprinkler: ISprinkler, sensor: ISensor): void;
}

export { IAdministrator };