import Logo from "./Logo"
import { StyledNav } from "../ComponentStyles/Nav.style"
import ToggleButton from './ToggleButton'

const Header = ({text, className, cb}) => {

    return (
        <header className={className}>
            <Logo text="KeyDown" />
            <StyledNav cb={cb} />
        </header>
    )
}

export default Header
