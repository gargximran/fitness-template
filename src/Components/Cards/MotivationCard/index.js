import React from 'react';

const MotivationCard = ({image, text, title}) => {
    return (
        <div>
            <div className={'text-white font-primary p-3 sm:p-5'}> 
                <div className={'flex justify-center'}>
                    <img src={image} alt='Not found' />
                </div>
                <div className={'text-sub-head-3 text-primary font-bold text-center mt-3'}>{title}</div>
                <div className={'text-paragraph-sm text-center mt-2'}>{text}</div>
            </div>
        </div>
    )
}

export default MotivationCard;
