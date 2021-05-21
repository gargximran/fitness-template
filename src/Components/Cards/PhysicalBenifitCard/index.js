import React from 'react'
import "./style.css"


function PhysicalBenifitCard({ className, Logo, title, text }) {
  
  return (

      <div className={className}>
        <div className="text-center group">
          <Logo className="w-16 h-16 p-3 mx-auto fill-current text-black rounded-full bg-white group-hover:bg-primary group-hover:text-white transition duration-700" />
          <h3 className="physicalBenifit-card-title ">{title}</h3>
          <p className="physicalBenifit-card-content">
            {text}
          </p>
        </div>
      </div>

  );
}

export default PhysicalBenifitCard
