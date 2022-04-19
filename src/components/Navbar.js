import React from "react";
import './Navbar.css';
import { Link, useParams } from 'react-router-dom';

const NavLink = ({ page, selected }) => {
    const title = page.split('-').join(' ');
    // let className = selected ? 'navlink-no-link ' : '';
    let className = 'navlink-title';

    return (
        <Link to={`/${page}`} className={className} id={page}>
            {title}
            <div className={selected ? 'navlink-dot-active' : 'navlink-dot'}>
                •
            </div>
        </Link>
    );
};


const Navbar = () => {
    const page = useParams().page || 'home';

    return (
        <nav>
            <NavLink page='home' selected={page === 'home'} style="background-color:red;"/>
            <NavLink page='class-x' />
            <NavLink page='wrapped' />
            <NavLink page='under-the-button' selected={page === 'under-the-button'} />
            <NavLink page='confessions' selected={page === 'confessions'} />
        </nav>
    );
};

export default Navbar;