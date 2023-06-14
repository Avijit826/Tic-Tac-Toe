import { useState } from 'react'
import './App.css'
const itemArray = new Array(9).fill('empty')

function App() {
  const [isCross, setIsCross] = useState(false)
  const [winMessage, setWinMessage] = useState('')

  const reloadGame = () => {
    setIsCross(false)
    setWinMessage('')
    itemArray.fill('empty', 0, 9)
  }

  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} Won`)
    } else if (
      itemArray[3] !== 'empty' &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} Won`)
    } else if (
      itemArray[6] !== 'empty' &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} Won`)
    } else if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} Won`)
    } else if (
      itemArray[1] !== 'empty' &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} Won`)
    } else if (
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} Won`)
    } else if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} Won`)
    } else if (
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} Won`)
    }
  }
  const changeItem = (itemNumber) => {
    if (winMessage) {
      console.log('Win')
    }

    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'Cross' : 'Circle'
      setIsCross(!isCross)
    } else {
      console.log('already filled')
    }

    checkIsWinner()
  }
  return (
    <main>
      <h2>Tic Tac Toe</h2>
      <h3>{winMessage}</h3>
      <div className='grid card'>
        {itemArray.map((item, index) => (
          <button disabled={winMessage} onClick={() => changeItem(index)}>
            {item}
          </button>
        ))}
      </div>
      <button onClick={() => reloadGame()}>Reload Game</button>
    </main>
  )
}

export default App
