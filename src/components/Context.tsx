import * as React from "react";


export const MyContext = React.createContext<any | null>(null);

class MyProvider extends React.Component<any, any> {
    readonly state = {
        lang: 'pl',
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
        },
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
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;