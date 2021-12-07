const time = require("../time.js");


describe("Time testing", () => {
    test("seconds", () => {
        expect(time(6000)).toBe("6 seconds");
        // expect(time(6000)).toMatch(/6 seconds/)

    })
    test("Miliseconds", () => {
        expect(time(500)).toBe("500 milliseconds");
    })
    test("minute test", () => {
        expect(time(60000)).toBe("1 minutes")
    })
    test("minute with seconds", () => {
        expect(time(200000)).toBe("3 minutes 20 seconds")
    })
})