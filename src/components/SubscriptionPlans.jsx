import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "./firebase";
const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState("yearly");

  const handlePlanClick = async (plan) => {
    const user = auth.currentUser;

    if (!user) {
      alert("Please log in before subscribing.");
      return;
    }

    const token = await user.getIdToken();
    try {
      const response = await fetch(
        import.meta.env.DEV
          ? "http://localhost:4242/create-checkout-session"
          : "/api/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
      <h2>Choose the plan that fits you</h2>

      <label className={`plan ${selectedPlan === "yearly" ? "plan--active" : ""}`}>
        <input
          type="radio"
          name="plan"
          checked={selectedPlan === "yearly"}
          onChange={() => setSelectedPlan("yearly")}
        />

        <div>
          <h3>Premium Plus Yearly</h3>
          <h2>$99.99/year</h2>
          <p>7-day free trial included</p>
        </div>
      </label>

      <span className="plan__divider">or</span>

      <label className={`plan ${selectedPlan === "monthly" ? "plan--active" : ""}`}>
        <input
          type="radio"
          name="plan"
          checked={selectedPlan === "monthly"}
          onChange={() => setSelectedPlan("monthly")}
        />

        <div>
          <h3>Premium Monthly</h3>
          <h2>$9.99/month</h2>
          <p>No trial included</p>
        </div>
      </label>

      <button onClick={() => handlePlanClick(selectedPlan)}>
        {selectedPlan === "yearly"
          ? "Start your free 7-day trial"
          : "Get started"}
      </button>

      {selectedPlan === "yearly" && (
        <p>Cancel your trial at any time before it ends, and you won't be charged.</p>
      )}
    </div>
  );
};

export default SubscriptionPlans;