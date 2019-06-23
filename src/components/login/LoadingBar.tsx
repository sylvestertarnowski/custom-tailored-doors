import * as React from 'react';
import '../../css/LoadingBar.css';
import { MyContext } from '../Context';

interface S {
    width: number;
}

class LoadingBar extends React.Component<any, S> {
    readonly state = {
        width: 0,
    }

    interval: any;

    handleClick = () => {
        let counter = 0;
        this.interval = setInterval(() => {
            this.setState((state) => {
                if(counter === 99) {
                    clearInterval(this.interval);
                }
                counter++;
                return {width: state.width + 1}
            })
        }, 20)
    }

    componentDidMount() {
        this.handleClick();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="loading-bar-container">
                <MyContext.Consumer>
                    {(context) => {
                        const loading = context.state[context.state.lang].loading;
                        return (
                            <div className="content-container">
                                <div className="loading-message">{loading.message}</div>
                                <div className="loading-progress-bar">
                                    <div 
                                        className="progress-fill"
                                        style={{
                                            width: `${this.state.width}%`
                                        } as React.CSSProperties}
                                    >
                                        <span>{this.state.width}%</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }}
                </MyContext.Consumer>

            </div>
        )
    }
}

export default LoadingBar;