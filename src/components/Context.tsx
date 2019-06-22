import * as React from "react";


export const MyContext = React.createContext<any | null>(null);

class MyProvider extends React.Component<any, any> {
    readonly state = {
        lang: 'en',
        en: {
            header: {
                language: "Select language:"
            },
            login: {
                title: "Log in",
                email: "Email address",
                password: "Password",
                checkbox: "Keep me logged in",
                button: "Login",
            },
            error: {
                message: "Invalid email or password"
            },
        },
        pl: {
            header: {
                language: "Wybierz język:"
            },
            login: {
                title: "Logowanie",
                email: "Adres email",
                password: "Hasło",
                checkbox: "Nie wylogowuj mnie",
                button: "Zaloguj",
            },
            error: {
                message: "Niepoprawny email lub hasło"
            }
        },
        displayLoginError: false,
    } as any;

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
    
    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                en: () => this.setState({
                    lang: 'en',
                }),
                pl: () => this.setState({
                    lang: 'pl',
                }),
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