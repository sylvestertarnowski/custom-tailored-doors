import * as React from 'react';
import PrevNextButton from '../PrevNextButton';
import { MyContext } from '../../Context';
import '../../../css/design/screens/ScreenTwo.css';
import CanvasDrawing from './CanvasDrawing';

class ScreenThree extends React.Component<any, any> {
    render() {
        const { prevStep, nextStep, doorData, handleIncrement, handleDecrement } = this.props;

        return (
            <React.Fragment>
                <div className="design-canvas">
                    <div className="dimension-choice">
                        <div className="three-d">3D</div>
                        <div className="two-d">2D</div>
                    </div>
                    <CanvasDrawing doorData={doorData} />
                </div>
                <div className="design-data">
                    <div className="data-inputs">
                        <MyContext.Consumer>
                            {(context) => {
                                const division = context.state[context.state.lang].design.screenTwo;
                                return (
                                    <React.Fragment>
                                        <div className="door-division">
                                            <div className="title"><span>{division.title}</span></div>
                                            <div className="division-values-container">
                                                <span>{division.beams}</span>
                                                <div className="division-value">{doorData.beams}</div>
                                                <button
                                                    className="division-change-value"
                                                    name="beams"
                                                    onClick={handleIncrement}
                                                >
                                                    +
                                                </button>
                                                <button
                                                    className="division-change-value"
                                                    name="beams"
                                                    onClick={handleDecrement}
                                                >
                                                    -
                                                </button>
                                            </div>
                                            <div className="division-values-container">
                                                <span>{division.posts}</span>
                                                <div className="division-value">{doorData.posts}</div>
                                                <button
                                                    className="division-change-value"
                                                    name="posts"
                                                    onClick={handleIncrement}
                                                >
                                                    +
                                                </button>
                                                <button
                                                    className="division-change-value"
                                                    name="posts"
                                                    onClick={handleDecrement}
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            }}
                        </MyContext.Consumer>
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