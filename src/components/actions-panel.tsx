import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseLength, increaseWidth } from '../actions/actions';
import styled from 'styled-components';

class ActionsPanel extends Component<any, any> {
    render() {
        return (
            <Wrapper>
                <button className={"btn"} onClick={() => this.props.increaseWidth(-1)}>Width-</button>
                <button className={"btn"} onClick={() => this.props.increaseWidth(1)}>Width+</button>
                <br/>
                <button className={"btn"} onClick={() => this.props.increaseLength(-1)}>Length-</button>
                <button className={"btn"} onClick={() => this.props.increaseLength(1)}>Length+</button>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;


const mapDispatchToProps = (dispatch: any) => ({
    increaseLength: (value: number) => dispatch(increaseLength(value)),
    increaseWidth: (value: number) => dispatch(increaseWidth(value))
});


export default connect(
    () => {
    },
    mapDispatchToProps
)(ActionsPanel);
