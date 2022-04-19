import React from 'react';
import './MainLayout.css';

import Navbar from "./Navbar";

const MainLayout = (props) => {
    return (
      <div className="main-layout">
        <div className="main-layout__navbar"><Navbar /></div>
        <div className="main-layout__main-content">{props.children}</div>
      </div>
    );
}

export default MainLayout;