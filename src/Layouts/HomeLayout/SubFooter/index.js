import React from 'react';
import '../../../css/button.css';

const SubFooter = () => {
    return (
        <div className={'bg-chocolate p-5'}>
            <div className={'container mx-auto text-white py-5 sm:px-10'}>
                <div className={'md:flex md:justify-between'}>
                    <div className={'my-3'}>
                        <div className={'my-3 text-center md:text-left'}>
                            <span className={'text-sub-head-3 font:light md:font-normal cd:text-head-7 font-primary'}>What Would A Life - Changing Result</span>
                        </div>
                        <div className={'my-3 text-center md:text-left'}>
                            <span className={'text-sub-head-5 cd:text-sub-head-3 font-primary font:light md:font-normal'}>For Get Results, Book your free consultation with our health expert TODAY!</span>
                        </div>
                    </div>
                    <div className={'flex my-3 md:my-0 justify-center md:justify-end  items-center'}>
                        <div>
                            <button
                                className={'btn-fill-primary btn-medium md:btn-large'}>Book
                                Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubFooter;
