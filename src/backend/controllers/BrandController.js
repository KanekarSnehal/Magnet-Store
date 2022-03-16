import { Response } from "miragejs";
export const getBrandHandler = function (schema, request) {
  //   const brand = schema.brands.find();
  return new Response(200, {}, { brands: this.db.brands });
};
