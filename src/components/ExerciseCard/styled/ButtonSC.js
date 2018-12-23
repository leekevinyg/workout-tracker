import styled from 'styled-components'

const Button = styled.button`
    font-size: 1.0em;
    height: 2em;
    font-weight: 400;
    border-radius: 3px;
    background: ${props => props.primary ? 'lightgreen;' : 'lightgray;'}
    padding: ${props => props.primary ? '0 20px' : '0 10px'}
    border: none;
    color: white;
    outline: none;
    margin-right: 10px;
    text-align: center;

    &:hover {
        background: ${props => props.primary ? 'green;' : 'gray;'};
    }
`;

Button.defaultProps = {
    primary: true,
}

export default Button;