import * as React from 'react';
import LoginForm from './login/LoginForm';
import DesignMain from './design/DesignMain';
import Header from './Header';
import '../css/Main.css';



class Main extends React.Component {
    readonly state = {
        isLoggedIn: false,
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.setState({
            isLoggedIn: true,
        })
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