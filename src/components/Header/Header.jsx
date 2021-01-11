import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png" />

            <div className={}>
                {props.isAuth 
                    ? props.login 
                    : <NavLink to={"/login"}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;