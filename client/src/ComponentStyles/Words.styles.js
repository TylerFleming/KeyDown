import styled from "styled-components";
import Words from "../Components/Words";

export const StyledWords = styled(Words)`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    width: 100%;
    height: 300px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    font-family: ${props => props.theme.fonts.lato};
    font-size: 75px;
    color: ${props => props.theme.colors.white};

    @media (max-width: 767px) {
        font-size: 45px;
    }
`

