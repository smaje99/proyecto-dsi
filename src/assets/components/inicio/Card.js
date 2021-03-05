import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/Card.css'


export const Card = (props) => {
    return (
        <div className="card-content">
            <div className="card">
                <div className="side front">
                    <img src={ props.icon } alt="temática" />
                    <span>{ props.name }</span>
                </div>
                <div className="side back">
                    <p>{ props.description }</p>
                    <Link
                        to={ props.path }
                        className="btn"
                    >
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    )
}
