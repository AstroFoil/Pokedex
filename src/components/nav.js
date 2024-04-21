import React from "react";
import {Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/testPoke"> Home </Link></li>
                <li><Link to="/about"> About </Link></li>
                <li><Link to="/contactpage"> Contact Page </Link></li>
                <li><Link to="/pokedexfile"> Pokedex </Link></li>

            </ul>
        </nav>
    );
};
export default Nav;