This Project implement on Node v14.21.3

How to run

- npm start
  or
  node index.js

Configuration

- You can configure data on cart.json and discounts.json file in repository to mock any data

Assumption

- The order of applying campaigns is Coupon > On Top > Seasonal.
- Apply only one campaign from the same category, i.e. users have to choose either Fixed amount or
  Percentage discount.
- Discount from Point is capped at 20% of total price
- If discount that apply to cart is the same category this module always use the first category discount that found.
- If same discount category is applied to cart module will ignore it automatically
- Discount on category can only applied one category at a time
