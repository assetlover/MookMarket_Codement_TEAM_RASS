const z = require("zod");

const cartItemSchema = z.object({
    productId: z.string(),
    quantity: z.number().int().positive(),
    price: z.number().positive(),
});

const cartSchema = z.array(cartItemSchema);

module.exports = { cartSchema };
