import { useState } from 'react'
import './App.css'
import WordData from '../data/words.json'
import Word from './components/Word'
import UserInput from './components/UserInput'
import Guessed from './components/Guessed'

function App() {

  //Get Random Word
  const RandomWord = () =>{
    var randomNum = Math.floor(Math.random() * WordData.length)
    return WordData[randomNum]
  }


  const [puzzle, setPuzzle] = useState(RandomWord)
  const [guessed, setGuessed] = useState([''])
  
  return (
    <div className="App">
      <Word target={puzzle}/>
      <UserInput />
      <Guessed guessed={guessed} setGuessed={setGuessed}/>
    </div>
  )
}

export default App
