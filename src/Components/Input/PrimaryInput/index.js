import {useRef} from 'react'

import './style.css'


const PrimaryInput = ({onChange, label, name}) => {
    const inputField = useRef(null)

    const changePostisionLabel = e => {
        e.target.previousSibling.classList.remove('top-7', 'pl-0', 'text-paragraph')
        e.target.previousSibling.classList.add('text-paragraph-sm', 'top-1', 'pl-1')

    };

    const changePositionLavelOnBlur = e => {
        if(!e.target.value){
            e.target.previousSibling.classList.remove('top-1', 'pl-1', 'text-paragraph-sm')

            e.target.previousSibling.classList.add('text-paragraph', 'top-7', 'pl-0')

        }
    }

    const clickOnSection = () => {
        inputField.current.focus()
    }

    return (
        <div className="w-full relative font-secondary text-white" onClick={clickOnSection}>
            <label className={'primaryInputFieldLabel top-7 pl-0  w-full text-paragraph'}>{label}</label>
            <input name={name} onChange={e => onChange && onChange(e)} ref={inputField} onFocus={changePostisionLabel} onBlur={changePositionLavelOnBlur} type="text" className="primaryInputField w-full"/>
        </div>
    )
};


export default PrimaryInput;