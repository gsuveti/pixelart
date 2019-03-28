class Logger {
    private readonly prefix: string;

    constructor() {
        this.prefix = "LOG: "
    }

    static warn(message: string) {
        console.warn(message);
    }

    log(message: string) {
        console.log(this.prefix, message);
    }
}

export default Logger
