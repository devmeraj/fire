import React from 'react';

import {auth} from '../../firebase/firebase.utiles';
import './header.styles.scss';

const Header = ({user}) => (
    <div className="header">
        <div className="logo">Authentication</div>
        <nav>
           {user ? (<span onClick={() => { auth.signOut()}}> Sign Out</span>) :('Not Signed In')}   
        </nav>
    </div>
);

export default Header;