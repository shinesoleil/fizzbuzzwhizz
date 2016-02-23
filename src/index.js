function isOneDigitOf(number, spetialNumber) {
    var result = number.toString().indexOf(spetialNumber.toString());
    return result!=-1;
}

function isMultipleOf(number, spetialNumber) {
    return number%spetialNumber == 0;
}

function ruleFive(number, spetialNumbers) {
    for(i=0; i<spetialNumbers.length; i++) {
        if(isOneDigitOf(number, spetialNumbers[i])) {
            return i;
        }
    }
    return -1;
}

function ruleThree(number, spetialNumbers) {
    var result = "";
    for(i=0; i<spetialNumbers.length; i++) {
        if(isMultipleOf(number, spetialNumbers[i])){
            result += i;
        }
    }
    return result;
}




