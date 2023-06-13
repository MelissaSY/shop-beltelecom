import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav>
                <NavLink to='/'>
                    <img src='/BELTELECOMshop_logo.png' alt='main' />
                </NavLink>
                <ul>
                    <li>
                        <NavLink to='/'>
                            главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop-info'>
                            о магазине
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacts'>
                            контакты
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart'>
                            корзина
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header