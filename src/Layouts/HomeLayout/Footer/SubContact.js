import React from 'react';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { AiTwotonePhone } from 'react-icons/ai';

const SubContact = ({className}) => {
    return (
        <div className={className}>
            <div className={'text-sub-head-4'}>Contact Us</div>
            <div className={'flex text-sub-head-7 my-1'}>
                <MdLocationOn className={'text-sub-head-3 mr-2 pt-1'}/>
                <span>50 Carroll St, Toronto,
                ON M4M 3G3, Canada</span>
            </div>
            <div className={'flex text-sub-head-7 my-1'}>
                <MdLocationOn className={'text-sub-head-3 mr-2 pt-1'}/>
                50/6 Shah Shuja Road,
                Dhanmondi, Dhaka, Bangladesh
            </div>
            <div className={'flex my-1'}>
                <AiTwotonePhone className={'text-sub-head-5 mr-1 pt-1'}/>+1 (347) 306-5628
            </div>
            <div className={'flex my-1'}> <MdEmail className={'text-sub-head-5 mr-2 pt-1'} />info@algosolver.com</div>
        </div>
    )
}

export default SubContact;
