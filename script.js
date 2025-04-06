function isleapyear(yrs) {
    if ((yrs % 4 === 0 && yrs % 100 !== 0) || (yrs % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(isleapyear(2024))