import React from 'react';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { AiTwotonePhone, AiFillFacebook, AiFillLinkedin, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

const SubContactInfo = () => {
    return (
        <div className={'bg-darker-chocolate my-10 lg:pb-24'}>
            <div className={'mx-10 pb-10 pt-5'}>
                <div className={'text-sub-head-4 my-10'}>Contact Info</div>
                <div className={'flex text-sub-head-7 my-5'}>
                    <MdLocationOn className={'text-sub-head-3 mr-2 pt-1'}/>
                    <span>50 Carroll St, Toronto,
                    ON M4M 3G3, Canada</span>
                </div>
                <div className={'flex text-sub-head-7 my-5'}>
                    <MdLocationOn className={'text-sub-head-3 mr-2 pt-1'}/>
                    50/6 Shah Shuja Road,
                    Dhanmondi, Dhaka, Bangladesh
                </div>
                <div className={'flex my-5'}>
                    <AiTwotonePhone className={'text-sub-head-5 mr-1 pt-1'}/>+1 (347) 306-5628
                </div>
                <div className={'flex my-5'}> <MdEmail className={'text-sub-head-5 mr-2 pt-1'} />info@algosolver.com</div>
                <div className={'flex text-sub-head-1'}>
                    <AiFillFacebook className={'mr-3'} />
                    <AiOutlineInstagram className={'mr-3'} />
                    <AiFillLinkedin className={'mr-3'} />
                    <AiOutlineWhatsApp className={'mr-3'} />
                </div>
            </div>
        </div>
    )
}

export default SubContactInfo;
