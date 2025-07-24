let string = "the quick brown fox jumps over the lazy dog the fox";
const words = string.split(" ");
const obj = wordCount(words);
const obj2 = wordCountReduce(words);
console.log(obj);
console.log(obj2);

function wordCount(words){
    const newobj = {};
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (Object.hasOwn(newobj, word))
            newobj[word] += 1;
        else
            newobj[word] = 1;
    }
    return newobj;
}

function wordCountReduce(words){
    return words.reduce(function(prev, curr){
        if (Object.hasOwn(prev, curr))
            prev[curr] += 1;
        else 
            prev[curr] = 1;
        return prev;
    }, {});
}
