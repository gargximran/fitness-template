import React from 'react';
import SubPortfolio from './SubPortfolio';
import SubAbout from './SubAbout';
import SubApproach from './SubApproach';
import SubMotivation from './SubMotivation';
import SubReview from './SubReview';
import SubTopHeroSection from "./SubTopHeroSection";

const AboutUs = () => {
    return (
        <div className={'w-full overflow-hidden'}>
            <SubTopHeroSection />
            <SubPortfolio />
            <SubAbout />
            <SubApproach />
            <SubReview />
            <SubMotivation />
        </div>
    )
}

export default AboutUs;
