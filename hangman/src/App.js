import logo from './logo.svg';
import './App.css';
import Key from './components/key.jsx';
import Hanged from './components/hanged.jsx';
import { useState } from 'react';

function App() {

  const words = ["Hello", "Bye", "Mississippi", "Coding", "Hangman", "Tech", "Ninja", "Development", "React", "Laptop", "Keyboard", "Tailwind"];
  const [word, setWord] = useState("");

  const [board, setBoard] = useState([]);
  const [won, setWon] = useState(0);
  const [mistakes, setMistakes] = useState(0);


  const updateBoard = (currentGuess) => {
    const updatedLetters = board.map((letter, index) => (word[index].toUpperCase() === currentGuess.toUpperCase() ? currentGuess : letter));
    if(JSON.stringify(updatedLetters) === JSON.stringify(board)) {
      setMistakes(mistakes + 1);
    }

    const joined = updatedLetters.join('');

    if(joined === word.toUpperCase()) {
      setWon(1);
    }

    setBoard(updatedLetters);
  }

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setMistakes(0);
    setWord(words[randomIndex]);
    setBoard(Array(words[randomIndex].length).fill('_'));
    setWon(0);
  }

  return (
    <div className="App flex flex-col">

     <div className="flex flex-row">
      <Hanged errors={mistakes} />

      <div className="flex flex-col">

      {word !== "" ? (<div className="text-white flex text-center items-center ">
        {board.map((letter, index) => (
          <span className="m-2 text-4xl font-bold" key = {index}>{letter}</span>
        ))}    
      </div>
      ):null}

      {word !== "" && mistakes>5 ? (<div className="text-xl text-white text-center mt-16 font-bold">LOST!!</div>):null }

      {word !== "" && won === 1 ? (<div className="text-xl text-white text-center mt-16 font-bold">WON!!</div>):null }
      </div>


      </div> 

      {word !== "" && mistakes < 6 && won===0 ? (
        <div className="flex flex-col">
          <div className="flex flex-row gap-5 mb-5 justify-center">
            {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map(letter => (
              <button key={letter} onClick={() => { updateBoard(letter); }}>
                <Key name={letter} />
              </button>
            ))}
          </div>

          <div className="flex flex-row gap-5 justify-center mb-5">
            {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map(letter => (
              <button key={letter} onClick={() => { updateBoard(letter); }}>
                <Key name={letter} />
              </button>
            ))}
          </div>

          <div className="flex flex-row gap-5 justify-center mb-5">
            {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map(letter => (
              <button key={letter} onClick={() => { updateBoard(letter); }}>
                <Key name={letter} />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center my-5">
          <button onClick={getRandomWord} className="bg-gray-200 h-10 w-52 text-xl font-bold rounded-lg hover:bg-gray-500">Start Game</button>
        </div>
      )}

    </div>
  );
}

export default App;
