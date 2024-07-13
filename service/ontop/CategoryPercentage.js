const Ontop = require('./Ontop');

class CategoryPercentage extends Ontop {
    constructor(category, percentage) {
        super();
        this.category = category;
        this.percentage = percentage;
    }

    apply(cart, totalPrice) {
        let discount = 0;
        cart.forEach(item => {
            if (item.category == this.category) {
                discount += item.quantity * item.price * this.percentage / 100
            }
        });
        return totalPrice - discount;
    }
}

module.exports = CategoryPercentage;