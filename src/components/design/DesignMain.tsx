import * as React from 'react';
import DesignNavButton from './DesignNavButton';
import '../../css/design/DesignMain.css';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ScreenThree from './screens/ScreenThree';

class DesignMain extends React.Component {
    readonly state = {
        currentScreen: 'one',
    }

    handleClick = (e: React.MouseEvent) => {
        const id = e.currentTarget.id;
        this.setState({
            currentScreen: id,
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
                currentScreen={currentScreen}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
            />
        } else if (currentScreen === 'two') {
            screen = <ScreenTwo 
                currentScreen={currentScreen}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
            />
        } else if (currentScreen === 'three') {
            screen = <ScreenThree 
                currentScreen={currentScreen}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
            />
        }

        return (
            <div className="design-main-container">
                <div className="design-navigation">
                    <DesignNavButton active={currentScreen} id="one" handleClick={this.handleClick} />
                    <DesignNavButton active={currentScreen} id="two" handleClick={this.handleClick} />
                    <DesignNavButton active={currentScreen} id="three" handleClick={this.handleClick} />
                </div>
                <div className="design-screen-container">
                    {screen}
                </div>
            </div>
        )
    }
}

export default DesignMain;