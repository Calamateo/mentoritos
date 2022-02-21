import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import meteoro from '../global/assets/images/meteorite2.jpg'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={meteoro} alt=""
                        width="50" className="d-inline-block align-text-middle" />
                        Mentoritos</Link>
                    <div className="ms-lg-4">
                        <form className="d-flex">
                            <input className="form-control me-lg-2 form-input rounded-pill" type="search"
                                placeholder="Encontrar un mentor" aria-label="Search" />
                            <button className="btn btn-outline-success rounded-pill" type="submit">Buscar</button>
                        </form>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-lg-end justify-content-sm-start"
                        id="navbarNavAltMarkup">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" href="../../mentorsMenu/html/mentorsMenu.html">mentores</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/aboutUs">sobre nosotros</NavLink>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/mentorsProfile">mi perfil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/singUp' className="btn ms-lg-4 me-lg-3 rounded-pill buttons">crea una cuenta</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">inicia sesión</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar