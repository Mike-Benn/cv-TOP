export { getItemWithID , createStringFromList , parseDateString }

const MONTHS = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December",
}

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

function parseDateString(str) {
    let arr = str.split("-");
    return `${MONTHS[arr[1]]} ${arr[0]}`

}