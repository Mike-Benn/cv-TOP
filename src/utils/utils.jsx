export { getItemWithID , createStringFromList }

function getItemWithID(id , arr) {
    let arrCopy = [...arr];
    for (let i = 0; i < arrCopy.length; i++) {
        if (arr[i].id === id) {
            let item = arr[i];
            arr.splice(i , 1);
            return {item , arr}
        }
    }
}

function createStringFromList(arr) {
    let result = "";
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if (i === length - 1) {
            result = result + arr[i].value;
            return result;
        }
        result = result + arr[i].value + ", ";
    }
}