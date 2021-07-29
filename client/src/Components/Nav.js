import { StyledNav } from '../ComponentStyles/Nav.style'
import { StyledNavLink } from '../ComponentStyles/NavLinks.style'
import { StyledToggleButton } from '../ComponentStyles/ToggleButton.style'
import { Route } from 'react-router-dom'
import Highscores from './Highscores'

const Nav = ({className, cb}) => {
    
    return (
        <nav className={className}>
            <ul>
                <li>
                    <StyledNavLink to="/highscores" className={className}>Highscores</StyledNavLink>

                </li>
                <li>
                    <StyledToggleButton cb={cb}/>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
