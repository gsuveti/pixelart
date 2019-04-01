import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseLength, increaseLengthAsync, increaseWidth } from '../actions/actions';
import styled from 'styled-components';
import { ActionCreator, ActionCreatorsMapObject, bindActionCreators, Dispatch } from 'redux';
import { AppActions, IncreaseLengthAction, IncreaseWidthAction } from '../actions/types';

interface OwnProps {
}

interface DispatchProps extends ActionCreatorsMapObject<AppActions> {
    increaseLength: ActionCreator<IncreaseLengthAction>
    increaseWidth: ActionCreator<IncreaseWidthAction>
    increaseLengthAsync: ActionCreator<AppActions>
}

interface StateProps {
}

type Props = StateProps & OwnProps & DispatchProps


class ActionsPanel extends Component<Props, any> {
    render() {
        return (
            <WrapperRow>
                <WrapperCol>
                    <button className={"btn"} onClick={() => this.props.increaseWidth(-1)}>Width-</button>
                    <button className={"btn"} onClick={() => this.props.increaseWidth(1)}>Width+</button>
                </WrapperCol>
                <br/>

                <WrapperCol>
                    <button className={"btn"} onClick={() => this.props.increaseLengthAsync(-1)}>Length-</button>
                    <button className={"btn"} onClick={() => this.props.increaseLength(1)}>Length+</button>
                </WrapperCol>
            </WrapperRow>
        );
    }
}

const WrapperRow = styled.div`
display: flex;
flex-direction: row;
`;

const WrapperCol = styled.div`
display: flex;
flex-direction: column;
`;


const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
    bindActionCreators<AppActions, DispatchProps>({
        increaseLength,
        increaseWidth,
        increaseLengthAsync
    }, dispatch);


export default connect<StateProps, DispatchProps, OwnProps>(
    null,
    mapDispatchToProps
)(ActionsPanel);
