import Stripe from "stripe";
import { db } from "./firebase-admin.js";

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const signature = request.headers.get("stripe-signature");
  const body = await request.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error(error.message);
    return new Response("Invalid signature", { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const { uid, plan } = session.metadata || {};

      if (
        uid &&
        ["yearly", "monthly"].includes(plan) &&
        ["paid", "no_payment_required"].includes(session.payment_status)
      ) {
        await db.collection("users").doc(uid).set(
          {
            subscriptionPlan:
              plan === "yearly" ? "premium-plus" : "premium",
            subscriptionStatus: "active",
          },
          { merge: true }
        );
      }
    }

    return Response.json({ received: true });
  } catch (error) {
    console.error(error);
    return new Response("Webhook failed", { status: 500 });
  }
}