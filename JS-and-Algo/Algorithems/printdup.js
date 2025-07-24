// O(n)
function printDuplicateMap(arr) {
    const countMap = new Map();   
    
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (countMap.has(item)) {
            countMap.set(item, countMap.get(item) + 1);
        } else {
            countMap.set(item, 1);
        }
    }

    for (let [key, value] of countMap) {
        if (value > 1) {
            console.log(key);
        }
    }
}
function printDuplicateMapIndexes(arr) {
    const indexMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (!indexMap.has(item)) {
            indexMap.set(item, [i]);
        } else {
            indexMap.get(item).push(i);
        }
    }

    for (const [value, indexes] of indexMap.entries()) {
        if (indexes.length > 1) {
            console.log("Value " + value + " appears at indexes: " + indexes.join(', '));
        }
    }
}

const number = [2, 17, 11, 2, 15, 2, 15];
printDuplicateMapIndexes(number);
// printDuplicateMap(number);
