import React, { Component } from 'react'
import { UserEndpoint } from '../../endpoints/user-endpoint';
import Logger from '../../util/logger';
import { fetchRole } from '../../endpoints/auth-endpoint';
import PrefsEndpoint from '../../endpoints/prefs-endpoint';

interface Props {
}

interface State {
    user: any
    role: string
    color: string
}

class UserProfile extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            user: {},
            role: "",
            color: ""
        }
    }

    componentDidMount() {
        UserEndpoint.fetchUser().then(result => {
            const logger: Logger = new Logger();
            logger.log("componentDidMount");

            this.setState({user: result})
        });

        fetchRole().then((result) => {
            this.setState({role: result.role})
        });

        const prefsEndpoint: PrefsEndpoint = new PrefsEndpoint({color: "red"});
        prefsEndpoint.fetchPrefs().then((result) => {
            this.setState({color: result.color})
        });
    }


    render(): React.ReactNode {
        return (
            <div>
                <div data-test='name'>
                    {this.state.user.name}
                </div>
                <div data-test='role'>
                    {this.state.role}
                </div>
                <div data-test='color'>
                    {this.state.color}
                </div>
            </div>
        )
    }
}

export default UserProfile;
