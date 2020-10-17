import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

export const Menu = () => {
    return (
        <div>
            <nav className = "nav-area">
                <h3><strong>Doc-App</strong></h3>
                <ul className = "nav-links">
                    <Link to = "/doctor-list">
                        <li className = "doctor-list">Doctor List</li>
                    </Link>
                    <Link to = "/add-doctor">
                        <li className = "add-doctor">Add Doctor</li>
                    </Link>
                    <Link to = "/newly-added-doctors">
                        <li className = "newly-added-doctors">New Added Doctor</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
