import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    
    return (
        <header>
            <nav>
                <NavLink to='/shop-beltelecom/'>
                    <img src='/shop-beltelecom/BELTELECOMshop_logo.png' alt='main' />
                </NavLink>
                <ul>
                    <li>
                        <NavLink to='/shop-beltelecom/'>
                            главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop-beltelecom/shop-info'>
                            о магазине
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop-beltelecom/contacts'>
                            контакты
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop-beltelecom/cart'>
                            корзина
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header