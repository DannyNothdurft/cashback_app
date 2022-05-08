import React from 'react'
import { BiMenuAltRight } from "react-icons/bi";

import logo from "../img/logo.png";

function Header() {
  return (
    <header className="App-header">
        <img className='logo' src={logo} alt="App Logo" />
        <BiMenuAltRight className='menu-icon' />
    </header>
  );
}

export default Header;