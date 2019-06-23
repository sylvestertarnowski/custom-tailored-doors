import * as React from 'react';
import { MyContext } from '../Context';
import '../../css/design/PrevNextButton.css';

interface P {
    direction: 'next' | 'prev';
    handleClick: () => void;
}

const PrevNextButton: React.FC<P> = (props) => {
    return (
        <div 
            className={`nav-${props.direction}-btn`}
            onClick={props.handleClick}
        >
            <MyContext.Consumer>
                {(context) => {
                    const description = context.state[context.state.lang].design.navButtons[props.direction];

                    return (
                        <span>
                            {description}
                        </span>
                    )
                }}
            </MyContext.Consumer>
        </div>
    )
}

export default PrevNextButton;