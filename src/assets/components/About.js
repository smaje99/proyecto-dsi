import React from 'react'

import { Card } from './inicio/Card'

import { version } from '../../info'

import '../styles/About.css'


export const About = () => {
    return (
        <div className="about">
            <header className="about-header">
                <img src="img/seros.svg" alt="Logotipo SEROS" />
                <span className="seros">SEROS</span>
                <span className="title">
                    Herramienta Pedagógica Educativa para<br />Algoritmos y Estructuras de Datos
                </span>

                <div className="about-info">
                    <a href="https://github.com/smaje99/proyecto-dsi" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://github.com/smaje99/proyecto-dsi/wiki" target="_blank" rel="noreferrer">Manual</a>
                    <span>Versión { version }</span>
                </div>
            </header>

            <section className="about-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean rutrum volutpat sagittis. Mauris nec bibendum tellus.
                    Maecenas id nibh quis purus condimentum dignissim. Cras risus
                    elit, viverra ut elementum non, bibendum quis nulla. Praesent
                    quis ipsum augue. Fusce sodales, quam malesuada maximus
                    imperdiet, nulla arcu sodales dui, at suscipit est orci ut
                    ipsum. Nunc maximus euismod lorem non ornare. In hac habitasse
                    platea dictumst. Duis id nisi augue.<br /><br />

                    Phasellus semper, justo in hendrerit dapibus, arcu augue lacinia
                    ante, vel efficitur nisl libero non orci. Vivamus sed tristique
                    urna, vel elementum arcu. In aliquet eget magna fringilla tempor.
                    Suspendisse porttitor sodales augue, aliquam pulvinar eros
                    sollicitudin in. Cras ac massa sed quam rhoncus dictum. Integer
                    eget dolor elementum, laoreet leo in, ornare quam. Nam dolor diam,
                    condimentum a facilisis ac, convallis eget ipsum.<br /><br />

                    Etiam pulvinar, sapien non sagittis bibendum, lacus orci mattis
                    metus, eget aliquet metus augue vitae nibh. Duis magna risus,
                    pulvinar quis augue sit amet, dictum sodales libero. Sed nec porta
                    eros, eu porttitor lectus. Aliquam at diam eros. Donec vehicula
                    luctus dolor eget interdum. Etiam at nisi dignissim, lacinia augue
                    a, sollicitudin purus. Vestibulum consequat viverra posuere. Cras
                    consectetur augue ut pulvinar suscipit. Maecenas vestibulum ipsum
                    in rutrum egestas. Aliquam erat volutpat. Nam condimentum porttitor
                    mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Aliquam vestibulum dictum nisi eu tempus. Cras euismod erat vel semper
                    hendrerit. Quisque in velit in ipsum placerat ullamcorper egestas
                    eget urna.
                </p>
            </section>

            <side className="staff">
                <Card
                    name="Sergio Majé"
                    icon="img/contri/smaje99.png"
                    description="Analista, diseñador y programador."
                />
                <Card
                    name="Jhonatan"
                    icon="img/contri/jhonatan.png"
                    description="Diseñador."
                />
            </side>
        </div>
    )
}
