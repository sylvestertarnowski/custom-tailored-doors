import * as React from 'react';
import PrevNextButton from '../PrevNextButton';
import { MyContext } from '../../Context';
import '../../../css/design/screens/ScreenThree.css';
import CanvasDrawing from './CanvasDrawing';

class ScreenThree extends React.Component<any, any> {
    render() {
        const { prevStep, nextStep, doorData, handleChange } = this.props;

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
                                const color = context.state[context.state.lang].design.screenThree;
                                return (
                                    <React.Fragment>
                                        <div className="door-color">
                                            <div className="title">{color.title}</div>
                                            <div className="colors-container">
                                                <div className="door-color-item">
                                                    <div className="door-color-circle black"></div>
                                                    <div className="color-circle-options">
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value="black"
                                                            defaultChecked
                                                            onChange={handleChange}
                                                        />
                                                        <span>{color.black}</span>
                                                    </div>
                                                </div>
                                                <div className="door-color-item">
                                                    <div className="door-color-circle gray"></div>
                                                    <div className="color-circle-options">
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value="gray"
                                                            onChange={handleChange}
                                                        />
                                                        <span>{color.gray}</span>
                                                    </div>
                                                </div>
                                                <div className="door-color-item">
                                                    <div className="door-color-circle white"></div>
                                                    <div className="color-circle-options">
                                                        <input
                                                            type="radio"
                                                            name="color"
                                                            value="white"
                                                            onChange={handleChange} />
                                                        <span>{color.white}</span>
                                                    </div>
                                                </div>
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