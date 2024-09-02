function firstNonRepeatingChar(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = charCount[char] + 1 || 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
console.log(firstNonRepeatingChar("swiss")); // "w"
