import Player from "./components/Player"

function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName="Player A" playerSymbol="X" />
          <Player playerName="Player B" playerSymbol="O" />
        </ol>
        PLAYERS

        GAME BOARD
      </div>

      LOG
    </main>
  )
}

export default App
