import * as React from 'react';
import { MyContext } from '../Context';
import '../../css/MyOrganization.css';

class MyOrganization extends React.Component {
    readonly state = {
        dataIsFetched: false,
    }

    getOrganizationData = async () => {
        const reqUrl = 'https://bench-api.applover.pl/api/v1/organization';
        const headers = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Basic eyJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb25faWQiOjEsImV4cCI6MTU2MTYzOTY3MywiY3JlYXRlZF9hdCI6IjIwMTktMDYtMTMgMTI6NDc6NTMgVVRDIn0.Vgxl0OEb-1tFNmDUzyGjIydIOeUg4cCkYuVqa_tDfD0",
                "Host": "example.org",
            },
        }
        await fetch(reqUrl, {...headers})
        .then(res => res.json())
        .then(data => this.setState({
            dataIsFetched: true,
            ...data.body
        }, () =>  console.log(this.state)))
        .catch(err => console.log(err))
    }

    handleClick = () => {
        if(this.state.dataIsFetched === false) {
            this.getOrganizationData();
        } else {

        }
    }

    componentDidMount() {
        if(this.state.dataIsFetched === false) {
            this.getOrganizationData()
        }
    }

    render() {
        return (
            <div className="my-organization">
                <MyContext.Consumer>
                    {(context) => {
                        const header = context.state[context.state.lang].header;
                        return (
                            <button>{header.organization}</button>
                        )
                    }}
                </MyContext.Consumer>
            </div>
        )
    }
}

export default MyOrganization;
