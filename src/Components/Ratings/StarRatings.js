import React, { Fragment } from 'react';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";


const StarRatings = ({ rating, color }) => {
  const star = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      star.push(<BsStarFill className={`text-${color || 'yellow-400'} m-1`} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      star.push(<BsStarHalf className={`text-${color || 'yellow-400'} m-1`}/>);
    } else {
      star.push(<BsStar className='text-gray-400 m-1' />);
    }
  }
  return (
    <div className='inline-flex justify-center'>
      {star.map((star, index) => {
        return <Fragment key={index}>{star}</Fragment>;
      })}
    </div>
  );
};

export default StarRatings;
