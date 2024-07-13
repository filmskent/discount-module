const fs = require('fs');

const Item = require('./model/itemModel');
const FixedAmountCoupon = require('./service/coupon/FixedAmount');
const PercentageDiscount = require('./service/coupon/PercentageDiscount');
const CategoryPercentage = require('./service/ontop/CategoryPercentage');
const DiscountByPoints = require('./service/ontop/DiscountByPoints');
const SpecialCampaign = require('./service/season/SpecialCampaign');
const DiscountService = require('./service/DiscountService');

function readJsonFile(file) {
    const jsonData = fs.readFileSync(file, 'utf8');
    return JSON.parse(jsonData);
  }
  
const cartData = readJsonFile('./cart.json');
const cart = cartData.map(item => new Item(item.name, item.price, item.category, item.quantity));

const discountsData = readJsonFile('./discounts.json').discounts;
const discounts = discountsData.map(discount => {
  switch (discount.type) {
    case 'FixedAmount':
      return new FixedAmountCoupon(discount.amount);
    case 'Percentage':
      return new PercentageDiscount(discount.percentage);
    case 'OnTop':
      return new CategoryPercentage(discount.category, discount.amount);
    case 'DiscountByPoints':
      return new DiscountByPoints(discount.points);
    case 'SpecialCampaign':
      return new SpecialCampaign(discount.everyXTHB, discount.discountYTHB);
    default:
      console.log(`Unknown discount type: ${discount.type}`);
      return null;
  }
}).filter(discount => discount !== null); 

let calculator = new DiscountService(cart, discounts);
let finalPrice = calculator.calculateFinalPrice();
console.log(`The final price is: ${finalPrice} THB`);