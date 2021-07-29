
const Button = ({className, children, cb}) => {
    return (
        <button onClick={ cb ? () => cb() : null } className={className}>{children}</button>
    )
}

export default Button
