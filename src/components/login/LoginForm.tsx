import * as React from 'react';
import { MyContext } from '../Context';
import '../../css/LoginForm.css';

interface P {
    handleSubmit: (e: any) => void;
}

const LoginForm: React.FC<P> = (props) => {
    const { handleSubmit } = props;

    return (

        <div className="login-container">
            <MyContext.Consumer>
                {(context) => {
                    // context will download data for currently selected language
                    const form = context.state[context.state.lang].login;
                    return (
                        <div className="login-form">

                            <div className="login-title">
                                {form.title}
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="login-input-fields">
                                    <input type="text" id="email" name="email" placeholder={form.email} />
                                    <input type="password" id="password" name="password" placeholder={form.password} />
                                </div>
                                <div className="login-checkbox">
                                    <input type="checkbox" id="remember" name="remember" />
                                    <label htmlFor="remember-login">{form.checkbox}</label>
                                </div>
                                <button>{form.button}</button>
                            </form>

                        </div>
                    )
                }}
            </MyContext.Consumer>
        </div>
    )

}

export default LoginForm;