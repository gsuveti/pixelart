import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseLength, increaseWidth } from '../actions/actions';
import styled from 'styled-components';

class ActionsPanel extends Component<any, any> {
    render() {
        return (
            <WrapperRow>
                <WrapperCol>
                    <button className={"btn"} onClick={() => this.props.increaseWidth(-1)}>Width-</button>
                    <button className={"btn"} onClick={() => this.props.increaseWidth(1)}>Width+</button>
                </WrapperCol>
                <br/>

                <WrapperCol>
                    <button className={"btn"} onClick={() => this.props.increaseLength(-1)}>Length-</button>
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


const mapDispatchToProps = (dispatch: any) => ({
    increaseLength: (value: number) => dispatch(increaseLength(value)),
    increaseWidth: (value: number) => dispatch(increaseWidth(value))
});


export default connect(
    null,
    mapDispatchToProps
)(ActionsPanel);
