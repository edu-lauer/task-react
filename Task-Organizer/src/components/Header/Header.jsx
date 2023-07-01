import React from "react"
import './header.scss'

const Header = () => {
    return (
        <>
            <div className="header">
                <ul className="header__list">
                    <li className="header__list-item"><a className="header__list-item-link" href="">Organização</a></li>
                    <li className="header__list-item"><a className="header__list-item-link" href="">Tarefas</a></li>
                </ul>
            </div>
            <div>
                <h1 className="title">Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
            </div>
        </>
    )
}

export default Header