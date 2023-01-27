import {useEffect, useState, useRef} from "react"
import "./App.css"
function App() {

  const STARTING_TIME = 5
	const [text, setText] = useState("")
	const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
	const [isTimeRunning, setIsTimeRunning] = useState(false)
	const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)
  

  const handleChange = (e) => (
    setText(e.target.value)
  )

  const startGame = () => {
    
    setIsTimeRunning(true)
    setText("")
    setTimeRemaining(STARTING_TIME)
    setWordCount(0)
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  const endGame = () => {
    setIsTimeRunning(false)
	  setWordCount(calculateWordCount(text))
  }

	const calculateWordCount = (text) => {
      return (text
			.trim()
			.split(" ")
			.filter((word) => word !== "").length)
    }

	useEffect(() => {
		if (isTimeRunning && timeRemaining > 0) {
			setTimeout(() => {
				setTimeRemaining((prevTime) => prevTime - 1)
			}, 1000)
		} else if (timeRemaining === 0) {
			endGame()
		}
	}, [timeRemaining, isTimeRunning])
 
	return (
		<div>
			<h1>How fast do you type?</h1>
			<textarea
				onChange={handleChange}
				disabled={!isTimeRunning}
				value={text}
				ref={textBoxRef}
			/>
			<h4>Time remaining: {timeRemaining}</h4>
			<button onClick={startGame} disabled={isTimeRunning}>
				Start
			</button>
			<h1>Word count: {wordCount}</h1>
		</div>
	)
}

export default App

