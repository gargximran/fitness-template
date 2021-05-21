import Slider from "react-slick"
import carouselIMage from '../../assets/images/homeCarouselImage/valery-sysoev-LDAirERNzew-unsplash.webp'

import './SubHeroSectionSlider.css'

const SubHeroSectionSlider = () => {

    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        adaptiveHeight: true
    }


    return (


            <Slider {...settings}>
                <div>
                    <div className={'sub-hero-section-slider'} style={{backgroundImage: `url(${carouselIMage})`}}>
                    </div>
                </div>

                <div>
                    <div className={'sub-hero-section-slider'} style={{backgroundImage: `url(${carouselIMage})`}}>
                    </div>
                </div>


            </Slider>

    )
}


export default SubHeroSectionSlider