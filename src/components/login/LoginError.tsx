import * as React from 'react';
import { MyContext } from '../Context';
import '../../css/LoginError.css';

const LoginError: React.FC = () => {
    return (
        <div className="login-error-container">
            <MyContext.Consumer>
                {(context) => {
                    return (
                        <div className="login-error-message">
                            <span>
                                Invalid email or password
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