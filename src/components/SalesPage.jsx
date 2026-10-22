import React from "react";
import { Link } from "react-router";
function SalesPage() {
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
              <h2> How does a free 7-day trial work?</h2>
              <p> Being your complimentary 7-day trial with a summarist annual membership. You are under no obligation to continue your subscription and you will only be billed when the trial period expires. with permium access you can learn at your own pace and as frequently as you desire and you may terminate you subscription prior ti the conclusion of the 7-day free trial.</p>
              <h2>Can I switch subscriptions from monthly to yearly or yearly to monthly?</h2>
              <p> While an annual plan is active, it is not  feasible to switch to a monthly plan. However once the current month ends transitioning from  a monthly plan to an annual plan is an option.</p>
              <h2>What is included in the premium plan?</h2>
              <p> Preium membership provides you with the ultimate summarist experience, including unrestricted entry to many best-selling books, high quality audio, the ability to download titles for offline reading and to option to send your reads to your kindle.</p>
              <h2>Can I cancel during my trial or subscription?</h2>
              <p> You will not be charged if you cancel your trial before its conclusion. while you will not have complete access to the entire summarist library, you can still expanc your knowledge with on curated book per day.</p>
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