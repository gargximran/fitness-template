import React from 'react'
import PrimaryInput from '../../Components/Input/PrimaryInput'
import { toast } from 'react-toastify';

const SubContactForm = () => {
    return (
        <div>
            <div className={'my-10'}>
                <form>
                    <h2 className={'text-sub-head-4 font-primary mx-5 font-bold'} >Send a message</h2>
                    <div className={'grid grid-cols-12 mx-3 mb-10'}>
                        <div className={'col-span-12 md:col-span-6 mx-3 my-5'}>
                            <PrimaryInput
                                label='First Name'
                            />
                        </div>
                        <div className={'col-span-12 md:col-span-6 mx-3 my-5'}>
                            <PrimaryInput
                                label='First Name'
                            />
                        </div>
                        <div className={'col-span-12 md:col-span-6 mx-3 my-5'}>
                            <PrimaryInput
                                label='Email'
                            />
                        </div>
                        <div className={'col-span-12 md:col-span-6 mx-3 my-5'}>
                            <PrimaryInput
                                label='Phone'
                            />
                        </div>
                        <div className={'col-span-12 mx-3 my-5'}>
                            <PrimaryInput
                                label='Group of Company'
                            />
                        </div>
                        <div className={'col-span-12 mx-3 my-5'}>
                            <h2 className={'mb-5'}>How can we help?</h2>
                            <textarea className={'w-full bg-secondary border-b-2'} />
                        </div>
                    </div>
                    <div className={'flex justify-center'}>
                        <buttom
                            onClick={() => toast.success('Button Clicked', {
                                className: 'toast-success'
                            })}
                            
                            className={'btn-fill-primary px-5 py-1 text-paragraph font-primary cursor-pointer font-semibold'}>
                            Submit
                        </buttom>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SubContactForm;
