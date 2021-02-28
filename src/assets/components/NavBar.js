import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import '../styles/NavBar.css'

export const NavBar = () => {
    return (
        <nav className="navbar">
            <Link className="nav-logo" to="/">
                <img src="img/seros.svg" alt="Logotipo SEROS" />
            </Link>
            <ul className="navbar-menu">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Inicio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/notas">
                        Notas
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/acerca">
                        Acerca de
                    </Link>
                </li>
            </ul>
            <ul className="nav-menu-right">
                <li>
                    <FontAwesomeIcon className="nav-link" icon={ faSearch } />
                </li>
            </ul>
        </nav>
    )
}
