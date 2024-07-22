import React from 'react';
import './CreditsPage.css';

function CreditsPage({ credits }) {
  return (
    <div className="credits-page">
      <h2>Your Total Credits: {credits}</h2>
      <div className="spend-credits">
        <h2>Ways to Spend Credits</h2>
        <ul>
          <li>Gift Card - 50 credits</li>
          <li>Discount Coupon - 30 credits</li>
          <li>Free Shipping - 20 credits</li>
        </ul>
      </div>
    </div>
  );
}

export default CreditsPage;
