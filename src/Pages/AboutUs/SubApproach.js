import React from 'react';
import ImgOne from '../../assets/images/about/about-1.png';
import ImgTwo from '../../assets/images/about/about-2.png';

const SubApproach = () => {
    return (
        <div>
            <div className={'container mx-auto text-white p-5 md:p-10'}>
                <div className={'grid grid-cols-11'}>
                    <div className={'col-span-11 sm:col-span-7 mt-10'}>
                        <p className={'font-primary text-center text-sub-head-1 md:text-head-7 mb-5 font-bold'}>Our Approach To Our Clients</p>
                        <p className={'font-primary text-center md:text-left  text-paragraph-sm md:text-paragraph font-light md:font-normal'}>
                            Podcasting operational change management inside of workflows to
                            establish a framework. Taking seamless key performance indicators 
                            offline to maximise the long tail. Keeping your eye on the ball while
                            performing a deep dive on the start-up mentality to derive 
                            convergenceon cross-platform integration.
                        </p>
                    </div>
                    <div className={'col-span-11 sm:col-span-4 ml-7 sm:ml-0 mt-5 sm:mt-0'}>
                        <div className={`relative h-96 w-96`}>
                            <div className={'relative w-60 h-60 lg:w-80 lg:h-80  rounded-full bg-red-500 border-black'}>
                                <img src={ImgOne} alt='Not found' />
                            </div>
                            <div className={'absolute left-32 top-32 lg:left-40 lg:top-40 w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-yellow-500'}>
                                <img src={ImgTwo} alt='Not found' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubApproach;
