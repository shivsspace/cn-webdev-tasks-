import logo from './logo.svg';
import './App.css';
import Key from './components/key.jsx';
import Hanged from './components/hanged.jsx';
import { useState } from 'react';

function App() {

  const words = ["Hello", "Bye"];
  const [word, setWord] = useState("");

  const [board, setBoard] = useState([]);

  const [guess, setGuess] = useState('');

  const updateBoard = () => {
    const updatedLetters = board.map((letter, index) => (word[index] === guess ? guess : letter));
    setBoard(updatedLetters);
    setGuess('');
  }

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setWord(words[randomIndex]);
    setBoard(Array(word.length).fill('_'));
  }

  return (
    <div className="App flex flex-col">

     <div className="">
     <Hanged />

      {word !== "" ? (<div>

      </div>
      ):(
      <div>

      </div>
      )}

      </div> 

      {word !== "" ? (<div>


        <div className="flex flex-col">
        <div className="flex flex-row gap-5 mb-5 justify-center">
          <Key name="Q" />
          <Key name="W" />
          <Key name="E" />
          <Key name="R" />
          <Key name="T" />
          <Key name="Y" />
          <Key name="U" />
          <Key name="I" />
          <Key name="O" />
          <Key name="P" />
        </div>

        <div className="flex flex-row gap-5 justify-center mb-5">
          <Key name="A" />
          <Key name="S" />
          <Key name="D" />
          <Key name="F" />
          <Key name="G" />
          <Key name="H" />
          <Key name="J" />
          <Key name="K" />
          <Key name="L" />
        </div>

        <div className="flex flex-row gap-5 justify-center mb-5">
          <Key name="Z" />
          <Key name="X" />
          <Key name="C" />
          <Key name="V" />
          <Key name="B" />
          <Key name="N" />
          <Key name="M" />
        </div>

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
