interface ISprinkler {
    switchedOn: boolean;

    turnOff(): void;
    turnOn(): void;
}

export { ISprinkler };