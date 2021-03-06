import styled from "styled-components";
import Main from "../Components/Main";

export const StyledMain = styled(Main)`
    margin-top: 80px;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
        margin-top: 0;
}
`