require("dotenv").config();
const {
  initializeApp,
  applicationDefault,
} = require("firebase-admin/app");

const { getFirestore } = require("firebase-admin/firestore");

initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore();

db.listCollections()
  .then(() => {
    console.log("Firebase connected successfully!");
  })
  .catch((error) => {
    console.error("Firebase connection failed:", error.message);
  });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  process.env.STRIPE_SECRET_KEY
);

const app = express();

  app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"]
}));
app.use(express.json());

const prices = {
  monthly: "price_1UT6BtC1DJgW5tQjS5KW1xBl",
  yearly: "price_1UT6DwC1DJgW5tQjUnh3zZUH",
};

app.post("/create-checkout-session", async (req, res) => {
  const { plan } = req.body;

  if (!Object.hasOwn(prices, plan)) {
    return res.status(400).json({
      error: "Invalid subscription plan",
    });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: prices[plan],
          quantity: 1,
        },
      ],
   success_url:
  "http://localhost:5174/subscriptions-plans?checkout=success",
cancel_url:
  "http://localhost:5174/subscriptions-plans?checkout=cancelled",
      ...(plan === "yearly"
        ? { subscription_data: { trial_period_days: 7 } }
        : {}),
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      error: "Unable to create checkout session",
    });
  }
});

app.listen(4242, () => {
  console.log("Stripe server running on port 4242");
});

