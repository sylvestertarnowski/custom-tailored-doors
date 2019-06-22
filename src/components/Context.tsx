import * as React from "react";
import translations from '../assets/translations';


export const MyContext = React.createContext<any | null>(null);

class MyProvider extends React.Component<any, any> {
    readonly state = {
        lang: 'en',
        ...translations,
        displayLoginError: false,
    };

    componentDidMount = () => {
        let lang = window.navigator.language.substr(0, 2);
        if (lang === "pl") {
            this.setState({
                lang: 'pl',
            })
        } else {
            this.setState({
                lang: 'en',
            })
        }
    }

    setLang = (targetLang: string) => {
        this.setState({
            lang: targetLang,
        })
    }
    
    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                en: () => this.setLang('en'),
                pl: () => this.setLang('pl'),
                toggleLoginError: () => this.setState((state: any) => {
                    return {displayLoginError: !state.displayLoginError}
                }),
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;