//O(n^2)
function twosumbruth (arr,tar){
    for(let i = 0 ; i<arr.length-1 ; i++){
        for(let j = i+1; j<arr.length;j++){
            if(arr[i]+arr[j]==tar)
                    return true;
        }
    }
    return false;
}

//O(nlog(n))
function twosum2pointers (arr,tar){
    arr.sort((a,b) => a-b);
    let start = 0;
    let end = arr.length-1;

    while(start < end){
        let sum = arr[start]+arr[end];
        if( sum === tar)
            return true;
        else if(sum < tar)
            start++;
        else    
            end--;
    }
    return false;
}

//O(n))
function twosumSet (arr,tar){
    const hs = new Set();
    for(let i=0; i <arr.length; i++){
        const complement = tar - arr[i];
        if(hs.has(complement))
            return true;
        hs.add(arr[i]);
    }
    return false;
}
function twoSumMap(arr, tar) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = tar - arr[i];
        if (map.has(complement)) {
            return true;
        }
        map.set(arr[i], i);
    }

    return false;
}


//main
const number = [2,7,11,15];
const target = 13;
console.log(twosumMap(number,target));
// console.log(twosumSet(number,target));
// console.log(twosum2pointers(number,target));
// console.log(twosumbruth(number,target));
