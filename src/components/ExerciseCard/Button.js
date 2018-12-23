import React, { Component } from 'react';
import ButtonSC from './styled/ButtonSC';

class Button extends Component {
    render () {
        const { buttonAction, primary, text } = this.props;
        return (
            <ButtonSC onClick={buttonAction} primary={primary}>
                {text}
            </ButtonSC>
        );
    }
}
export default Button;