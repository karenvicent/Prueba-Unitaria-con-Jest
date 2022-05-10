
const sum = (a,b) => {
    return a + b
};
console.log(sum(7,3));


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};
let fromDollarToYen = function (dolar) {
return ((dolar/oneEuroIs.USD)* oneEuroIs.JPY);

};

let fromEuroToDollar = function (euro) {
    return (euro*oneEuroIs.USD);
    };
   
let fromYenToPound = function (yen) {
        return ((yen/oneEuroIs.JPY)* oneEuroIs.GBP);
};
module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen };