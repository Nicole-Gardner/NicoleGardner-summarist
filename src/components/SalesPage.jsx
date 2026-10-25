import React, { useState } from "react";
import { Link } from "react-router";
import "./SalesPage.css";
import SubscriptionPlans from "./SubscriptionPlans";
function SalesPage() {
  const [openQuestion, setOpenQuestion] = useState(0);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  return (
    <div>
      <h2>Get Unlimited Access to many amazing books to read.</h2>
      <p>Turn ordinary moments into amazing learning opportunities.</p>
      <p>Key idea in few minutes with many books to read.</p>
      <p>3 million people growing with summarist everyday.</p>
      <p>Precise recommendations collections curated by experts.</p>
      <figure className="pricing-top.png">
        <img src="assets/pricing-top.png" alt="pricing-top" />
      </figure>
      <SubscriptionPlans />

      <div className="faq__item">

        <h2>
          <button
            className="faq__question"
            onClick={() => toggleQuestion(0)}
            aria-expanded={openQuestion === 0}
          >
            How does a free 7-day trial work?
            <span>{openQuestion === 0 ? "⌃" : "⌄"}</span>
          </button>
        </h2>

        {openQuestion === 0 && (
          <p> Being your complimentary 7-day trial with a summarist annual membership. You are under no obligation to continue your subscription and you will only be billed when the trial period expires. with permium access you can learn at your own pace and as frequently as you desire and you may terminate you subscription prior ti the conclusion of the 7-day free trial.</p>
        )}
      </div>
      <div className="faq__item">
        <h2>
          <button
            className="faq__question"
            onClick={() => toggleQuestion(1)}
            aria-expanded={openQuestion === 1}
          >
            Can I switch subscriptions from monthly to yearly or yearly to monthly?
            <span>{openQuestion === 1 ? "⌃" : "⌄"}</span>
          </button>
        </h2>

        {openQuestion === 1 && (
          <p>
            While an annual plan is active, it is not feasible
            to switch to a monthly plan. However, once the
            current month ends, transitioning from a monthly
            plan to an annual plan is an option.
          </p>
        )}
      </div>
      <div className="faq__item">
        <h2>
          <button
            className="faq__question"
            onClick={() => toggleQuestion(2)}
            aria-expanded={openQuestion === 2}
          >
            What is included in the premium plan?
            <span>{openQuestion === 2 ? "⌃" : "⌄"}</span>
          </button>
        </h2>

        {openQuestion === 2 && (
          <p>
            Premium membership provides you with the ultimate summarist experience, including unrestricted entry to many best-selling books, high quality audio, the ability to download titles for offline reading and the option to send your reads to your kindle.
          </p>
        )}
      </div>
      <div className="faq__item">
        <h2>
          <button
            className="faq__question"
            onClick={() => toggleQuestion(3)}
            aria-expanded={openQuestion === 3}
          >
            Can I cancel during my trial or subscription?
            <span>{openQuestion === 3 ? "⌃" : "⌄"}</span>
          </button>
        </h2>

        {openQuestion === 3 && (
          <p>
            You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire summarist library, you can still expand your knowledge with one curated book per day.
          </p>
        )}
      </div>



      <ul className="Actions"> <li><Link to="/SummaristMagazine">Summarist Magazine</Link></li>
        <li><Link to="/CancelSubscription">Cancel Subscription</Link></li>
        <li><Link to="/Help">Help</Link></li>
        <li><Link to="/Contact Us">Contact Us</Link></li>
      </ul>
      <ul className="Useful Links"> <li><Link to="/Pricing">Pricing</Link></li>
        <li><Link to="/Summarist Business">Summarist Business</Link></li>
        <li><Link to="/Gift Cards">Gift Cards</Link></li>
        <li><Link to="/Authors & Publishers">Authors & Publishers</Link></li>
      </ul>
      <ul className="Company"> <li><Link to="/About">About</Link></li>
        <li><Link to="/Careers">Careers</Link></li>
        <li><Link to="/Partners">Partners</Link></li>
        <li><Link to="/Code of Conduct">Code of Conduct</Link></li>
      </ul>
      <ul className="Other"> <li><Link to="/SiteMap">SiteMap</Link></li>
        <li><Link to="/Legal Notice">Legal Notice</Link></li>
        <li><Link to="/Terms of Service">Terms of Service</Link></li>
        <li><Link to="/Privacy Policies">Privacy Policies</Link></li>
      </ul>
      <footer className="footer"> Copyright © 2023 Summarist.</footer>
    </div>

  );
}

export default SalesPage;