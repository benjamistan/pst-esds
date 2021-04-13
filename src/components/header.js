import React from 'react';
import icon from '../assets/icon.png';

const Header = () => {
    return (
        <div className="App-header">
            <img src={icon} alt="icon" />
            <h1>Emergency Services Document Store (ESDS)</h1>
        </div>
    );
};

export default Header;