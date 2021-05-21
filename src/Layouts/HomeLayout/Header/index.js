import React from "react";
import SubNav from "./SubNav";
import {BiDumbbell} from "react-icons/bi";

const index = () => {
    return (
        <div className={'absolute top-0 left-0 w-full flex justify-between z-30'}>
            <div className={'flex items-center pl-1 md:pl-4'}>
                <h2 className={'text-white flex items-center'}><BiDumbbell size={60} className={'hidden md:flex'}/>
                    <BiDumbbell size={32} className={'md:hidden'}/> <span
                        className={'pl-1 md:pl-3 md:font-bold font-primary text-sub-head-6 md:text-sub-head-2 font-medium tracking-wider'}>FITNESS</span>
                </h2>
            </div>
            <div className={''}>
                <SubNav />
            </div>
        </div>
    );
};

export default index;
