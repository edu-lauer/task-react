import React from "react"
import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <ul className="header__list">
                <li className="header__list-item"><a className="header__list-item-link" href="">Organização</a></li>
                <li className="header__list-item"><a className="header__list-item-link" href="">Tarefas</a></li>
            </ul>
        </div>
    )
}

export default Header