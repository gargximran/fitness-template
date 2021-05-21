import React, {useRef} from "react";
import {NavLink} from "react-router-dom";


import {BiMenu} from 'react-icons/bi'

import './SubNav.css'

const SubNav = () => {
    const menu = useRef(null)

    const hideMenu = () => {
        menu.current.classList.add('-left-full')
    }

    const showMenu = () => {
        menu.current.classList.remove('-left-full')
        menu.current.classList.add('left-0')
    }
    return (
        <>
            <div ref={menu} className={'nav-wrapper'}>
                <div onClick={hideMenu} className={'nav-click-layer'}></div>
                <ul className={'nav-menu-ul'}>
                    <li onClick={hideMenu} className={'header-nav-menu'}>
                        <NavLink activeClassName="text-medium text-primary font-bold" exact to={'/'}>Home</NavLink>
                    </li>
                    <li onClick={hideMenu} className={'header-nav-menu'}>
                        <NavLink activeClassName="text-medium text-primary font-bold" exact to={'/schedule'}>Schedule</NavLink>
                    </li>
                    <li onClick={hideMenu} className={'header-nav-menu'}>
                        <NavLink activeClassName="text-medium text-primary font-bold" exact to={'/blog'}>Blog</NavLink>
                    </li>
                    <li onClick={hideMenu} className={'header-nav-menu'}>
                        <NavLink activeClassName="text-medium text-primary font-bold" exact to={'/about'}>About us</NavLink>
                    </li>
                    <li onClick={hideMenu} className={'header-nav-menu'}>
                        <NavLink activeClassName="text-medium text-primary font-bold" exact to={'/contact'}>Contact us</NavLink>
                    </li>
                </ul>

            </div>
            <div onClick={showMenu} className={'nav-trigger-icon'}><BiMenu size={'28'} color={'white'}/></div>
        </>
    )
}

export default SubNav