import Logo from "./Logo"
import { StyledNav } from "../ComponentStyles/Nav.style"
import ToggleButton from './ToggleButton'

const Header = ({text, className, cb}) => {

    return (
        <header className={className}>
            <h1><Logo text="KeyDown" /></h1>
            <StyledNav cb={cb} />
        </header>
    )
}

export default Header
