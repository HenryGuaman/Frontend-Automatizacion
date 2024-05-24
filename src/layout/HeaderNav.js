import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <span>R</span>
                <h3>Registro Incidentes WEB</h3>

            </div>

            <nav>
                <ul>
                    <li>
                        <NavLink to='/inicio' className={({isActive})=> isActive ? "active" : ""} >Registro Incidentes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/incidentes' className={({isActive})=> isActive ? "active" : ""} >Incidentes Ingresados</NavLink>
                    </li>
                    <li>
                        <NavLink to='/pendientes' className={({isActive})=> isActive ? "active" : ""} >Incidentes Pendientes</NavLink>
                    </li>
                    <li>
                        <NavLink to='/atencion' className={({isActive})=> isActive ? "active" : ""} >Registrar a Atendidos</NavLink>
                    </li>
                    <li>
                        <NavLink to='/mis-incidentes' className={({isActive})=> isActive ? "active" : ""} >Incidentes Atendidos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
