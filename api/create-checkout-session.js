import { getAuth } from "firebase-admin/auth";
import "./firebase-admin.js";

import Stripe from "stripe";

export async function POST(request) {
  try {
    const token = request.headers.get("Authorization")?.split("Bearer ")[1];

    if (!token) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decodedToken = await getAuth().verifyIdToken(token);
    const uid = decodedToken.uid;
    const { plan } = await request.json();

    const prices = {
      monthly: "price_1UT6BtC1DJgW5tQjS5KW1xBl",
      yearly: "price_1UT6DwC1DJgW5tQjUnh3zZUH",
    };

    if (!Object.hasOwn(prices, plan) || !prices[plan]) {
      return Response.json(
        { error: "Invalid subscription plan" },
        { status: 400 },
      );
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const origin = new URL(request.url).origin;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      client_reference_id: uid,
      metadata: {
        uid: uid,
        plan: plan,
      },
      line_items: [
        {
          price: prices[plan],
          quantity: 1,
        },
      ],
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
      ...(plan === "yearly"
        ? { subscription_data: { trial_period_days: 7 } }
        : {}),
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    return Response.json(
      { error: "Unable to start checkout" },
      { status: 500 },
    );
  }
}
