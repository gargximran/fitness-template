import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import imgOne from '../../assets/images/about/about-3.webp'
import imgTwo from '../../assets/images/about/about-4.webp'
import imgThree from '../../assets/images/about/about-6.webp'
import SubReviewCard from "./SubReviewCard";


//***below section is needed if someone wants to use custom arrows
//***but there are some background padding problem

// const CustomArrow = ({ className, onClick }) => {
//   return (
//     <div
//       className={className}
//       style={{height: '18px', width: '18px', borderRadius: '15px', backgroundColor:'#ff2c00'}}
//       onClick={onClick}
//     />
//   );
// }

const SubReview = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // nextArrow: <CustomArrow />,
      // prevArrow: <CustomArrow />
    };
  return (
      <div className={'bg-dark-chocolate py-10 sm:px-10 '}>
        <div className={'container mx-auto'}>
          <div>
            <p className={'text-center text-white font-primary text-sub-head-2 sm:text-head-7 mb-5'}>OUR CILENT SAY</p>
          </div>
          <div className={'grid grid-cols-12'}>
            <div className={'col-span-1'}></div>
          <Slider className={'col-span-10'} {...settings}>
              <SubReviewCard
                image={imgThree}
                title='Sarah Smith'
                rating={5}
                text='This is an amazing course for the beginners who want to understand about everything 
                in machine learning. Thank you to the  instructor for explained it clearly and
                easy to understand.'
              />
              <SubReviewCard
                image={imgOne}
                title='Adnan Hasan'
                rating={5}
                text='This is an amazing course for the beginners who want to understand about everything 
                in machine learning. Thank you to the  instructor for explained it clearly and
                easy to understand.'
            />
            <SubReviewCard
                image={imgTwo}
                title='Jamie O Neil'
                rating={5}
                text='This is an amazing course for the beginners who want to understand about everything 
                in machine learning. Thank you to the  instructor for explained it clearly and
                easy to understand.'
              />
              
            </Slider>
            <div className={'col-span-1'}></div>
          </div>
        </div>
      </div>
  );
}

export default SubReview;
