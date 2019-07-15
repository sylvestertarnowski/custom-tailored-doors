import * as React from 'react';
import LoginForm from './login/LoginForm';
import DesignMain from './design/DesignMain';
import Header from './Header';
import '../css/Main.css';
import LoginError from './login/LoginError';
import { MyContext } from './Context';
import LoadingBar from './login/LoadingBar';



class Main extends React.Component {
    static contextType = MyContext;
    readonly state = {
        isLoggedIn: false,
        transition: false,
        rememberLogin: false,
    }

    componentDidMount = () => {
        const localLoginStatus = localStorage.getItem('rememberLogin');
        if (localLoginStatus === 'true') {
            this.setState({
                isLoggedIn: true,
            })
        }
    }

    componentDidUpdate = () => {
        const { rememberLogin } = this.state;
        if (rememberLogin) {
            localStorage.setItem('rememberLogin', 'true');
        }
    }

    sendLoginCredentials = async (event: any): Promise<boolean> => {
        const email: string = event.target.email.value;
        const password: string = event.target.password.value;
    
        return await new Promise( (resolve, reject) => {
            setTimeout(() => {
                if(email && password) {
                    resolve(true)
                } else reject(false)
            }, 2000)
        })
    }

    checkIfLoginIsCorrect = async (event: any): Promise<boolean> => {     
        let response = await this.sendLoginCredentials(event)
        .then(res => {
            if (res) {
                return true;
            } else {
                return false;
            }
        })
        return response;
    }

    handleSubmit = async (event: any) => {
        event.preventDefault();
        const rememberLogin: boolean = event.target.remember.checked;
        this.context.toggleTransition();
        let check = await this.checkIfLoginIsCorrect(event);
        check ?
        this.setState({
            isLoggedIn: true,
            rememberLogin: rememberLogin,
        }, () => this.context.toggleTransition(this.context.clearLoginError())) : 
        this.context.toggleLoginError(this.context.toggleTransition());
    }

    render() {
        const { displayLoginError, transition } = this.context.state;
        return (
            <div className="main-container">
            <Header />
            {displayLoginError && <LoginError />}
            {transition && <LoadingBar />}
            {this.state.isLoggedIn ? <DesignMain /> : <LoginForm handleSubmit={this.handleSubmit} /> }
            </div>
        )
    }
}

export default Main;