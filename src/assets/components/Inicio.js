import React from 'react';

import { Group } from './inicio/Group'

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

            <section className="groups">
                <Group name="introduction" title="Introducción" />
                <Group name="algorithms" title="Algoritmos" />
                <Group name="lineal" title="Estructura de Datos Lineales" />
                <Group name="no-lineal" title="Estructura de Datos No Lineales" />
            </section>

            <footer className="inicio-footer">
                <span>
                    Herramienta Pedagógica Educativa para Algoritmos y Estructuras de Datos<br />
                    Hecho con &#10084;&#65039; por el equipo <b>SEROS</b>
                </span>
            </footer>
        </>
    )
}
