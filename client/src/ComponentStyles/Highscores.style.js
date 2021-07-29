import styled from "styled-components";
import Highscores from '../Components/Highscores'

export const StyledHighscores = styled(Highscores)`
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        font-family: ${props => props.theme.fonts.lato};
        color: ${props => props.theme.colors.white};
        font-size: 45px;
        text-align: center;
        @media (max-width: 767px) {
            font-size: 32px;
        }
    }

    h3 {
        font-family: ${props => props.theme.fonts.lato};
        color: ${props => props.theme.colors.white};
        font-size: 35px;
        word-spacing: 24px;
        @media (max-width: 767px) {
            font-size: 24px;
            word-spacing: 5px;
        }
    }
`