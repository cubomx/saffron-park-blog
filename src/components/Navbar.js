import React from 'react';
import './styles/Navbar.css';
import Logo from '../img/logo.png';
import {Menu} from '@material-ui/icons';

const Navbar = () => {
    return (
        <div className='Navbar'>
                <img className='Navbar__Logo' src={Logo} alt='Logo' />
                <div className='Navbar__Title'>
                    <h1>Saffron Park Society</h1>
                </div>
                <button className="Navbar__Menu">
                <Menu  style={{fontSize: 25}} />
                </button>
                

            
        </div>
    );
}

export default Navbar;