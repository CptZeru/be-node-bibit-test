function findAndSortAnagrams(stringsArray) {
    // Initiatlize result object
    let resultObj = {}
    // Loop through array of strings
    stringsArray.forEach(str => {
        // Sort string characters
        const sortedStr = Array.from(str).sort().join('');
        // Initialize object property with empty array if have not exist
        if(!resultObj[sortedStr]) resultObj[sortedStr] = [];
        // Anagram grouping
        resultObj[sortedStr].push(str);
    });
    // Converts Object to Array and returns the Array of arrays.
    const convertedObjArray = [];
    Object.entries(resultObj).forEach(([key, value]) => convertedObjArray.push(value));
    return convertedObjArray;
}

const words = ["kita", "atik", "tika", "aku", "kia", "maka", "kua"];
console.log(words);
console.log(findAndSortAnagrams(words));
