
const Modal = ({className, show}) => {
    return (
        <div className={className}>
            <div className="modal-container">
                <div className="name">
                    <h2>Name</h2>
                    <input type="text" />
                    <button>Submit Highscore</button>
                    <button>Retry</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
