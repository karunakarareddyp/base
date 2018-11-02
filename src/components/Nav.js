import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
        </ul>

    </nav>
);

export default connect(state => state)(Nav);
