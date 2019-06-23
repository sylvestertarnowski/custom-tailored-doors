import * as React from 'react';
import { MyContext } from '../Context';
import '../../css/design/DesignNavButton.css';

interface P {
    id: 'one' | 'two' | 'three';
    handleClick: (e: any) => void;
    active: string;
}

const DesignNavButton: React.FC<P> = (props) => {
    const active = props.active === props.id ? "active" : null;

    return (
        <div className="design-nav-button-container">
            <div 
                className={`design-nav-button ${active}`}
                id={props.id}
                onClick={props.handleClick}
            />
            <MyContext.Consumer>
                {(context) => {
                    // target translation dynamically, based on ID of the button
                    const btn = context.state[context.state.lang].design.navButtons[props.id];
                    return (
                        <React.Fragment>
                            <div className="design-nav-button-desc">{btn.step}</div>
                            <div className="design-nav-button-desc">{btn.desc}</div>
                        </React.Fragment>
                    )
                }}
            </MyContext.Consumer>
        </div>
    )
}

export default DesignNavButton;