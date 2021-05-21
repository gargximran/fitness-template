import React from 'react';
import { StarRatings } from '../../Components';

function SubReviewCard({image, title, text, rating}) {
    return (
        <div>
            <div className={'flex justify-center'}>
                <div>
                    <img className={'w-32 h-32 rounded-full'} src={image} alt='not found' /><br/>
                    <p className={'text-primary font-primary text-sub-head-4 font-bold text-center'}>{title}</p>
                    <div><StarRatings rating={rating} /></div>
                </div>
            </div>
            <div className={'grid grid-cols-12'}>
                <div className={'col-span-1'}></div>
                <div className={'col-span-10'}>
                    <p className={'text-center text-white font-primary text-paragraph p-3'}>
                        {text}
                    </p>
                </div>
                <div className={'col-span-1'}></div>
            </div>
            
        </div>
    )
}

export default SubReviewCard;
