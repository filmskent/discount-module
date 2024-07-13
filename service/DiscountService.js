const Coupon = require('./coupon/coupon');
const Ontop = require('./ontop/Ontop');
const SpecialCampaign = require('./season/SpecialCampaign');


class DiscountService {
    constructor(cart, discounts) {
        this.cart = cart;
        this.discounts = this.filterAndSortDiscounts(discounts);
        this.totalPrice = this.calculateTotalPrice();
    }

    calculateTotalPrice() {
        let totalPrice = 0;
        this.cart.forEach(item => {
            totalPrice += item.quantity * item.price;
        });
        return totalPrice;
    }

    filterAndSortDiscounts(discounts) {
        let selectedDiscounts = {};

        discounts.forEach(discount => {
            if (discount instanceof Coupon) {
                if (!('coupon' in selectedDiscounts)) {
                    selectedDiscounts['coupon'] = discount
                }
            }
            if (discount instanceof Ontop) {
                if (!('ontop' in selectedDiscounts)) {
                    selectedDiscounts['ontop'] = discount
                }
            }                
            if (discount instanceof SpecialCampaign) {
                if (!('seasonal' in selectedDiscounts)) {
                    selectedDiscounts['seasonal'] = discount
                }
            }
        });

        return selectedDiscounts
    }

    calculateFinalPrice() {
        let totalPrice = this.totalPrice;
        for (let type in this.discounts) {
            totalPrice = this.discounts[type].apply(this.cart, totalPrice);
        }
        return totalPrice;
    }
}

module.exports = DiscountService;