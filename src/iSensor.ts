interface ISensor {
    humidity: number;
    fluctuation: number;

    read(): void
}

export { ISensor };
