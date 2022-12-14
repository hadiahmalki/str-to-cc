function toCamelCase(str) {
    let strArray;

    if (typeof (str) !== 'string') {
        throw new Error('parameter should be string')
    }

    if (str === "") {
        return "";
    }
    if (str.indexOf("-") !== -1) {
        strArray = str.split("-")
    } else {
        strArray = str.split("_")
    }
    let convertString = strArray[0];

    for (let i = 1; i < strArray.length; i++) {
        convertString += capitalize(strArray[i]);
    }
    return convertString;
}
let capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}

module.exports = toCamelCase