import * as React from 'react';
import PrevNextButton from '../PrevNextButton';
import { MyContext } from '../../Context';
import '../../../css/design/screens/ScreenOne.css';

class ScreenOne extends React.Component<any, any> {
    render() {
        const { currentScreen, nextStep, doorData, handleChange } = this.props;

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
                        <MyContext.Consumer>
                            {(context) => {
                                const translations = context.state[context.state.lang].design.screenOne;
                                const { type, size } = translations;

                                return (
                                    <React.Fragment>
                                        <div className="door-type">

                                            <div className="title"><span>{type.title}</span></div>
                                            <div className="door-type-inputs">
                                                <div>
                                                    <input 
                                                        type="radio" 
                                                        value="single" 
                                                        name="type" 
                                                        defaultChecked
                                                        onChange={handleChange}/>
                                                    <span>{type.single}</span>
                                                </div>
                                                <div>
                                                    <input 
                                                        type="radio" 
                                                        value="double" 
                                                        name="type" 
                                                        onChange={handleChange}/>
                                                    <span>{type.double}</span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="door-size">

                                            <div className="title"><span>{size.title}</span></div>
                                            <div className="door-size-input">
                                                <span>{size.width}</span>
                                                <input 
                                                    type="number" 
                                                    name="width" 
                                                    max={999}
                                                    value={doorData.width}
                                                    onChange={handleChange}/>
                                                <span className="cm">cm</span>
                                            </div>
                                            <div className="door-size-input">
                                                <span>{size.height}</span>
                                                <input 
                                                    type="number"
                                                    name="height"
                                                    max={999}
                                                    value={doorData.height}
                                                    onChange={handleChange}/>
                                                <span className="cm">cm</span>
                                            </div>

                                        </div>
                                    </React.Fragment>
                                )
                            }}
                        </MyContext.Consumer>

                    </div>
                    <div className="data-input-navigation">
                        <PrevNextButton direction="next" handleClick={nextStep} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ScreenOne;