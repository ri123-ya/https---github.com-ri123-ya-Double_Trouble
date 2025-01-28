// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
function doubleTrouble(arr) {
    if (arr.length === 0) {
        return arr;
    }

    const result = [];
    let doubled = false;
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1] && !doubled) {

            result.push(arr[i]);
            doubled = true;
        } else if (i > 0 && arr[i] === arr[i - 1] && doubled) {

            result.push(arr[i]);
        } else {

            result.push(arr[i] * 2);
        }
    }

    return result;
}

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(doubleTrouble(arr));