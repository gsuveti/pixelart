import Logger from './logger';


const mockLogFn = jest.fn().mockImplementation(
    (msg: string) => {
        console.log(msg);
    }
);
const mocWarnFn = jest.fn().mockImplementation(
    (msg: string) => {
        console.warn("MOCK WARNING: ", msg);
    }
);

jest.mock('./logger', () => {
    return jest.fn().mockImplementation(() => {
        return {
            log: mockLogFn
        }
    });
});
Logger.warn = mocWarnFn.bind(Logger);
const mockedLogger: jest.Mock<Logger> = Logger as unknown as jest.Mock<Logger>;

beforeEach(() => {
    mockedLogger.mockClear();
    mockLogFn.mockClear();
});


it('Logger log', async () => {
    let logger: Logger = new Logger();
    logger.log("test4");
    logger.log("test5");
    expect(mockLogFn).toHaveBeenCalledTimes(2);

});


it('Logger log - two loggers', async () => {
    let firstLogger: Logger = new Logger();
    let secondLogger: Logger = new Logger();
    firstLogger.log("test1");
    secondLogger.log("test2");
    secondLogger.log("test3");
    expect(Logger).toHaveBeenCalledTimes(2);
    expect(mockLogFn).toHaveBeenCalledTimes(3);
});


it('Logger warn', async () => {
    Logger.warn("test4");
    expect(mocWarnFn).toHaveBeenCalledTimes(1);
});

export default undefined;
