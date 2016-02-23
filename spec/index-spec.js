describe("rule 3,4", function() {
    it("convert 1 to emptyString", function() {
        expect(ruleThree(1, [3,5,7])).toBe("");
    });
    it("convert 3 to '0'", function() {
        expect(ruleThree(3, [3,5,7])).toBe("0");
    });
    it("convert 4 to emptyString", function() {
        expect(ruleThree(4, [3,5,7])).toBe("");
    });
    it("convert 10 to '1'", function() {
        expect(ruleThree(10, [3,5,7])).toBe("1");
    });
    it("convert 14 to '2'", function() {
        expect(ruleThree(14, [3,5,7])).toBe("2");
    });
    it("convert 15 to '01'", function() {
        expect(ruleThree(15, [3,5,7])).toBe("01");
    });
    it("convert 21 to '02'", function() {
        expect(ruleThree(21, [3,5,7])).toBe("02");
    });
    it("convert 35 to '12'", function() {
        expect(ruleThree(35, [3,5,7])).toBe("12");
    });
    it("convert 105 to '012'", function() {
        expect(ruleThree(1, [3,5,7])).toBe("");
    });
});


