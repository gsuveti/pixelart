import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseLengthAsync, paintPixel } from '../actions/actions';
import styled from 'styled-components';
import { AppState, CanvasState } from '../store';
import { ActionTypes, PaintObject } from '../actions/types';
import { AnyAction, Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';


interface Props {
    canvas: CanvasState,
    paintPixel: typeof paintPixel
}

interface State {

}

class Canvas extends Component<Props, State> {

    constructor(props: Readonly<Props>) {
        super(props);
        this.getRow = this.getRow.bind(this);
    }

    getRow(y: number, width: number) {
        const {pixels} = this.props.canvas;

        const pixelsComponents = new Array(width).fill(null).map((_, x) => {
            const position = {x: x, y: y};
            const pixelColor = pixels[x + "_" + y];
            const color = pixelColor ? undefined : 'red';

            return (
                <div key={x} onClick={() => {
                    this.props.paintPixel({position, color: color})
                }}>
                    <Pixel color={pixelColor}></Pixel>
                </div>
            )
        });
        return (
            <Row key={y}>
                {pixelsComponents}
            </Row>
        );
    }

    render() {
        const {length, width} = this.props.canvas;

        const rows = new Array(length).fill(null).map((_, index) => this.getRow(index, width));

        return (
            <div>
                <RowWrapper>{rows}</RowWrapper>
            </div>
        );
    }
}


const RowWrapper = styled.div`
  background: whitesmoke;
  padding: 50px;
`;

const Row = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
`;

const Pixel = styled.div`
  width: 50px;
  height: 100%;
  border:1px solid black;
  background: ${props => props.color ? props.color : "white"};
`;


function mapStateToProps(state: AppState) {
    return {
        canvas: state.canvas
    };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>) => ({
    paintPixel: (paintObject: PaintObject) => dispatch(paintPixel(paintObject)),
    increaseLengthAsync: (value: number) => dispatch(increaseLengthAsync(value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Canvas);
