import { Sprinkler } from "./sprinkler.js";
import { Sensor } from "./sensor.js";
import { Administrator } from "./Administrator.js";
class Greenhouse {
    start() {
        let sprinkler = new Sprinkler();
        let sensor = new Sensor();
        let administrator = new Administrator();
        administrator.manage(sprinkler, sensor);
    }
}
let greenhouse = new Greenhouse();
greenhouse.start();
//# sourceMappingURL=greenhouse.js.map