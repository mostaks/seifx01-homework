const cartForParty = {
    banana: "1.25",
    Tshirt: "25.01",
    apple: "34"
}

const sum = function(obj) {
    let result = 0;
    for (let i in obj) {
    result += Number(obj[i]);
    //result += +obj[i];
    //result += parseFloat(obj[i]);
    }
    return result.toFixed(2);
}

console.log(sum(cartForParty));