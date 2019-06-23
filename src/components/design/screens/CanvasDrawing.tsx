import * as React from 'react';
import '../../../css/design/screens/CanvasDrawing.css';

class CanvasDrawing extends React.Component<any, any> {
    readonly state = {

    }

    render() {
        const { type, width, height, beams, posts, color }: {
            type: 'single' | 'double',
            width: number,
            height: number,
            beams: number,
            posts: number,
            color: 'black' | 'gray' | 'white',
        } = this.props.doorData;

        const colors = {
            black: "rgba(0, 0, 0, 1)",
            gray: "rgba(121, 116, 116, 1)",
            white: "rgba(244, 242, 242, 1)",
        }

        const doorStyle = {
            border: `7px solid ${colors[color]}`,
            height: `${height}px`,
            width: `${width}px`,
            gridTemplateColumns: `repeat(${posts + 1}, 1fr)`,
        } as React.CSSProperties

        const addDivs = () => {
            let total = (beams + 1) * (posts + 1);
            let divs: any[] = [];
            for(let i = 0; i < total; i++) {
                divs.push(<div className="door-rectangle" style={{border: `3px solid ${colors[color]}`,}}/>)
            }
            return divs;
        }
        const divs = addDivs();

        const doorDrawing = <div
            className="door-drawing"
            style={{ ...doorStyle }}
        >{divs}</div>

        const doubleWidth = width * 2;

        return (
            <div>
                <div className="metric-line-horizontal">
                    <div className="vertical-line-short" />
                    <div className="horizontal-line-long" />
                    <div className="horizontal-desc">{type === 'double' ? doubleWidth : width}</div>
                    <div className="horizontal-line-long" />
                    <div className="vertical-line-short" />
                </div>
                <div className="door-drawing-container">
                    <div className="metric-line-vertical">
                        <div className="horizontal-line-short" />
                        <div className="vertical-line-long" />
                        <div className="vertical-desc">{height}</div>
                        <div className="vertical-line-long" />
                        <div className="horizontal-line-short" />
                    </div>
                    {type === 'double' ? [doorDrawing, doorDrawing] : doorDrawing}
                </div>
                <div className="bottom-metric-group">
                    <div className="metric-line-horizontal-bottom-left">
                        <div className="vertical-line-short" />
                        <div className="horizontal-line-long" />
                        <div className="horizontal-desc">{width}</div>
                        <div className="horizontal-line-long" />
                        <div className="vertical-line-short" />
                    </div>
                    {type === 'double' && <div className="metric-line-horizontal-bottom-right">
                        <div className="vertical-line-short" />
                        <div className="horizontal-line-long" />
                        <div className="horizontal-desc">{width}</div>
                        <div className="horizontal-line-long" />
                        <div className="vertical-line-short" />
                    </div>}
                </div>
            </div>
        )
    }
}

export default CanvasDrawing;