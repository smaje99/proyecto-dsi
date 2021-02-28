import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import '../styles/NavBar.css'

export const NavBar = () => {
    const [location, setLocation] = useState('inicio');

    return (
        <nav className="navbar">
            <Link className="nav-logo" to="/">
                <img src="img/seros.svg" alt="Logotipo SEROS" />
            </Link>
            <ul className="navbar-menu">
                <li className={ location === 'inicio' ? 'selected' : ''}>
                    <Link
                        className="nav-link"
                        to="/"
                        onClick={ e => setLocation('inicio') }>
                        Inicio
                    </Link>
                </li>
                <li className={ location === 'notas' ? 'selected' : ''}>
                    <Link
                        className="nav-link"
                        to="/notas"
                        onClick={ e => setLocation('notas') }>
                        Notas
                    </Link>
                </li>
                <li className={ location === 'acerca' ? 'selected' : ''}>
                <Link
                        className="nav-link"
                        to="/acerca"
                        onClick={ e => setLocation('acerca') }>
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
