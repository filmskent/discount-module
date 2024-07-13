class SpecialCampaign {
    constructor(everyBaht, discount) {
        this.everyBaht = everyBaht;
        this.discount = discount;
    }

    apply(cart, totalPrice) {
        let discountTimes = Math.floor(totalPrice / this.everyBaht);
        return totalPrice - discountTimes * this.discount;
    }
}

module.exports = SpecialCampaign;