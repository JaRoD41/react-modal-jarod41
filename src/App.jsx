import { useState } from 'react'
import { Modal } from './src/components/Modal'

const App = () => {
	const [isOpen, setIsOpen] = useState(true)
	return (
		<div>
			<Modal
				isOpen={isOpen}
				onClose={function () {
					setIsOpen(false)
				}}
				children={
					<div>
						<h1>Titre de la modale</h1>
						<p>Contenu de la modale</p>
					</div>
				}
			/>
		</div>
	)
}

export default App
