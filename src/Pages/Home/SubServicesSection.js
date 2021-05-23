import Slider from "react-slick";
import { ServiceOfferCard } from "../../Components";
import "./SubServicesSection.css";

const SubServicesSection = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 5000,

    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="pl-10 pr-10 md:pl-20 md:pr-20">

<h1 className="text-sub-head-1 text-white md:text-head-6 text-center mt-10 mb-10">Services Offer</h1>

      <Slider {...settings}>
        <ServiceOfferCard className="h-80 md:w-11/12 mx-auto" />
        <ServiceOfferCard className="h-80 md:w-11/12 mx-auto " />
        <ServiceOfferCard className="h-80 md:w-11/12 mx-auto" />
        <ServiceOfferCard className="h-80 md:w-11/12 mx-auto" />
        <ServiceOfferCard className="h-80 md:w-11/12 mx-auto" />
        <ServiceOfferCard className="h-80 md:w-11/12 mx-auto" />
        <ServiceOfferCard className="h-80 md:w-11/12 mx-auto" />
        <ServiceOfferCard className="h-80 md:w-11/12 mx-auto" />
        <ServiceOfferCard className="h-80 md:w-11/12 mx-auto" />
      </Slider>
    </div>
  );
};

export default SubServicesSection;
