import * as React from 'react';
import DesignNavButton from './DesignNavButton';

interface P {
    currentScreen: string;
    handleClick: (e: any) => void;
}

const DesignNav: React.FC<P> = (props) => {
    const { currentScreen, handleClick } = props;

    return (
        <React.Fragment>
            <DesignNavButton active={currentScreen} id="one" handleClick={handleClick} />
            <DesignNavButton active={currentScreen} id="two" handleClick={handleClick} />
            <DesignNavButton active={currentScreen} id="three" handleClick={handleClick} />
        </React.Fragment>
    )
}

export default DesignNav;