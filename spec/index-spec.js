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

describe("rule 5", function() {
    it("convert 1 to '-1'", function() {
        expect(ruleFive(1, [3,5,7])).toBe("-1");
    });
    it("convert 3 to '0'", function() {
        expect(ruleFive(3, [3,5,7])).toBe("0");
    });
    it("convert 23 to '0'", function() {
        expect(ruleFive(23, [3,5,7])).toBe("0");
    });
    it("convert 31 to '0'", function() {
        expect(ruleFive(31, [3,5,7])).toBe("0");
    });
    it("convert 33 to '0'", function() {
        expect(ruleFive(33, [3,5,7])).toBe("0");
    });
    it("convert 99 to '-1'", function() {
        expect(ruleFive(99, [3,5,7])).toBe("-1");
    });
});

describe("transform from numbers to words", function() {
    it("convert '0' to 'Fizz'", function() {
        expect(transform("0")).toBe("Fizz");
    });
    it("convert '1' to 'Buzz'", function() {
        expect(transform('1')).toBe("Buzz");
    });
    it("convert '2' to 'Whizz'", function() {
        expect(transform('2')).toBe("Whizz");
    });
    it("convert '01' to 'FizzBuzz'", function() {
        expect(transform('01')).toBe("FizzBuzz");
    });
    it("convert '02' to 'FizzWhizz'", function() {
        expect(transform('02')).toBe("FizzWhizz");
    });
    it("convert '12' to 'BuzzWhizz'", function() {
        expect(transform('12')).toBe("BuzzWhizz");
    });
    it("convert '012' to 'FizzBuzzWhizz'", function() {
        expect(transform('012')).toBe("FizzBuzzWhizz");
    });
});
