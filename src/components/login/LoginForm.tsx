import * as React from 'react';

const LoginForm: React.FC = (props) => {

    return (
        <form>
            <input type="text" id="email" name="email" />
            <input type="password" id="password" name="password" />
            <input type="checkbox" id="remember-login" /><label htmlFor="remember-login">Keep me logged in</label>
            <button>Login</button>
        </form>
    )

}

export default LoginForm;