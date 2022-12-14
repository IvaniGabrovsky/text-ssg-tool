const fs = require("fs");
const {
    isDir,
    isFile,
    isExists,
    makeDir,
    removeDir,
    envParserAction,
} = require("./os");

jest.mock("fs");

describe("Tests isDir", () => {
    test("empty, null, undefined should return false", () => {
        [null, undefined, ""].forEach((p) => expect(isDir(p)).toBe(false));
    });

    test("relative file path should return true", () => {
        const path = "abc";
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue({
            isDirectory() {
                return true;
            },
        });
        expect(isDir(path)).toBe(true);
    });

    test("relative file path with a space should return true", () => {
        const path = "a bc";
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue({
            isDirectory() {
                return true;
            },
        });
        expect(isDir(path)).toBe(true);
    });

    test("absolute Unix file path should return true", () => {
        const path = "/abc";
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue({
            isDirectory() {
                return true;
            },
        });
        expect(isDir(path)).toBe(true);
    });

    test("absolute Windows file path should return true", () => {
        const path = "abc";
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue({
            isDirectory() {
                return true;
            },
        });
        expect(isDir(path)).toBe(true);
    });
});

describe("Tests isFile", () => {
    test("empty, null, undefined should return false", () => {
        [null, undefined, ""].forEach((p) => expect(isFile(p)).toBe(false));
    });

    test("relative file path should return true", () => {
        const path = "abc";
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue({
            isDirectory() {
                return true;
            },
        });
        expect(isFile(path)).toBe(true);
    });

    test("relative file path with a space should return true", () => {
        const path = "a bc";
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue({
            isDirectory() {
                return true;
            },
        });
        expect(isFile(path)).toBe(true);
    });

    test("absolute Unix file path should return true", () => {
        const path = "/abc";
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue({
            isDirectory() {
                return true;
            },
        });
        expect(isFile(path)).toBe(true);
    });

    test("absolute Windows file path should return true", () => {
        const path = "abc";
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue({
            isDirectory() {
                return true;
            },
        });
        expect(isFile(path)).toBe(true);
    });
});

describe("Tests isExists", () => {
    test("empty, null, undefined should return false", () => {
        [null, undefined, ""].forEach((p) => expect(isExists(p)).toBe(false));
    });

    test("relative file path should return true", () => {
        const path = "abc";
        fs.lstatSync = jest.fn();
        fs.existsSync.mockReturnValue(true);
        expect(isExists(path)).toBe(true);
    });

    test("relative file path with a space should return true", () => {
        const path = "a bc";
        fs.lstatSync = jest.fn();
        fs.existsSync.mockReturnValue(true);
        expect(isExists(path)).toBe(true);
    });

    test("absolute Unix file path should return true", () => {
        const path = "/abc";
        fs.lstatSync = jest.fn();
        fs.existsSync.mockReturnValue(true);
        expect(isExists(path)).toBe(true);
    });

    test("absolute Windows file path should return true", () => {
        const path = "abc";
        fs.lstatSync = jest.fn();
        fs.existsSync.mockReturnValue(true);
        expect(isExists(path)).toBe(true);
    });
});

describe("Tests makeDir", () => {
    test("empty, null, undefined should return false", () => {
        [null, undefined, ""].forEach((p) => expect(makeDir(p)).toBe(false));
    });

    test("relative file path should call mkdirSync", () => {
        const path = "abc";
        fs.mkdirSync = jest.fn();
        fs.existsSync = jest.fn();
        fs.existsSync.mockReturnValue(false);
        makeDir(path);
        expect(fs.mkdirSync).toBeCalled();
    });

    test("relative file path with a space should call mkdirSync", () => {
        const path = "a bc";
        fs.mkdirSync = jest.fn();
        fs.existsSync = jest.fn();
        fs.existsSync.mockReturnValue(false);
        makeDir(path);
        expect(fs.mkdirSync).toBeCalled();
    });

    test("absolute Unix file path should call mkdirSync", () => {
        const path = "/abc";
        fs.mkdirSync = jest.fn();
        fs.existsSync = jest.fn();
        fs.existsSync.mockReturnValue(false);
        makeDir(path);
        expect(fs.mkdirSync).toBeCalled();
    });

    test("absolute Windows file path should call mkdirSync", () => {
        const path = "abc";
        fs.mkdirSync = jest.fn();
        fs.existsSync = jest.fn();
        fs.existsSync.mockReturnValue(false);
        makeDir(path);
        expect(fs.mkdirSync).toBeCalled();
    });
});

describe("Tests removeDir", () => {
    test("empty, null, undefined should return false", () => {
        [null, undefined, ""].forEach((p) => expect(removeDir(p)).toBe(false));
    });

    test("relative file path should call rmSync", () => {
        const path = "abc";
        fs.rmSync = jest.fn();
        removeDir(path);
        expect(fs.rmSync).toBeCalled();
    });

    test("relative file path with a space should call rmSync", () => {
        const path = "a bc";
        fs.rmSync = jest.fn();
        removeDir(path);
        expect(fs.rmSync).toBeCalled();
    });

    test("absolute Unix file path should call rmSync", () => {
        const path = "/abc";
        fs.rmSync = jest.fn();
        removeDir(path);
        expect(fs.rmSync).toBeCalled();
    });

    test("absolute Windows file path should call rmSync", () => {
        const path = "abc";
        fs.rmSync = jest.fn();
        removeDir(path);
        expect(fs.rmSync).toBeCalled();
    });
});

describe("Tests envParserAction", () => {
    test("empty, null, undefined should return an anonymous function", () => {
        [null, undefined, ""].forEach((ssg) => {
            const mock = envParserAction(ssg);
            expect(mock).toEqual(expect.any(Function));
        });
    });
});
