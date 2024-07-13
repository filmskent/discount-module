const Coupon = require('./coupon');

class PercentageDiscount extends Coupon {
    constructor(percentage) {
        super();
        this.percentage = percentage;
    }

    apply(cart, totalPrice) {
        return totalPrice * (100 - this.percentage / 100);
    }
}

module.exports = PercentageDiscount;