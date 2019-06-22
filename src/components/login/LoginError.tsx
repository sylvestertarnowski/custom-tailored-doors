import * as React from 'react';
import { MyContext } from '../Context';
import '../../css/LoginError.css';

const LoginError: React.FC = () => {
    return (
        <div className="login-error">
            <MyContext.Consumer>
                {(context) => {
                    return (
                        <div>
                            <span>
                                Invalid email or password
                            </span>
                            <button>
                                X
                            </button>
                        </div>
                    )
                }}
            </MyContext.Consumer>
        </div>
    )
}

export default LoginError;