import styled from "styled-components";
import Nav from "../Components/Nav";

export const StyledNav = styled(Nav)`
    display: flex;
    
    ul {
        list-style: none;
        display: flex;
        align-items: center;

        @media (max-width: 767px) {
        padding: 0;
        }
    }
`

