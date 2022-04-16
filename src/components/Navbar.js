import React from "react";
import './Navbar.css';
import { Link, useParams } from 'react-router-dom';

const NavLink = ({ page, selected }) => {
    const title = page.charAt(0).toUpperCase() + page.slice(1);
    // let className = selected ? 'navlink-no-link ' : '';
    let className = 'navlink-title';

    return (
        <Link to={`/${page}`} className={className}>
            {selected ? 'True' : 'False'}
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
            <NavLink page='home' selected={page === 'home'} />
            <NavLink page='under-the-button' selected={page === 'under-the-button'} />
            <NavLink page='contact' selected={page === 'contact'} />
        </nav>
    );
};

export default Navbar;