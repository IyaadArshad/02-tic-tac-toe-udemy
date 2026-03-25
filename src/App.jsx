import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player intialName="Player A" playerSymbol="X" />
          <Player intialName="Player B" playerSymbol="O" />
        </ol>
        <GameBoard />
      </div>

      LOG
    </main>
  )
}

export default App
