const { z } = require("zod");

const VegetableSchema = z.object({
  itemName: z.string().min(3),
  itemDescription: z.string(),
  currentQuantity: z.number().int().positive(),
  price: z.number().positive(),
  city: z.string().min(1),
  district: z.string().min(1),
  sellername: z.string(),
  seller: z.any(),
  category: z.string(),
});

module.exports = { VegetableSchema };
