import React, { useState, useEffect } from 'react'

import { Card } from './Card'

import '../../styles/Group.css'

const API = process.env.SEROS_APP_API

export const Group = (props) => {
    const [group, setGroup] = useState([]);

    const getGroup = async () => {
        const res = await fetch(`${API}/group/${props.name}`);
        const data = await res.json();
        setGroup(data);
    }

    useEffect(() => { getGroup(); }, [])

    return (
        <section className="group-content">
            <h2>{ props.name }</h2>
            <div className="group">
                { group.map((thematic) => (
                    <Card
                        name={ thematic.name }
                        icon={ thematic.icon }
                        description={ thematic.description }
                    />
                )) }
            </div>
        </section>
    );
}
