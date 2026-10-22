import React from "react";
import { Link } from "react-router";
const SubscriptionPlans = () => {

const handlePlanClick = async (plan) => {
  try {
    const response = await fetch(
      "http://localhost:4242/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.url) {
      throw new Error(data.error || "Checkout failed");
    }

    window.location.href = data.url;
  } catch (error) {
    console.error(error);
    alert("Unable to start checkout. Check your server.");
  }
};

  return (
  <div className="subscription__plans">
    <div className="plan plan--yearly">
      <h2>Premium Plus Yearly</h2>
      <p>$99.99/year</p>
      <p>7-day free trial</p>

      <button onClick={() => handlePlanClick("yearly")}>
        Start Your Free 7-Day Trial
      </button>

      <p>Cancel before your trial ends to avoid being charged.</p>
    </div>

    <div className="plan plan--monthly">
      <h2>Premium Monthly</h2>
      <p>$9.99/month</p>
      <p>No trial included</p>

      <button onClick={() => handlePlanClick("monthly")}>
        Get Started
      </button>
    </div>
  </div>
);return (
  <div className="subscription__plans">
    <div className="plan plan--yearly">
      <h2>Premium Plus Yearly</h2>
      <p>$99.99/year</p>
      <p>7-day free trial</p>

      <button onClick={() => handlePlanClick("yearly")}>
        Start Your Free 7-Day Trial
      </button>

      <p>Cancel before your trial ends to avoid being charged.</p>
    </div>

    <div className="plan plan--monthly">
      <h2>Premium Monthly</h2>
      <p>$9.99/month</p>
      <p>No trial included</p>

      <button onClick={() => handlePlanClick("monthly")}>
        Get Started
      </button>
    </div>
  </div>
);
};

export default SubscriptionPlans;

