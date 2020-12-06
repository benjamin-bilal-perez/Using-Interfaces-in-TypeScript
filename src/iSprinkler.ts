interface ISprinkler {
    switchedOn: boolean;

    turnOff(): number;
    turnOn(): number;
}

export { ISprinkler };