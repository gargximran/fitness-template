import React from 'react'
import {PricingCard} from '../../Components'

const cardContent = [
  {
    title: "4 Week's",
    price: 39,
    content: [
      "free-riding",
      "unlimited equipment",
      "personal trainer",
      "Weight losing classes",
      "Month to mouth",
      "No time restriction",
    ],
  },

  {
    title: "12 Month unlimited",
    price: 99,
    content: [
      "free-riding",
      "unlimited equipment",
      "personal trainer",
      "Weight losing classes",
      "Month to mouth",
      "No time restriction",
    ],
  },

  {
    title: "6 month unlimited",
    price: 199,
    content: [
      "free-riding",
      "unlimited equipment",
      "personal trainer",
      "Weight losing classes",
      "Month to mouth",
      "No time restriction",
    ],
  },
];

function SubPricingSection() {
    return (
      <>
      <p className="uppercase text-white text-center mt-20 font-primary font-bold text-sub-head-4 md:text-head-8 ">Choose your pricing plan</p>
        <div className="p-10 md:p-20 bg-secondary grid lg:grid-cols-3 gap-10 lg:gap-0">
          {cardContent.map(({ ...card }, index) => {
            return (
              <PricingCard
                key={index}
                {...card}
                className="w-full md:w-4/5 mx-auto"
              />
            );
          })}
        </div>
      </>
    );
}

export default SubPricingSection

