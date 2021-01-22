// https://github.com/mohammademon551/assignment-js

//--------------------- kilometerToMeter function --------------------------------

function kilometerToMeter(km) {
    let meter = 0;
    if (km > 0) {
        meter = km * 1000;
    } else if (km < 0) {
        return "Distance cannot be negative.";
    } else if (km == 0) {
        return "Your value is 0.";
    } else {
        return "Sorry something is wrong.";
    }
    return meter;
    // To convert kilometer to meter, your value should be positive value. or not is't warning.
}


//------------------------- budgetCalculator function ------------------------------

function budgetCalculator(watch, mobile, laptop) {
    let totalPrice = 0;
    if (watch <= 0 && mobile <= 0 && laptop <= 0) {
        return "You didn't buy anything.";
    } else if (watch <= 0 && mobile <= 0) {
        return "You didn't buy Watch and Mobile"
    } else if (watch <= 0 && laptop <= 0) {
        return "You didn't buy Watch and Laptop"
    } else if (mobile <= 0 && laptop <= 0) {
        return "You didn't buy Mobile and Laptop"
    } else if (watch <= 0) {
        return "You didn't buy Watch"
    } else if (mobile <= 0) {
        return "You didn't buy Mobile.";
    } else if (laptop <= 0) {
        return "You didn't buy Laptop.";
    } else if (watch > 0 && mobile > 0 && laptop > 0) {
        let watchPrice = watch * 50;
        let mobilePrice = mobile * 100;
        let laptopPrice = laptop * 500;
        totalPrice = watchPrice + mobilePrice + laptopPrice;
    } else {
        return "Something is wrong!"
    }
    return totalPrice;
    //if you see the totoalPrice, you should must buy one thing of every item. or not is't warning.
}


//------------------------- hotelCost function ------------------------------

function hotelCost(day) {

    let totalCost = 0;

    if (day == 0) {
        return "Where is your day?";
    } else if (day < 0) {
        return "Day's value can't be negative.";
    } else if (day <= 10) {
        totalCost = day * 100;
    } else if (day <= 20) {
        let first10days = 10 * 100;
        let remaining = day - 10;
        let second10days = remaining * 80;
        totalCost = first10days + second10days;
    } else {
        let first10days = 10 * 100;
        let second10days = 10 * 80;
        let remaining = day - 20;
        let anotherDays = remaining * 50;
        totalCost = first10days + second10days + anotherDays;
    }
    return totalCost;
    // To see the hotelCost, your days must be positive and > 0. or not is't warning.
}


//------------------------- megaFriend function ------------------------------

function megaFriend(names) {
    let largerName = names[0];

    if (names.length == 0) {
        return "Your array is balnk.";
    } else {
        for (let i = 0; i < names.length; i++) {
            let element = names[i];

            if (element.length > largerName.length) {
                largerName = element;
            }
        }
    }
    return largerName;
    // To see the bigger name, you must have value on the array. or not is't warning.
}
