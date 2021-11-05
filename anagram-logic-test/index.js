function findAndSortAnagrams(stringsArray) {
    // Initiatlize result object
    let resultObj = {}
    // Loop through array of strings
    stringsArray.forEach(str => {
        // Sort string characters
        const sortedStr = sortString(str);
        // Initialize object property with empty array if have not exist
        if(!resultObj[sortedStr]) resultObj[sortedStr] = [];
        // Anagram grouping
        resultObj[sortedStr].push(str);
    });
    // Converts Object to Array and returns the Array of arrays.
    return objectToArray(resultObj);
}

function sortString(str) {
    return Array.from(str).sort().join(''); // Converts string to array of chars, Sort chars, and Create string from sorted chars
}

function objectToArray(obj) {
    const convertedObjArray = [];
    Object.entries(obj).forEach(([key, value]) => convertedObjArray.push(value));
    return convertedObjArray;
}

const words = ["kita", "atik", "tika", "aku", "kia", "maka", "kua"];
console.log(findAndSortAnagrams(words));
