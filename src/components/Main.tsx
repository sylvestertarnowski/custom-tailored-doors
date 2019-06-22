import * as React from 'react';
import LoginForm from './login/LoginForm';
import DesignMain from './design/DesignMain';
import Header from './Header';
import '../css/Main.css';



class Main extends React.Component {
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

    checkIfLoginIsCorrect = (event: any) => {
        this.sendLoginCredentials(event)
        .then(res => {
            if (res.status === 200) {
                console.log(res.status);
            } else {
                console.log(res.status);
            }
        })
        .catch(err => console.log(err))
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.checkIfLoginIsCorrect(event)
    }

    render() {
        return (
            <div className="main-container">
            <Header />
            {this.state.isLoggedIn ? <DesignMain /> : <LoginForm handleSubmit={this.handleSubmit} /> }
            </div>
        )
    }
}

export default Main;