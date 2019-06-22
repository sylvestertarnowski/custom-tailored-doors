import * as React from 'react';
import '../../css/LoadingBar.css';
import { MyContext } from '../Context';

class LoadingBar extends React.Component {
    render() {
        return (
            <div className="loading-bar-container">
                <MyContext.Consumer>
                    {(context) => {
                        const loading = context.state[context.state.lang].loading;
                        return (
                            <div className="content-container">
                                <div className="loading-message">{loading.message}</div>
                                <div className="loading-progress-bar"></div>
                            </div>
                        )
                    }}
                </MyContext.Consumer>

            </div>
        )
    }
}

export default LoadingBar;