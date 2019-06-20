import * as React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './login/LoginForm';
import LoginScreen from './login/LoginScreen';



class Main extends React.Component {
    routing = (
        <Router>
            <div>
                <Route exact path="/" component={LoginForm} />
                <Route path="/door-design" component={LoginScreen} />
            </div>
        </Router>
    )
    render() {
        return (
            <div>
            <div>Hello World!</div>
            {this.routing}
            </div>
        )
    }
}

export default Main;