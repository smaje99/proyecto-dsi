import React from 'react'

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
                    <button>Ver más</button>
                </div>
            </div>
        </div>
    )
}
