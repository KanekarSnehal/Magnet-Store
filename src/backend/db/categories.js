import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Bowls",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    img: "https://i.ibb.co/bNRz4fH/evy-prentice-8t-VLi-9-RLUc-unsplash.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Glassware",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    img: "https://i.ibb.co/j6JtKKz/glassware.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Plates",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    img: "https://i.ibb.co/fCfky44/plates.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Dinner Set",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    img: "https://i.ibb.co/CmbMbLv/dinner-set.jpg",
  },
];
