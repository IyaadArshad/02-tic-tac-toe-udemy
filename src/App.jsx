import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] = useStatep([]);

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns();
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
        <GameBoard isActive={activePlayer} onSelectSquare={handleSelectSquare} />
      </div>

      <Log />
    </main>
  )
}

export default App
