import * as React from 'react';
import PrevNextButton from '../PrevNextButton';

class ScreenThree extends React.Component<any, any> {
    render() {
        const { currentScreen, prevStep, nextStep, doorData } = this.props;

        return (
            <React.Fragment>
                <div className="design-canvas">
                    Screen {currentScreen}
                    <ul>
                        <li>Type: {doorData.type}</li>
                        <li>Width: {doorData.width}</li>
                        <li>Height: {doorData.height}</li>
                        <li>Beams: {doorData.beams}</li>
                        <li>Posts: {doorData.posts}</li>
                        <li>Color: {doorData.colorValue}</li>
                    </ul>
                </div>
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

export default ScreenThree;