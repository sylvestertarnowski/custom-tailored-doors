import * as React from 'react';
import '../../css/design/DesignMain.css';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ScreenThree from './screens/ScreenThree';
import DesignNav from './DesignNav';

class DesignMain extends React.Component<any, any> {
    readonly state = {
        currentScreen: 'two', //change to one
        type: 'single',
        width: 120,
        height: 250,
        beams: 4,
        posts: 2,
        colorValue: "black",
        black: "rgba(0, 0, 0, 1)",
        grey: "rgba(121, 116, 116, 1)",
        white: "rgba(244, 242, 242, 1)",
    }

    handleClick = (e: React.MouseEvent) => {
        const id = e.currentTarget.id;
        this.setState({
            currentScreen: id,
        })
    }

    handleChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
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
            return {
                [name]: state[name] - 1
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
            />
        }

        return (
            <div className="design-main-container">
                <div className="design-navigation">
                    <DesignNav
                        currentScreen={currentScreen}
                        handleClick={this.handleClick}
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