import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Natura Bowls Green",
    inStock: true,
    fastDelivery: false,
    categoryName: "Bowls",
    brandName: "Milton",
    price: 2000,
    discount: 10,
    ratings: 5,
    description:
      "Side bowl and serving bowl from the abstract collection. The bowls can be used as soup bowls, curry bowls or rice bowls.",
    img: "https://cdn.shopify.com/s/files/1/2690/0106/products/DSC00023_beaaa9a4-c942-4467-8eee-d77f26a2331a_700x.jpg?v=1614663852",
  },
  {
    _id: uuid(),
    title: "Ash Textured Glassware",
    inStock: true,
    fastDelivery: true,
    categoryName: "Glassware",
    brandName: "Borosil",
    price: 1000,
    discount: 20,
    ratings: 2,
    description:
      "Champagne glass in an alluring color that elegantly adorns a diamond pattern on the outer surface. ",
    img: "https://cdn.shopify.com/s/files/1/2690/0106/products/DSCF7796_700x.jpg?v=1640747254",
  },
  {
    _id: uuid(),
    title: "Swirl Plates",
    inStock: false,
    fastDelivery: false,
    categoryName: "Plates",
    brandName: "Treo",
    price: 4000,
    discount: 15,
    ratings: 3,
    description:
      "Swirl plates come in eight different variants and can be used as snack plates and dinner plates. ",
    img: "https://cdn.shopify.com/s/files/1/2690/0106/products/SwirlPlates_11_700x.jpg?v=1613566343",
  },
  {
    _id: uuid(),
    title: "Orange Crokery Fiesta",
    inStock: false,
    fastDelivery: true,
    categoryName: "Dinner Set",
    brandName: "Clay Craft",
    price: 1500,
    discount: 12,
    ratings: 5,
    description:
      "Side bowl and serving bowl from the abstract collection. The bowls can be used as soup bowls, curry bowls or rice bowls.",
    img: "https://cdn.shopify.com/s/files/1/2690/0106/products/Orangecrockery_2_700x.jpg?v=1613994929",
  },

  {
    _id: uuid(),
    title: "Natura Bowls Black",
    inStock: true,
    fastDelivery: false,
    categoryName: "Bowls",
    brandName: "Clay Craft",
    price: 1500,
    discount: 5,
    ratings: 1,
    description:
      "Side bowl and serving bowl from the abstract collection. The bowls can be used as soup bowls, curry bowls or rice bowls.",
    img: "https://cdn.shopify.com/s/files/1/2690/0106/products/NaturaBowlsBlack_1_700x.jpg?v=1614405868",
  },
  {
    _id: uuid(),
    title: "Natura Bowls White",
    inStock: false,
    fastDelivery: false,
    categoryName: "Bowls",
    brandName: "Clay Craft",
    price: 3500,
    discount: 5,
    ratings: 1,
    description:
      "Side bowl and serving bowl from the abstract collection. The bowls can be used as soup bowls, curry bowls or rice bowls.",
    img: "https://i.ibb.co/bNRz4fH/evy-prentice-8t-VLi-9-RLUc-unsplash.jpg",
  },
  {
    _id: uuid(),
    title: "Red Wine Glass Set of 2",
    inStock: true,
    fastDelivery: true,
    categoryName: "Glassware",
    brandName: "Treo",
    price: 1000,
    discount: 10,
    ratings: 5,
    description:
      "Champagne glass in an alluring color that elegantly adorns a diamond pattern on the outer surface. ",
    img: "https://i.ibb.co/j6JtKKz/glassware.jpg",
  },
  {
    _id: uuid(),
    title: "Classic Plates",
    inStock: true,
    fastDelivery: false,
    categoryName: "Plates",
    brandName: "Milton",
    price: 4000,
    discount: 15,
    ratings: 4,
    description:
      "Classic everyday plates that blend into all dining setups, whether formal or informal.",
    img: "https://i.ibb.co/fCfky44/plates.jpg",
  },
  {
    _id: uuid(),
    title: "Siena Dinner Plate",
    inStock: true,
    fastDelivery: true,
    categoryName: "Dinner Set",
    brandName: "Borosil",
    price: 3000,
    discount: 20,
    ratings: 2,
    description:
      "Siena dinner plates are ceramic plates that come in colour combinations of black and white with a striped pattern.",
    img: "https://i.ibb.co/CmbMbLv/dinner-set.jpg",
  },
];
