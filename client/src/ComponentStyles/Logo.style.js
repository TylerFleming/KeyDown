import styled from "styled-components";
import { Link  } from 'react-router-dom';


export const StyledLogo = styled(Link)`
font-size: 50px;
font-family: ${props => props.theme.fonts.pacifico};
color: ${props => props.theme.colors.white};
text-decoration: none;
`

