import * as React from 'react';
import PrevNextButton from '../PrevNextButton';

class ScreenOne extends React.Component<any,any> {
    render() {
        const { currentScreen, prevStep, nextStep } = this.props;

        return (
            <React.Fragment>
                <div className="design-canvas">{currentScreen}</div>
                <div className="design-data">
                    <div className="data-inputs">
                        INPUTS
    
                        </div>
                    <div className="data-input-navigation">
                        <PrevNextButton direction="prev" handleClick={prevStep} />
                        <PrevNextButton direction="next" handleClick={nextStep} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ScreenOne;