import * as React from 'react';
import logo from '../img/Logo.png';
import '../css/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-width-wrapper">
                    <img src={logo} alt="applover" />
                    <div className="select">
                        <label htmlFor="lang">
                            Select language:
                        </label>
                        <select id="lang">
                            <option value="en">English</option>
                            <option value="pl">Polski</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;