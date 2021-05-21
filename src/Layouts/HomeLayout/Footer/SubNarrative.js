import React from 'react';
import {BiDumbbell} from "react-icons/bi";
import {AiFillFacebook, AiFillLinkedin} from "react-icons/ai";

const SubNarrative = ({className}) => {
    return (
        <div className={className}>
            <div className={'flex mb-2'}>
                <BiDumbbell className={'p-0 text-head-4 mr-3'}/>
                <span className={'text-sub-head-2 font-bold font-primary flex text-center pt-2'}>Fitness</span>
            </div>
            <div>
                <span className={'text-sub-head-7 font-secondary'}>
                    Our customer-first approach is geared to fuel
                    fresh narratives about technology. We craft 
                    digital value to help customers worldwide rise 
                    above their competition.
                </span>
            </div>
            <div className={'inline-flex text-head-7  mt-4'}>
                <AiFillFacebook/>
                <AiFillLinkedin/>
            </div>
        </div>
    )
}

export default SubNarrative;
