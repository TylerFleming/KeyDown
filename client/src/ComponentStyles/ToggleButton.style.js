import styled from "styled-components";
import ToggleButton from "../Components/ToggleButton";

export const StyledToggleButton = styled(ToggleButton)`

    background: none;
    border: none;
    cursor: pointer;

    @media (max-width: 767px) {
        img {
            height: 30px;
        }
}
`