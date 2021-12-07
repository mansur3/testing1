const tax = require("../tax_calculator.js");



describe("Tax calculator check" , () => {
    test("First check", () => {
        expect(tax(250000)).toBe(25000)
    })
    test("First check", () => {
        expect(tax(500000)).toBe(100000)
    })
    test("First check", () => {
        expect(tax(2250000)).toBe(675000)
    })
    test("First check", () => {
        expect(tax(3250000)).toBe(975000)
    })
    test("First check", () => {
        expect(tax(250000)).toBe(25000)
    })
    test("First check", () => {
        expect(tax(500000)).toBe(100000)
    })
    test("First check", () => {
        expect(tax(2250000)).toBe(675000)
    })
    test("First check", () => {
        expect(tax(3250000)).toBe(975000)
    })
    
})