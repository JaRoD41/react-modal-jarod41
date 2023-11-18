

/**
 * Renders a modal component with the given properties.
 *
 * @param {boolean} isOpen - Indicates whether the modal is open or not.
 * @param {function} onClose - The function to be called when the modal is closed.
 * @param {ReactNode} children - The content to be rendered inside the modal.
 * @return {ReactNode} The rendered modal component.
 */
const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) {
		return null
	}
	return (
		<div id='modal' className='modal'>
			<div className='modal-overlay'></div>
			<div className='modal-container'>
				<div className='modal-content'>
					{/* <!--Content--> */}
					<div className='content'>{children}</div>
					{/* <!--Footer--> */}
					<div className='footer'>
						<button onClick={onClose} className='close-button'>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal


