import React from 'react'

const Modal = (isOpen, onClose, children) => {
  if (!isOpen) {
		return null
	}

	return (
		<div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
			<div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
			<div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
				<div className="modal-content py-4 text-left px-6">
					{/* <!--Content--> */}
					<div className="my-5">{children}</div>
					{/* <!--Footer--> */}
					<div className="flex justify-end pt-2">
						<button
							onClick={onClose}
							className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
						>
							Fermer
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal


