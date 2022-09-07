import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    const [navName, setNavName] = useState('navbar-menu');

    return (
        <nav className="navbar is-dark" style={{ position: 'sticky', top: '0' }}>
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="signaturefill.png" alt="" width="30" height="30" color="#fff" />
                </a>
                <div className="navbar-burger" id='burger' data-target="navbarMenu" aria-label="menu" aria-expanded="false"
                    onClick={() => {
                        if (navName === "navbar-menu") {
                            setNavName('navbar-menu is-active')
                        } else {
                            setNavName('navbar-menu')
                        }
                    }
                    }>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div id="navbarMenu" className={navName}>
                <div className="navbar-start">
                    <Link to='/' className="navbar-item">Home</Link>
                    <Link to='/journal' className="navbar-item">View Journal</Link>
                    <Link to='/about' className="navbar-item">About</Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <Link to='/entry' className="button is-warning">
                                    <span className="icon">
                                        <i className="fas fa-edit"></i>
                                    </span>
                                    <span>New Entry</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;