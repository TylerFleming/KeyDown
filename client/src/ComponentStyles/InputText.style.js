import styled from "styled-components";
import InputText from "../Components/InputText";

export const StyledInputText = styled(InputText)`
    margin: 70px auto 0 auto;
    width: 100%;
    max-width: 500px;
    height: 75px;
    font-size: 45px;
    color: ${props => props.theme.colors.brandMain};
    border-color: ${props => props.theme.colors.brandMain};
    text-align: center;
    
    &::placeholder {
        opacity: 0.4;

        @media (max-width: 767px) {
        font-size: 30px;
        }
    }


`