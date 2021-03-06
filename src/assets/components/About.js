import React from 'react'

import '../styles/About.css'


export const About = () => {
    return (
        <>
            <header className="about-header">
                <img src="img/seros.svg" alt="Logotipo SEROS" />
                <span className="seros">SEROS</span>
                <span className="title">
                    Herramienta Pedagógica Educativa para Algoritmos y Estructuras de Datos
                </span>
            </header>

            <section className="about-description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean rutrum volutpat sagittis. Mauris nec bibendum tellus.
                    Maecenas id nibh quis purus condimentum dignissim. Cras risus
                    elit, viverra ut elementum non, bibendum quis nulla. Praesent
                    quis ipsum augue. Fusce sodales, quam malesuada maximus
                    imperdiet, nulla arcu sodales dui, at suscipit est orci ut
                    ipsum. Nunc maximus euismod lorem non ornare. In hac habitasse
                    platea dictumst. Duis id nisi augue.

                    Phasellus semper, justo in hendrerit dapibus, arcu augue lacinia
                    ante, vel efficitur nisl libero non orci. Vivamus sed tristique
                    urna, vel elementum arcu. In aliquet eget magna fringilla tempor.
                    Suspendisse porttitor sodales augue, aliquam pulvinar eros
                    sollicitudin in. Cras ac massa sed quam rhoncus dictum. Integer
                    eget dolor elementum, laoreet leo in, ornare quam. Nam dolor diam,
                    condimentum a facilisis ac, convallis eget ipsum.

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

            <section className="staff">
                {/* <!-- card staff section --> */ }
            </section>

            <footer>
                <a href="https://github.com/smaje99/proyecto-dsi" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://github.com/smaje99/proyecto-dsi/wiki" target="_blank" rel="noreferrer">Manual</a>
                <span>Version 0.2.0</span>
            </footer>
        </>
    )
}
