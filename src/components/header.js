import React from 'react';
import icon from '../assets/icon.png'


const Header = () => {
    return (
        <div class="ui fixed inverted menu">
            <div class="ui container">
                <a href="#" class="header item"><img class="logo" src={icon} />Emergency Sevices Document Store</a>
                <a href="#" class="item">Home</a>
            <div class="ui simple dropdown item">
                Dropdown <i class="dropdown icon"></i>
                <div class="menu">
                    <a class="item" href="#">Link Item</a>
                    <a class="item" href="#">Link Item</a>
                    <a class="item" href="#">Link Item</a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;