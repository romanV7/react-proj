import React from 'react'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png" />
        </header>
    )
}

export default Header;