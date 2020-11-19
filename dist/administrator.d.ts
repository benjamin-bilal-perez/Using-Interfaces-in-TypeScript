import { ISensor } from "./ISensor";
import { ISprinkler } from "./iSprinkler";
import { IAdministrator } from "./iAdministrator";
declare class Administrator implements IAdministrator {
    private _humidityObtained;
    private _sensor;
    private _sprinkler;
    private _humidityOutput;
    private _sprinklerOutput;
    private _alertMessagesOutput;
    viewSensor(): void;
    turnOnSprinkler(): void;
    turnOffSprinkler(): void;
    manage(sprinkler: ISprinkler, sensor: ISensor): void;
    check(): void;
}
export { Administrator };
