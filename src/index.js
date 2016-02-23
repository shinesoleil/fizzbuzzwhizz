var array1 = ["0", "1", "2", "01", "02", "12", "012"];
var array2 = ["Fizz", "Buzz", "Whizz", "FizzBuzz", "FizzWhizz", "BuzzWhizz", "FizzBuzzWhizz"];

function transform(number) {
    var position = array1.indexOf(number);
    if(position == -1) {
        return number;
    }
    else {
        return array2[position];
    }
}

function isOneDigitOf(number, spetialNumber) {
    var result = number.toString().indexOf(spetialNumber.toString());
    return result!=-1;
}

function isMultipleOf(number, spetialNumber) {
    return number%spetialNumber == 0;
}

function ruleFive(number, spetialNumbers) {
    if(isOneDigitOf(number, spetialNumbers[0])) {
        return "0";
    }
    return "-1";
}

function ruleThree(number, spetialNumbers) {
    var result = "";
    for(var i=0; i<spetialNumbers.length; i++) {
        if(isMultipleOf(number, spetialNumbers[i])){
            result += i;
        }
    }
    return result;
}

function game(number, baseNumbers) {
    var resultRuleFive = ruleFive(number, baseNumbers);
    var resultRuleThree = ruleThree(number,baseNumbers);

    if(resultRuleFive != "-1") {
        return resultRuleFive;
    }
    else if(resultRuleThree != "") {
        return resultRuleThree;
    }
    else {
        return number;
    }
}


function index() {
    for(var i=1; i<=100; i++) {
        console.log(transform(game(i, [3,5,7])));
    }
}



