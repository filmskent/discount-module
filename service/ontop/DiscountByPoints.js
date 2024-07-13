const Ontop = require('./Ontop');

class DiscountByPoints extends Ontop {
    constructor(points) {
        super();
        this.points = points;
    }

    apply(cart, totalPrice) {
        let maxDiscount = totalPrice * 0.20;
        let discount = Math.min(this.points, maxDiscount);
        return totalPrice - discount;
    }
}

module.exports = DiscountByPoints;