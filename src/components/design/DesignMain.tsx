import * as React from 'react';
import DesignNavButton from './DesignNavButton';
import '../../css/design/DesignMain.css';
import PrevNextButton from './PrevNextButton';

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
        return (
            <div className="design-main-container">
                <div className="design-navigation">
                    <DesignNavButton active={this.state.currentScreen} id="one" handleClick={this.handleClick} />
                    <DesignNavButton active={this.state.currentScreen} id="two" handleClick={this.handleClick} />
                    <DesignNavButton active={this.state.currentScreen} id="three" handleClick={this.handleClick} />
                </div>
                <div className="design-screen-container">
                    <div className="design-canvas">{this.state.currentScreen}</div>
                    <div className="design-data-inputs">
                        <PrevNextButton direction="prev" handleClick={this.prevStep} />
                        <PrevNextButton direction="next" handleClick={this.nextStep} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignMain;