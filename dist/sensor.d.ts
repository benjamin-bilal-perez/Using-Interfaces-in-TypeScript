import { ISensor } from "./ISensor";
declare class Sensor implements ISensor {
    private _humidity;
    read(): void;
    get humidity(): number;
}
export { Sensor };
