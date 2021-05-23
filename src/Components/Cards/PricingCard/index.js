import React from "react";
import "./style.css";

function PricingCard({ className, title, price, content }) {
  return (
    <div className={className}>
      <div className="pricing-card-wrapper">
        {/* card border */}

        <div className="pricing-card-border-top"></div>
        {/* <div className="pricing-card-border-bottom"></div>
        <div className="pricing-card-border-left"></div>
        <div className="pricing-card-border-right"></div>  */}

        {/* Title */}

        <p className="pricing-card-title">{title}</p>

        {/* price */}
        <p className="pricing-card-price">{price}.0$</p>

        {/* Feature list */}
        <ul className="pricing-card-style">
          {content.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>

        {/* book button */}
        <button className="btn btn-outline-primary pr-4 pl-4 pt-1 pb-1">
          Book now
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
