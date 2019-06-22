import * as React from 'react';
import LoginForm from './login/LoginForm';
import DesignMain from './design/DesignMain';
import Header from './Header';
import '../css/Main.css';
import LoginError from './login/LoginError';
import { MyContext } from './Context';



class Main extends React.Component {
    static contextType = MyContext;
    readonly state = {
        isLoggedIn: false,
        transition: false,
    }

    sendLoginCredentials = async (event: any): Promise<Response> => {
        const email: string = event.target.email.value;
        const password: string = event.target.password.value;
        const loginData = {
            email: email,
            password: password
        }

        const loginUrl = 'https://bench-api.applover.pl/api/v1/login';

        return await fetch(loginUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Host": "example.org"
            },
            body: JSON.stringify(loginData)
        })
    }

    checkIfLoginIsCorrect = async (event: any): Promise<boolean> => {     
        let response = await this.sendLoginCredentials(event)
        .then(res => res.json())
        .then(res => {
            if (res.status === "200 OK") {
                console.log(res.status);
                return true;
            } else {
                console.log(res.status);
                return false;
            }
        })
        return response;
    }

    handleSubmit = async (event: any) => {
        event.preventDefault();
        let check = await this.checkIfLoginIsCorrect(event);
        console.log(check);
        check ?
        this.setState({
            isLoggedIn: true,
        }) : this.context.toggleLoginError();
        
    }

    render() {
        const { displayLoginError } = this.context.state;
        return (
            <div className="main-container">
            <Header />
            {displayLoginError && <LoginError />}
            {this.state.isLoggedIn ? <DesignMain /> : <LoginForm handleSubmit={this.handleSubmit} /> }
            </div>
        )
    }
}

export default Main;