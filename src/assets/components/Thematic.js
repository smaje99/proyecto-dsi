import React from 'react'
import { useLocation } from 'react-router-dom'

export const Thematic = () => {
    const location = useLocation().pathname.split('/')[2]

    return (
        <div>
            <span>Thematic: { location }</span>
        </div>
    )
}
