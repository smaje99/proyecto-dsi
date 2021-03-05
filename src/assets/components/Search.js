import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import '../styles/Search.css'


export const Search = () => {
    const [active, setActive] = useState(false)
    const [query, setQuery] = useState('')

    const activeBar = () => { setActive(!active) }

    return (
        <div className={ active ? 'bar' : 'icon'}>
            {active &&
                <input
                    id="search"
                    type="text"
                    onChange={ e => setQuery(e.target.value) }
                    onBlur={ activeBar }
                />
            }
            <label for="search" onClick={ activeBar }>
                <FontAwesomeIcon icon={ faSearch } />
            </label>
        </div>
    )
}
