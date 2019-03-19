import React, {Component} from 'react';
import styled from 'styled-components';

interface Props {
    onClick: () => void;
    value: number
}

let Button = styled.button`
    width:40px;
    height:40px;
    background:lightgray;
    border-radius: 2px;
    border:0;
    margin:2px;
    padding:0;
`;

class Square extends Component<Props, {}> {
    render() {
        return (
            <Button
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </Button>
        );
    }
}

export default Square;
