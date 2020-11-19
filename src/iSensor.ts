interface ISensor {
    humidity: number;

    read(): void
}

export { ISensor };