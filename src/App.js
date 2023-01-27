import {useState} from "react"
import "./App.css"

const App = () => {

   const [ text, setText ] = useState("")

    const handleChange = (e) => (
      setText(e.target.value)
    )
      
    const calculateWordCount = (text) => {
      return (text
			.trim()
			.split(" ")
			.filter((word) => word !== "").length)
    }
    
    console.log(text)
	return (
  
    <div>
      <h1>How fast can you type?</h1>
      <textarea onChange={handleChange} value={text}/>
      <h4>Time remaining: ???</h4>
      <button onClick={() => calculateWordCount(text)} >Start</button>
      <h1>Word count: ???</h1>
    </div>
  )
}

export default App
