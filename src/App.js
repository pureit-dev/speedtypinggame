import {useEffect, useState} from "react"
import "./App.css"

const App = () => {

   const [ text, setText ] = useState("")
   const [timeRemaining, setTimeRemaining] = useState(5)
   const [isTimeRunning, setisTimeRunning] = useState(false)

    const handleChange = (e) => (
      setText(e.target.value)
    )

    const startGame = () => {
      setisTimeRunning(true)
      
    }
      
    const calculateWordCount = (text) => {
      return (text
			.trim()
			.split(" ")
			.filter((word) => word !== "").length)
    }
    
    useEffect(() => {
      if (timeRemaining > 0 && isTimeRunning) {
        
			setTimeout(() => {
				setTimeRemaining(
					(prevTime) => prevTime - 1,
					[timeRemaining, isTimeRunning]
				) 
        
			}, 1000)
      
		} else if (timeRemaining === 0) {
          setisTimeRunning(false)
          console.log(isTimeRunning)
        }
      
    })
   
	return (
		<div>
			<h1>How fast can you type?</h1>
			<textarea onChange={handleChange} value={text} />
			<h4>Time remaining: {timeRemaining}</h4>
			<button onClick={() => startGame()}>Start</button>
			<h1>Word count: ???</h1>
		</div>
	)
}
// calculateWordCount(text)
export default App
