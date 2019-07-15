import * as React from 'react';
import '../../css/design/DesignMain.css';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ScreenThree from './screens/ScreenThree';
import DesignNav from './DesignNav';

class DesignMain extends React.Component<any, any> {
    readonly state = {
        currentScreen: 'one', //change to one
        type: 'single',
        width: 120,
        height: 250,
        beams: 4,
        posts: 2,
        color: "black",
    }

    handleNavClick = (e: React.MouseEvent) => {
        const id = e.currentTarget.id;
        this.setState({
            currentScreen: id,
        })
    }

    handleChange = (e: any) => {
        let { name, value } = e.target;
        if (value < 0) {
            value = 0;
            this.setState({
                [name]: value,
            })
            return;
        } else if (value > 300) {
            value = 300;
            this.setState({
                [name]: value,
            })
            return;
        } else {
            this.setState({
                [name]: value,
            })
            return;
        }
    }

    handleIncrement = (e: any) => {
        const { name } = e.target;
        this.setState((state: any) => {
            return {
                [name]: state[name] + 1
            }
        })
    }

    handleDecrement = (e: any) => {
        const { name } = e.target;
        this.setState((state: any) => {
            if(state[name] <= 0) {
                return {
                    [name]: state[name]
                }
            } else {
                return {
                    [name]: state[name] - 1
                }
            }
        })
    }

    nextStep = () => {
        const { currentScreen } = this.state;
        if (currentScreen === 'one') {
            this.setState({
                currentScreen: 'two',
            })
        } else if (currentScreen === 'two') {
            this.setState({
                currentScreen: 'three',
            })
        }
    }

    prevStep = () => {
        const { currentScreen } = this.state;
        if (currentScreen === 'two') {
            this.setState({
                currentScreen: 'one',
            })
        } else if (currentScreen === 'three') {
            this.setState({
                currentScreen: 'two',
            })
        }
    }

    componentDidUpdate() {

    }

    render() {
        const { currentScreen } = this.state;
        let screen: React.ReactNode;
        if (currentScreen === 'one') {
            screen = <ScreenOne
                handleChange={this.handleChange}
                doorData={this.state}
                currentScreen={currentScreen}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
            />
        } else if (currentScreen === 'two') {
            screen = <ScreenTwo
                handleIncrement={this.handleIncrement}
                handleDecrement={this.handleDecrement}
                doorData={this.state}
                currentScreen={currentScreen}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
            />
        } else if (currentScreen === 'three') {
            screen = <ScreenThree
                doorData={this.state}
                currentScreen={currentScreen}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
            />
        }

        return (
            <div className="design-main-container">
                <div className="design-navigation">
                    <DesignNav
                        currentScreen={currentScreen}
                        handleClick={this.handleNavClick}
                    />
                </div>
                <div className="design-screen-container">
                    {screen}
                </div>
            </div>
        )
    }
}

export default DesignMain;