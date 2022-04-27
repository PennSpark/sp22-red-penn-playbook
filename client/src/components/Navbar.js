import React from "react";
import './Navbar.css';
import { Link, useParams } from 'react-router-dom';

const NavLink = ({ page, title, selected }) => {
    // let className = selected ? 'navlink-no-link ' : '';
    let className = 'navlink-title';

    return (
        <Link to={`/about/${page}`} className={className} id={page}>
            {title}
        </Link>
    );
};


const Navbar = () => {
    const page = useParams().page || 'home';

    return (
        <nav>
            <NavLink page='penn-playbook' title='About' selected={page === 'home'}/>
            <NavLink page='class-x' title='Class X'/>
            <NavLink page='penn-wrapped' title='Penn Wrapped'/>
            <NavLink page='under-the-button' title='By the Button' selected={page === 'under-the-button'} />
            <NavLink page='penn-in-touch' title='Penn in Touch' selected={page === 'confessions'} />
        </nav>
    );
};

export default Navbar;