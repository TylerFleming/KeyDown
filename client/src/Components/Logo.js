import { StyledLogo } from "../ComponentStyles/Logo.style"


export const Logo = ({text, className}) => {
    return (
        <StyledLogo to="/" className={className}>{text}</StyledLogo>
    )
}


export default Logo