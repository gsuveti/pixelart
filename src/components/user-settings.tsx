import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { ActionCreator, ActionCreatorsMapObject, AnyAction, bindActionCreators, Dispatch } from 'redux';
import { changeColor } from '../actions/user-settings-actions';

interface State {
}


interface OwnProps {
    colors: string[] | undefined
}

interface DispatchProps extends ActionCreatorsMapObject<AnyAction> {
    changeColor: ActionCreator<AnyAction>
}

type Props = OwnProps & DispatchProps;

function UserSettings({colors = [], changeColor}: Props) {
    return (
        <div>
            <h3>User settings</h3>
            {colors.join(" - ")}
            <button onClick={() => changeColor("red")}>Change color to red</button>
            <button onClick={() => changeColor("blue")}>Change color to blue</button>
        </div>
    );
}

function mapStateToProps(state: AppState) {
    return {
        colors: state.userSettings.colors
    };
}


const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
    bindActionCreators<AnyAction, DispatchProps>({
        changeColor
    }, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSettings);
