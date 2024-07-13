const Coupon = require('./coupon');

class FixedAmountCoupon extends Coupon {
    constructor(amount) {
        super();
        this.amount = amount;
    }

    apply(cart, totalPrice) {
        return totalPrice - this.amount;
    }
}

module.exports = FixedAmountCoupon;