import React from "react";
import SubNarrative from './SubNarrative';
import SubContact from './SubContact';
import SubLegalLinks from './SubLegalLinks';
import {MdCopyright} from 'react-icons/md';

const Footer = () => {
    return (
        <div className={'bg-footer'}>
            <div className={'container mx-auto p-10'}>
                <div className={'grid grid-cols-1 md:grid-cols-4 text-white'}>
                    <div className={'col-span-1 md:col-span-2'}>
                        <SubNarrative className={'pr-5 pl-5 my-5 md:my-0 md:pl-0 md:pr-20'}/>
                    </div>
                    <div className={'col-span-1'}>
                        <SubLegalLinks className={'pr-5 pl-5 my-3 md:my-0 md:pl-0'}/>
                    </div>
                    <div className={'col-span-1'}>
                        <SubContact className={'pr-5 pl-5 my-3 md:my-0 md:pl-0'}/>
                    </div>
                </div>
            </div>
            <div className={'flex justify-center pt-10'}>
                <div className={'border-red-lite border-t w-3/5 '}></div>
            </div>
            <div className={'flex justify-center ml-12 sm:ml-0  pt-2 pb-10'}>
                <MdCopyright className={'text-red-lite mt-1 mr-1'}/>
                <div className={'text-red-lite'}>AlgoSolver Consulting Corp. All right reserved 2021</div>
            </div>

        </div>
    );
};

export default Footer;
