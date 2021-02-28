import React from 'react';

import '../styles/Inicio.css';

export const Inicio = () => {
    return (
        <>
            <header className="inicio-header">
                <img src="img/seros.svg" alt="Logotipo SEROS" />
                <span className="seros">SEROS</span>
                <span className="title">
                    Herramienta Pedagógica Educativa para Algoritmos y Estructuras de Datos
                </span>
            </header>
            <br />
            <footer className="inicio-footer">
                <span>
                    Herramienta Pedagógica Educativa para Algoritmos y Estructuras de Datos
                </span>
            </footer>
        </>
    )
}
