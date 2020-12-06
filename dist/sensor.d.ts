import { ISensor } from "./ISensor";
declare class Sensor implements ISensor {
    private _humidity;
    private _fluctuation;
    read(): void;
    get humidity(): number;
    get fluctuation(): number;
    set fluctuation(fluctuation: number);
}
export { Sensor };
