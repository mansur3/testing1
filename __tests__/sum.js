const sum = require("../sum.js");

describe("Sum of n arguments", () => {
    test("first test case" , () => {
        expect(sum(1, 2, 3, 4, 5, 5, 6)).toBe(26)
    })
    test("secodn test case", () => {
        expect(sum(7, 6, 5, 4, 3, 2, 1)).toBe(28)
    })
    test("first test case" , () => {
        expect(sum(1, 2, 3, 4, 5, 5, 6)).toBe(26)
    })
    test("secodn test case", () => {
        expect(sum(7, 6, 5, 4, 3, 2, 1)).toBe(28)
    })
})