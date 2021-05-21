import React from 'react';

const SubAbout = () => {
    return (
        <div className={'text-white font-primary'}>
            <div className={'grid grid-cols-12 mx-5 my-5 md:my-10 md:mx-10'}>
                <div className={'col-span-2'}></div>
                <div className={'col-span-12 lg:col-span-8 tracking-wider'}>
                    <h2 className={'text-center font-medium md:font-bold text-sub-head-2 sm:text-head-6 mb-5'}>
                        About Our Gym
                    </h2>
                    <p className={'text-paragraph sm:text-sub-head-2 mb-5 font-light md:font-normal'}>
                        It takes more than pure sweat to achieve your goals. Let our personal 
                        trainers create a workout plan for you that’s tailored to your body.
                    </p>
                    <p className={'text-paragraph sm:text-sub-head-2 mb-5 font-light md:font-normal'}>
                        Grounded in science and crafted by experts, our personal training program
                        takes the guesswork out of working out, so you can achieve more with the
                        time you have. Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C users after 
                        installed base benefits. Dramatically visualize customer directed
                        convergence without revolutionary ROI.
                    </p>
                </div>
                <div className={'col-span-2'}></div>
            </div>
        </div>
    )
}

export default SubAbout;
