function replaceConsecutiveRepeats(str) {
    let result = '';
    let i = 0;
    while (i < str.length) {
        let count = 1;
        while (i + 1 < str.length && str[i] === str[i + 1]) {
            count++;
            i++;
        }
        if (count > 1) {
            result += count + str[i];
        } else {
            result += str[i];
        }

        i++;
    }

    return result;
}
console.log(replaceConsecutiveRepeats('recurrssion')); // Output: "recu2r2sion"
console.log(replaceConsecutiveRepeats('hello'));       // Output: "hel2o"
console.log(replaceConsecutiveRepeats('aabbcc'));      // Output: "a2b2c2"
