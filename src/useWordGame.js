import {useState, useEffect, useRef} from 'react'

const useWordGame = (startingTime = 5) => {

    const STARTING_TIME = 5
	const [text, setText] = useState("")
	const [timeRemaining, setTimeRemaining] = useState(startingTime)
	const [isTimeRunning, setIsTimeRunning] = useState(false)
	const [wordCount, setWordCount] = useState(0)
	const textBoxRef = useRef(null)

	const handleChange = (e) => setText(e.target.value)

	const startGame = () => {
		setIsTimeRunning(true)
		setText("")
		setTimeRemaining(startingTime)
		setWordCount(0)
		textBoxRef.current.disabled = false
		textBoxRef.current.focus()
	}

	const endGame = () => {
		setIsTimeRunning(false)
		setWordCount(calculateWordCount(text))
	}

	const calculateWordCount = (text) => {
		return text
			.trim()
			.split(" ")
			.filter((word) => word !== "").length
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
 
    return {startGame, handleChange, isTimeRunning, text, textBoxRef, timeRemaining, wordCount}

}
export default useWordGame
