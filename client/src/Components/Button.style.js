import styled from 'styled-components'
import Button from './Button'

export const Button = styled(Button)`
    width: auto;
    height: 50px;
    background: ${({bgColor}) => bgColor ? bgColor : 'red' };
    color: ${({textColor}) => textColor ? textColor : '#000'};
`