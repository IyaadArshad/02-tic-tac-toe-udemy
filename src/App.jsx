import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations.js"

function App() {
  const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
      const currentPlayer = activePlayer;
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      return updatedTurns;
    });
    console.log(activePlayer);
    console.log(activePlayer === 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player intialName="Player A" isActive={activePlayer === 'X'} playerSymbol="X" />
          <Player intialName="Player B" isActive={activePlayer === 'O'} playerSymbol="O" />
        </ol>
        <GameBoard isActive={activePlayer} turns={gameTurns} onSelectSquare={handleSelectSquare} />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App
