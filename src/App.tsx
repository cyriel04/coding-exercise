import { useState } from 'react'
import './App.css'

function App() {
	let [counter, setCounter] = useState(0)

	const handleIncrement = () => {
		setCounter((counter += 1))
	}

	const handleDecrement = () => {
		setCounter((counter -= 1))
	}

	return (
		<div className="App">
			<h6>{`Counter: ${counter}`}</h6>
			<div className="button-container">
				<button onClick={handleIncrement}>Increment</button>
				<button disabled={counter <= 0} onClick={handleDecrement}>
					Decrement
				</button>
			</div>
		</div>
	)
}

export default App
