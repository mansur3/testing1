const validate = require("../validate.js");

describe("validate", () => {
    test("TEst case one", () => {
        var regex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$"
        expect(validate("Something@3")).toMatch(regex);
    })
})