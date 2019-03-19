import React, { Component } from 'react';
import Canvas from './canvas';
import ActionsPanel from './actions-panel';
import styled from 'styled-components';

class Pixelart extends Component {
    render() {
        return (
            <Wrapper>
                <ActionsPanel/>
                <Canvas/>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
display: flex;
flex-direction: row;
`;

export default Pixelart;
