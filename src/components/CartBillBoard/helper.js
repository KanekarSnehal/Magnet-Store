export const cartDetailsCalculator = (cart) =>
  cart.reduce(
    (sum, { price, discount, qty }) => {
      return {
        totalMRP: sum.totalMRP + Number(price) * Number(qty),
        discountOnMRP:
          sum.discountOnMRP +
          (Number(price) * Number(qty) * Number(discount)) / 100,
        quantity: sum.quantity + qty,
      };
    },
    { totalMRP: 0, discountOnMRP: 0, quantity: 0 }
  );
