import {useEffect, useState, useRef} from "react"
import useWordGame from './useWordGame'
import "./App.css"


function App() {
  const {
		handleChange,
		isTimeRunning,
		text,
		textBoxRef,
		timeRemaining,
		wordCount,
    startGame
  } = useWordGame(10)
  
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

