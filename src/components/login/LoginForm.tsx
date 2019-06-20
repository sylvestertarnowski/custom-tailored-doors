import * as React from 'react';

interface P {
    handleSubmit: (e: any) => void;
}

const LoginForm: React.FC<P> = (props) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="email" name="email" />
            <input type="password" id="password" name="password" />
            <input type="checkbox" id="remember-login" /><label htmlFor="remember-login">Keep me logged in</label>
            <button>Login</button>
        </form>
    )

}

export default LoginForm;