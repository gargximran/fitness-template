import React from 'react';
import SubContactForm from './SubContactForm';
import SubContactInfo from './SubContactInfo';

const SubGetInTouch = () => {
    return (
        <div>
            <div className={'container mx-auto flex justify-center text-white font-primary md:py-10'}>
                <div>
                    <p className={'text-head-7 text-center'}>Get In Touch</p>
                    <p className={'text-paragraph text-center my-10'}>
                        Interested in our IT services or need advice? Then please get in touch and we’ll be
                        glad to help. We strive to provide services we want to experience ourselves.
                    </p>
                    <div className={'grid grid-cols-12'}>
                        <div className={'md:col-span-1'}></div>
                        <div className={'col-span-12 lg:col-span-7'}>
                            <SubContactForm />
                        </div>
                        <div className={'col-span-12 lg:col-span-3'}>
                            <SubContactInfo />
                        </div>
                        <div className={'md:col-span-1'}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubGetInTouch;
