import React from 'react'
import MotivationCard from '../../Components/Cards/MotivationCard';
import imgOne from '../../assets/images/about/mot-1.png';
import imgTwo from '../../assets/images/about/mot-2.png';
import imgThree from '../../assets/images/about/mot-3.png';

const SubMotivation = () => {
    return (
        <div >
            <div className={'container mx-auto pt-10 sm:px-10 '}>
                <div className={'flex justify-center mb-3 sm:mb-10'}>
                    <div className={'text-white font-primary text-sub-head-2 sm:text-head-7 font-bold text-center'}>
                        <p>WHAT MAKES</p>
                        <p>FITLAP DIFFERENT?</p>
                    </div>
                </div>
                <div className={'grid grid-cols-12'}>
                    <div className={'col-span-12 md:col-span-6 lg:col-span-4'}>
                        <MotivationCard
                            image={imgThree}
                            title='EXPERIENCED COACHES'
                            text='Our coaches care about our Thrive community
                            and are committed to creating a fun to help
                            you reach your fitness goals'
                        />
                    </div>
                    <div className={'col-span-12 md:col-span-6 lg:col-span-4'}>
                        <MotivationCard
                            image={imgOne}
                            title='TRAINING SYSTEMS'
                            text='Our coaches care about our Thrive community
                            and are committed to creating a fun to help
                            you reach your fitness goals'
                        />
                    </div>
                    <div className={'col-span-12 md:col-span-6 lg:col-span-4'}>
                        <MotivationCard
                            image={imgTwo}
                            title='FAMILY ATMOSPHERE'
                            text='Our coaches care about our Thrive community
                            and are committed to creating a fun to help
                            you reach your fitness goals'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubMotivation;
