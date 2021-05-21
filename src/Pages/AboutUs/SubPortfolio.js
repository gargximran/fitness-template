import React from 'react';
import { ProgressBarWithLabel } from '../../Components';
import placeImg from '../../assets/images/blog/blog.jpg';
import './SubPortfolio.css'

const SubPortfolio = () => {
    return (
        <div className={'container mx-auto px-5 md:px-10 py-5 md:py-10'}>
            <div className={'grid grid-cols-10 text-white md:mr-10'}>
                <div className={'col-span-10 lg:col-span-5'}>
                    <div className={'mb-5 text-center md:text-left '}>
                        <p className={'font-primary text-sub-head-2 md:text-head-8 font-medium mb-2'}>WHAT WE HAVE DONE</p>
                        <span className={'font-extralight md:font-normal'}>
                            It takes more than pure sweat to achieve your 
                            goals. Let our personal trainers create a 
                            workout plan for you that’s tailored to 
                            your body.
                        </span>
                    </div>
                    <div className={'mb-5'}>
                        <ProgressBarWithLabel label='FITNESS TRAINING' height={'heightForProgressbar'} progress={85} background={'backgroundClassForScrollbar'} foreground='forGroundClassForSrollbar'/>
                    </div>
                    <div className={'mb-5'}>
                        <ProgressBarWithLabel label='BODY BUILDING' height={'heightForProgressbar'} progress={75} background={'backgroundClassForScrollbar'} foreground='forGroundClassForSrollbar' />
                    </div>
                    <div>
                        <ProgressBarWithLabel label='CUSTOMER SERVICE' height={'heightForProgressbar'} progress={85} background={'backgroundClassForScrollbar'} foreground='forGroundClassForSrollbar' />
                    </div>
                </div>
                <div className={'col-span-10 lg:col-span-5 mt-10 lg:mt-0 lg:pl-10 pb-5 '}>
                    <img src={placeImg} alt='Not found' />
                </div>
            </div>
        </div>
    )
}

export default SubPortfolio;
