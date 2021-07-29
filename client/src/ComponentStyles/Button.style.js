import styled from "styled-components";
import Button from "../Components/Button";


export const StyledButton = styled(Button)`
    margin-top: 25px;
    height: 80px;
    width: fit-content;
    color: ${props => props.primary ? props.theme.colors.white : props.theme.colors.backgroundColor };
    background: ${props => props.primary ? props.theme.colors.brandMain : props.theme.colors.white };
    font-size: 35px;
    border: none;
    cursor: pointer;

    @media (max-width: 767px) {
                height: 50px;
                font-size: 20px;
            }

`