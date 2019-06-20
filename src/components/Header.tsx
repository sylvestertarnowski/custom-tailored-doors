import * as React from 'react';
import logo from '../img/Logo.png';
import '../css/Header.css';
import { MyContext } from './Context';

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="header-width-wrapper">
                    <img src={logo} alt="applover" />
                    <MyContext.Consumer>
                        {(context) => {
                            const header = context.state[context.state.lang].header;
                            const nextLang = context.state.lang === "en" ? "pl" : "en";
                            return (
                                <div className="select">
                                    <label htmlFor="lang">
                                        {header.language}
                                    </label>
                                    <select
                                        id="lang"
                                        name="lang"
                                        value={context.state.lang}
                                        onChange={context[nextLang]} 
                                    >
                                        <option value="en">English</option>
                                        <option value="pl">Polski</option>
                                    </select>
                                </div>
                            )
                        }}
                    </MyContext.Consumer>
                </div>
            </div>
        )
    }
}

export default Header;