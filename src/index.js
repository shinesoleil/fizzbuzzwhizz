function isOneDigitOf(number, spetialNumber) {
    var result = number.toString().indexOf(spetialNumber.toString());
    return result!=-1;
}

function ruleFive(number, spetialNumbers) {
    for(i=0; i<spetialNumbers.length; i++) {
        if(isOneDigitOf(number, spetialNumbers[i])) {
            return i;
        }
    }
    return -1;
}
