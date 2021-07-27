import { StyledNav } from '../ComponentStyles/Nav.style'
import { StyledNavLink } from '../ComponentStyles/NavLinks.style'
import { StyledToggleButton } from '../ComponentStyles/ToggleButton.style'

const Nav = ({className, cb}) => {
    
    return (
        <nav className={className}>
            <ul>
                <li>
                    <StyledNavLink className={className} to="/highscores">Highscores</StyledNavLink>
                </li>
                <li>
                    <StyledToggleButton cb={cb}/>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
