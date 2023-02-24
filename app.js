// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}



// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)



// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    //return the doller value
    return valueInDollar;
}
   

// Dollar To Yen
const fromDollarToYen = function(valueInDollar){
   
    let valueInYen = valueInDollar * oneEuroIs.JPY;
    
    return valueInYen;
}


// Yen To Pound
const fromYenToPound = function(valueInYen){
   
    let valueInPound = valueInYen * oneEuroIs.GBP;
    
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };