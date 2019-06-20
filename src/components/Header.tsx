import * as React from 'react';
import logo from '../img/Logo.png';
import '../css/Header.css';

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header-width-wrapper">
                <img src={logo} />
                <div className="select">
                    <label htmlFor="lang">
                        Select language:
                    </label>
                    <select id="lang">
                        <option>English</option>
                        <option>Polski</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header;