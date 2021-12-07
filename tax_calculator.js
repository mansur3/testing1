function tax_calculate(money) {
    var tax = 0;
    if(money < 250000) {
        tax = 0;
    } else if ( money >= 250000 && money < 500000) {
        let check = (money * (10 / 100))
        return tax = check
    } else if ( money >= 500000 && money < 1000000) {
        let check = (money * (20 / 100));
        return tax = check;
    } else {
        let check = (money * (30 / 100));
        return tax = check;
    }
}


module.exports =  tax_calculate;