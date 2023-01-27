import {useEffect, useState} from "react"
import "./App.css"

const App = () => {

   const [ text, setText ] = useState("")
   const [timeRemaining, setTimeRemaining] = useState(5)

    const handleChange = (e) => (
      setText(e.target.value)
    )
      
    const calculateWordCount = (text) => {
      return (text
			.trim()
			.split(" ")
			.filter((word) => word !== "").length)
    }
    
    useEffect(() => {
      if (timeRemaining > 0) {
			setTimeout(() => {
				setTimeRemaining(
					(prevTime) => (prevTime - 1)
					,
					[timeRemaining]
				)
			}, 1000)
		}
    })
   
	return (
		<div>
			<h1>How fast can you type?</h1>
			<textarea onChange={handleChange} value={text} />
			<h4>Time remaining: {timeRemaining}</h4>
			<button onClick={() => calculateWordCount(text)}>Start</button>
			<h1>Word count: ???</h1>
		</div>
	)
}

export default App
