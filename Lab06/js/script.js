// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
if (isNaN(investment) || investment <= 0) {
    alert('Invalid entry. Please enter a number greater than 0.');
    do {
        investment = parseFloat(prompt('Invalid entry. Please enter a valid number. Enter investment amount as xxxx.xx'));
    }while (isNaN(investment) || investment <= 0);
}
rate = parseFloat(prompt('Enter interest rate as xx.x'));
if (isNaN(rate) || rate < 0 || rate > 6) {
    alert('Invalid entry.Please enter a number between 0 and 6.');
    do {
        rate = parseFloat(prompt('Invalid number. Please enter a number between 0 and 6. Enter interest rate as xx.x'));
    }while (isNaN(rate) || rate < 0 || rate > 6);
}
years = parseInt(prompt('Enter the number of years you want to invest for'));
if (isNaN(years) || years < 1 || years > 30) {
    alert('Invalid entry. Please enter a number between 1 and 30.');
    do {
        years = parseInt(prompt('Invalid number. Please enter a number between 1 and 30. Enter the number of years you want to invest for')); 
    }while (isNaN(years) || years < 1 || years > 30);
}

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);