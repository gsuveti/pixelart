import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseLength, increaseLengthAsync, increaseWidth, paintPixel } from '../actions/actions';
import styled from 'styled-components';
import { AppState, CanvasState } from '../store';



interface Props {
    canvas: CanvasState,
    increaseLength: (value: number) => any
    increaseWidth: (value: number) => any
    increaseLengthAsync: (value: number) => any
    paintPixel: (position: { x: number, y: number }, color: string | undefined) => any
}

interface State {

}

class Canvas extends Component<Props, State> {

    constructor(props: Readonly<Props>) {
        super(props);
        this.getRow = this.getRow.bind(this);
    }

    getRow(index: number, width: number) {
        const {pixels: pixelsMap} = this.props.canvas;

        const pixels = new Array(width).fill(null).map((_, y) => {
            const position = {x: index, y: y};
            const color = pixelsMap.get(position.x + "_" + position.y);

            return (
                <div key={y} onClick={() => {
                    this.props.paintPixel(position, color ? undefined : "red")
                }}>
                    <Pixel color={color}></Pixel>
                </div>
            )
        });
        return (
            <Row key={index}>
                {pixels}
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

const mapDispatchToProps = (dispatch: any) => ({
    increaseLength: (value: number) => dispatch(increaseLength(value)),
    increaseWidth: (value: number) => dispatch(increaseWidth(value)),
    paintPixel: (position: { x: number, y: number }, color: string | undefined) => dispatch(paintPixel(position, color)),
    increaseLengthAsync: (value: number) => dispatch(increaseLengthAsync(value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Canvas);
