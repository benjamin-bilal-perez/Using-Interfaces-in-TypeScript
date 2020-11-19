import { ISprinkler } from "./iSprinkler";
import { Sprinkler } from "./sprinkler.js";
import { ISensor } from "./iSensor";
import { Sensor } from "./sensor.js";
import { IAdministrator } from "./iAdministrator";
import { Administrator } from "./Administrator.js";

class Greenhouse {
    start() {
        let sprinkler: ISprinkler = new Sprinkler();
        let sensor: ISensor = new Sensor();
        let administrator: IAdministrator = new Administrator();

        administrator.manage(sprinkler, sensor);
    }
}

let greenhouse: Greenhouse = new Greenhouse();
greenhouse.start();