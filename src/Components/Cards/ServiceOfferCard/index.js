import React from 'react'
import image1 from "../../../assets/images/ourClass/ourClassImage1.webp"
import { FaGreaterThan } from "react-icons/fa";
import "./style.css"

const ServiceOfferCard=({className})=> {
    return (
      <div className={className}>
        <div
          className="serviceOffer-card-wrapper"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="serviceOffer-card-content">
            <h1 className="uppercase text-2xl font-bold font-primary">weightlifting</h1>
            <p className="uppercase mt-3 flex justify-between text-sm font-primary">Strength <FaGreaterThan/></p>
          </div>
        </div>
      </div>
    );
}

export default ServiceOfferCard
