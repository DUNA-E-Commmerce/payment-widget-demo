import { Checkout } from "@deuna/checkout-sdk";
import orderData from "../../../data/token.json";
import deunaConfig from "../../../data/deuna_settings.json";
import { randomBytes } from "crypto";

async function generate_next_deuna_order_id() {
  const str = randomBytes(16).toString("hex");

  return `ORD-${str}`;
}

console.log(generate_next_deuna_order_id());

export default async function handler(req, res) {
  const checkout = await Checkout.newInstance(deunaConfig);

  const order_id = await generate_next_deuna_order_id();

  const { data, error } = await checkout.requestOrderToken({
    ...orderData,
    order: {
      ...orderData.order,
      order_id,
      billing_address: {
        ...orderData.order.billing_address,
        email: req.query.email || orderData.order.billing_address.email,
      },
    },
  });

  console.log("requestOrderToken: ", { data, error });
  res.status(200).json(data);
}
