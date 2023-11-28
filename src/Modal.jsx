import React from 'react'
import './Modal.css'

/**
 * Renders a modal component with the given properties.
 *
 * @param {boolean} isOpen - Indicates whether the modal is open or not.
 * @param {function} onClose - The function to be called when the modal is closed.
 * @param {ReactNode} modalContent - The content to be displayed in the modal.
 * @param {string} modalButtonText - The text to be displayed on the modal button.
 * @param {string} modalBackgroundColor - The background color of the modal.
 * @param {string} modalTextColor - The text color of the modal.
 * @param {string} modalButtonColor - The background color of the modal button.
 * @return {ReactNode} The rendered modal component.
 */
const Modal = ({ isOpen, onClose, modalContent, modalButtonText, modalBackgroundColor, modalTextColor, modalButtonColor }) => {
	if (!isOpen) {
		return null
	}
	return (
		<div id='modal' className='modal'>
			<div className='modal-overlay'></div>
			<div className='modal-container'>
				<div className='modal-content' style={{ backgroundColor: modalBackgroundColor, color: modalTextColor }}>
					{/* <!--Content--> */}
					<div className='content'>{modalContent}</div>
					{/* <!--Footer--> */}
					<div className='footer'>
						<button onClick={onClose} className='close-button' style={{ backgroundColor: modalButtonColor }}>
							{modalButtonText}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal


