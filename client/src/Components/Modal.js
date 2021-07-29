import { StyledButton } from "../ComponentStyles/Button.style"


const Modal = ({className, show, big, props}) => {
    return (
        <div className={className}>
            <div className="modal-container">
                <div className="name">
                    <h2>Name</h2>
                    <input type="text" />
                     <StyledButton primary> Submit Highscore </StyledButton>
                     <StyledButton> Retry </StyledButton>
                </div>
            </div>
        </div>
    )
}

export default Modal
