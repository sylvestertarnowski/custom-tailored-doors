import * as React from 'react';
import { MyContext } from '../Context';
import '../../css/LoginError.css';

const LoginError: React.FC = () => {
    return (
        <div className="login-error-container">
            <MyContext.Consumer>
                {(context) => {
                    const error = context.state[context.state.lang].error;

                    return (
                        <div className="login-error-message">
                            <span>
                                {error.message}
                            </span>
                            <button
                                className="error-message-button"
                                onClick={context.toggleLoginError}
                            >
                                &times;
                            </button>
                        </div>
                    )
                }}
            </MyContext.Consumer>
        </div>
    )
}

export default LoginError;