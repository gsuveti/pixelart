import React, {Component} from "react";
import Square from './square';
import styled from 'styled-components';


interface Props {
    squares: any[];
    onClick: (i: number) => void;
}

let Row = styled.div`
   display:flex;
`;

let Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;


export class Board extends Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }


    renderSquare(i: number) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }


    render() {

        return (
            <Wrapper>
                <Row>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </Row>
                <Row>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </Row>
                <Row>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </Row>
            </Wrapper>
        );
    }
}


