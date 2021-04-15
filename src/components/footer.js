import React from 'react';
import logo from '../assets/PST-logo-bw.png'

const Footer = () => {
    return (
        <div class="ui inverted vertical footer segment">
            <div class="ui center aligned container">
                    <img src={logo} class="ui centered medium image" />
                    <div class="ui horizontal inverted small divided link list">
                        <a class="item" href="mailto:info@peterstanleytraining.com">Email Us</a>
                        <a class="item" href="https://peterstanleytraining.com">Home</a>    
                    </div>
                    <div class="disabled item">&copy;{(new Date().getFullYear())} Peter Stanley Training Ltd</div>
            </div>
        </div>
    );
};

export default Footer;