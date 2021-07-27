import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledNavLink = styled(Link)`
font-size: 45px;
font-family: ${props => props.theme.fonts.lato};
color: ${props => props.theme.colors.white};
text-decoration: none;
`
