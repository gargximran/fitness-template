import React from 'react'
import "./style.css"


function PhysicalBenifitCard({ className, Logo, title, text }) {
  
  return (

      <div className={className}>
        <div className="text-center group">
          <Logo className="physicalBenifit-card-logo"/>
          <h3 className="physicalBenifit-card-title ">{title}</h3>
          <p className="physicalBenifit-card-content">
            {text}
          </p>
        </div>
      </div>

  );
}

export default PhysicalBenifitCard
